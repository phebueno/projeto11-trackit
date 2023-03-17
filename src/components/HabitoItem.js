import styled from "styled-components";
import { BsTrash } from "react-icons/bs";
import {temaBotaoDia, temaBotaoDiaSelecionado} from "./HabitoCadastro/TemaBotaoDia";
import BASE_URL from "../constants/urls";
import { useContext } from "react";
import UserContext from "../contexts/UserContext";
import axios from "axios";

export default function HabitoItem({ nome, dias, id, setUpdate }) {
  const week = ["D", "S", "T", "Q", "Q", "S", "S"];

  const user = useContext(UserContext);
  const config = {
    headers: {
      Authorization: `Bearer ${user.token}`,
    },
  };

  function deletarHabito() {
    const confirm = window.confirm(
      "Você tem certeza que quer apagar este hábito?"
    );
    if (confirm) {
      const url = `${BASE_URL}/habits/${id}`;
      axios
        .delete(url, config)
        .then((res) => {
          setUpdate(true);
        })
        .catch((err) => {
          alert("Algo deu errado!");
          console.log(err);
        });
    }
  }

  return (
    <HabitoBox data-test="habit-container">
      <p data-test="habit-name">{nome}</p>
      <div>
        {week.map((dia, index) => (
          <DiaSemana
            data-test="habit-day"
            key={index}
            theme={
              dias.includes(index) ? temaBotaoDiaSelecionado : temaBotaoDia
            }
          >
            {dia}
          </DiaSemana>
        ))}
      </div>
      <StyledBsTrash data-test="habit-delete-btn" onClick={deletarHabito} />
    </HabitoBox>
  );
}

const StyledBsTrash = styled(BsTrash)`
  cursor: pointer;
  position: absolute;
  top: 10px;
  right: 10px;
  color: #666666;
`;

const HabitoBox = styled.div`
  width: 340px;
  min-height: 91px;
  margin-top: 20px;
  background-color: #ffffff;
  border-radius: 5px;
  border: none;
  padding: 18px 25px 18px 14px; //maior margem na direita por causa da ícone do lixo
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  gap: 8px;
  justify-content: space-between;
  position: relative;
  p {
    font-size: 19.976px;
    line-height: 25px;
    color: #666666;
    //Para o conteúdo não fugir do box:
    overflow-wrap: break-word;
    word-wrap: break-word;
    hyphens: auto;
  }
  div {
    display: flex;
    gap: 4px;
  }
  img {
    width: 13px;
    height: 15px;
  }
`;

const DiaSemana = styled.span`
  cursor: default;
  width: 30px;
  height: 30px;
  border: 1px solid ${(props) => props.theme.border};
  border-radius: 5px;
  box-sizing: border-box;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 4px;
  background: ${(props) => props.theme.background};

  color: ${(props) => props.theme.fontcolor};
  font-size: 19.976px;
  line-height: 25px;
`;
