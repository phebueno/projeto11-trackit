import styled from "styled-components";
import { useContext, useState } from "react";
import temaBotaoDia from "./TemaBotaoDia";
import UserContext from "../../contexts/UserContext";
import axios from "axios";
import BASE_URL from "../../constants/urls";
import { ThreeDots } from "react-loader-spinner";

export default function Habito({
  adicionarHabito,
  setAdicionarHabito,
  setInputHabito,
  setUpdate,
}) {
  const week = ["D", "S", "T", "Q", "Q", "S", "S"];

  const user = useContext(UserContext);
  const config = {
    headers: {
      Authorization: `Bearer ${user.token}`,
    },
  };
  const [carregando, setCarregando] = useState(false);

  const inverterTema = ({ contorno, fundo }) => ({
    contorno: fundo,
    fundo: contorno,
  });

  function salvar() {
    setCarregando(true);
    const url = `${BASE_URL}/habits`;
    axios
      .post(url, adicionarHabito, config)
      .then((res) => {
        console.log(res);
        setAdicionarHabito({
          name: "",
          days: [],
        });
        setInputHabito(false);
        setUpdate(true);
      })
      .catch((err) => {
        console.log(err);
        if(err.response.data.message){
          alert(err.response.data.message);
        }
        else{
          alert(err.message); //erro padrão do axios
        }      
        setCarregando(false);
      });
  }

  function toggleDay(dia) {
    let arrDias = adicionarHabito.days;
    if (arrDias.includes(dia)) {
      arrDias = arrDias.filter((value) => value !== dia);
    } else arrDias.push(dia);
    setAdicionarHabito({ ...adicionarHabito, days: arrDias });
  }

  function handleChange(e) {
    setAdicionarHabito({ ...adicionarHabito, [e.target.name]: e.target.value });
  }

  return (
    <InputBox data-test="habit-create-container">
      <InputInfo>
        <input
        data-test="habit-name-input"
          type="text"
          placeholder="nome do hábito"
          name={"name"}
          value={adicionarHabito.name}
          onChange={handleChange}
          disabled={carregando}
        />
        <div>
          {week.map((dia, index) => (
            <DiaSemana
            data-test="habit-day"
              key={index}
              theme={
                adicionarHabito.days.includes(index)
                  ? inverterTema(temaBotaoDia)
                  : temaBotaoDia
              }              
              onClick={() => toggleDay(index)} 
              disabled={carregando} //elemento span não pode levar disabled normalmente!
            >
              {dia}
            </DiaSemana>
          ))}
        </div>
      </InputInfo>
      <BotaoContainer>
        <BtnCancelar data-test="habit-create-cancel-btn" onClick={() => setInputHabito(false)} disabled={carregando}>
          Cancelar
        </BtnCancelar>
        <BtnSalvar data-test="habit-create-save-btn" onClick={salvar} disabled={carregando}>{carregando ? (
            <ThreeDots
              height="40"
              width="40"
              radius="9"
              color="#FFFFFF"
              ariaLabel="three-dots-loading"
              wrapperStyle={{}}
              wrapperClassName=""
              visible={true}
            />
          ) : (
            'Salvar'
          )}</BtnSalvar>
      </BotaoContainer>
    </InputBox>
  );
}

const InputBox = styled.div`
  width: 340px;
  min-height: 180px;
  margin-top: 20px;
  background-color: #ffffff;
  border-radius: 5px;
  border: none;
  padding: 18px 18px 14px;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  div {
    display: flex;
    gap: 4px;
  }
`;

const DiaSemana = styled.span`
  pointer-events: ${(props) => props.disabled ? "none" : "auto"}; //desabilita no loading
  cursor: pointer; //também é desabilitado indiretamente
  width: 30px;
  height: 30px;
  border: 1px solid ${(props) => props.theme.contorno};
  border-radius: 5px;
  box-sizing: border-box;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 4px;
  background: ${(props) => props.theme.fundo};

  color: ${(props) => props.theme.contorno};
  font-size: 19.976px;
  line-height: 25px;
`;

const InputInfo = styled.div`
  display: flex;
  flex-direction: column;
`;

const BotaoContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  button {
    width: 84px;
    height: 35px;
  }
`;

const BtnCancelar = styled.button`
  font-size: 15.976px;
  line-height: 20px;
  color: #52b6ff;
  background-color: #ffffff;
  :disabled{
    color: #52b6ff;
    background-color: #ffffff;
  }
`;

const BtnSalvar = styled.button`
  font-size: 15.976px;
  line-height: 20px;
`;
