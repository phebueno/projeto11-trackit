import styled from "styled-components";
import { SectionContainer } from "../styles/SectionContainer";
import { useContext, useEffect, useState } from "react";
import Habito from "../components/HabitoCadastro/HabitoCadastro";
import BASE_URL from "../constants/urls";
import UserContext from "../contexts/UserContext";
import axios from "axios";
import HabitoItem from "../components/HabitoItem";
import { useNavigate } from "react-router-dom";


export default function Habitos() {
  const [inputHabito, setInputHabito] = useState(false);
  const [adicionarHabito, setAdicionarHabito] = useState({
    name: "",
    days: [],
  });
  const [listaHabitos, setListaHabitos] = useState([]);
  const [update, setUpdate] = useState(true);
  const user = useContext(UserContext);
  const navigate = useNavigate();


  useEffect(() => {
    if (update === true) {
      const config = {
        headers: {
          Authorization: `Bearer ${user.token}`,
        },
      };

      const url = `${BASE_URL}/habits`;
      axios
        .get(url, config)
        .then((res) => {
          setListaHabitos(res.data);
          setUpdate(false);
        })
        .catch((err) => {
          console.log(err);
          alert("Algo deu errado! Tente novamente");
          localStorage.removeItem("lista"); //obrigado o usuário a logar de novo
          navigate('/');        
        });
    }
  }, [update, user, navigate]);

  return (
    <SectionContainer>
      <HabitosTitulo>
        <h2>Meus Hábitos</h2>
        <button data-test="habit-create-btn" onClick={() => setInputHabito(true)}>+</button>
      </HabitosTitulo>
      {inputHabito && (
        <Habito
          adicionarHabito={adicionarHabito}
          setAdicionarHabito={setAdicionarHabito}
          setInputHabito={setInputHabito}
          setUpdate={setUpdate}
        />
      )}

      <HabitosLista>
        {listaHabitos.length !== 0 ? (
          listaHabitos.map((itemHabito, index) => (
            <HabitoItem
              key={index}
              id={itemHabito.id}
              nome={itemHabito.name}
              dias={itemHabito.days}
              setUpdate={setUpdate}
            />
          ))
        ) : (
          <Aviso>
            Você não tem nenhum hábito cadastrado ainda. Adicione um hábito para
            começar a trackear!
          </Aviso>
        )}
      </HabitosLista>
    </SectionContainer>
  );
}

const HabitosLista = styled.div`
  display: flex;
  flex-direction: column;
`;

const HabitosTitulo = styled.div`
  display: flex;
  justify-content: space-between;
  h2 {
    font-size: 22.976px;
    line-height: 29px;
    color: #126ba5;
  }
  button {
    width: 40px;
    height: 35px;

    color: #ffffff;
    font-size: 26.976px;
    padding-bottom: 3px;
    box-sizing: border-box;
  }
`;

const Aviso = styled.p`
  margin-top: 28px;
  font-size: 17.976px;
  line-height: 22px;

  color: #666666;
`;
