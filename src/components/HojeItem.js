import styled from "styled-components";
import { BsFillCheckSquareFill } from "react-icons/bs";
import { useContext, useEffect, useState } from "react";
import UserContext from "../contexts/UserContext";
import BASE_URL from "../constants/urls";
import axios from "axios";

export default function HojeItem({
  id,
  nome,
  feito,
  sequenciaAtual,
  sequenciaMaior,
  setUpdate,
}) {

  const [disableHabito,setDisableHabito] = useState(false); //para não bugar o código, enviar duas requisições diferentes sem tempo de resposta
  const user = useContext(UserContext);
  const config = {
    headers: {
      Authorization: `Bearer ${user.token}`,
    },
  };

  /**
   * A ideia aqui é que o clique do botão do Check só seja liberado quando receber resposta do servidor.
   * Isso funciona porque se não, dependendo do momento que o botão for clicado, são enviadas requisições
   * duplicadas para o servidor, que ainda tem que responder a outra requisição de atualização da página
   * Se a requisição duplicada for enviada enquanto o servidor responde à atualização GET de atualização
   * da página (em Hoje.js), receberá erro do axios. Para resolver isso, o botão só é liberado assim
   * que ocorrer alguma modificação no state "feito", que só ocorre quando as informações do GET chegam.
   * Poderia ter utilizado algum outro estado, mas esse faz mas sentido pelo uso dele ser justamente para
   * os botões.
   */
  useEffect(()=>{
    setDisableHabito(false);
  },[feito])

  function toggleHabito(toggle) {
    setDisableHabito(true);
    const url = `${BASE_URL}/habits/${id}/${toggle}`;
    axios
      .post(url, "", config)
      .then((res) => {
        setUpdate(true);
      })
      .catch((err) => {
        console.log(err);
        alert("Algo deu errado!");
        setDisableHabito(false); //libera pois não enviou a resposta propriamente
      });
  }
  //https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/54632/check
  //https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/ID_DO_HABITO/check
  return (
    <HojeBox data-test="today-habit-container">
      <div>
        <div>
          <h3 data-test="today-habit-name">{nome}</h3>
        </div>
        <div>
          <Atual data-test="today-habit-sequence" feito={feito}>
            Sequência atual: {sequenciaAtual}{" "}
            {sequenciaAtual === 1 ? "dia" : "dias"}
          </Atual>
          <Maior
            data-test="today-habit-record"
            sequenciaMaior={sequenciaMaior}
            sequenciaAtual={sequenciaAtual}
          >
            Seu recorde: {sequenciaMaior}{" "}
            {sequenciaMaior === 1 ? "dia" : "dias"}
          </Maior>
        </div>
      </div>
      {feito ? (
        <CheckedStyle disabled={disableHabito}
          data-test="today-habit-check-btn"
          onClick={() => toggleHabito("uncheck")}
        />
      ) : (
        <NotCheckedStyle disabled={disableHabito}
          data-test="today-habit-check-btn"
          onClick={() => toggleHabito("check")}
        />
      )}
    </HojeBox>
  );
}

const CheckedStyle = styled(BsFillCheckSquareFill)`
pointer-events: ${(props) => props.disabled ? "none" : "auto"}; //desabilita enquanto não há resposta do servidor
cursor:pointer;
  color: #8fc549;
  font-size: 65px;
  border-radius: 10px;
`;

const NotCheckedStyle = styled(BsFillCheckSquareFill)`
pointer-events: ${(props) => props.disabled ? "none" : "auto"}; //desabilita enquanto não há resposta do servidor
cursor:pointer;
  color: #ebebeb;
  font-size: 65px;
  border: 1px solid #e7e7e7;
  border-radius: 10px;
  box-sizing: border-box;
`;

const HojeBox = styled.div`
  width: 340px;
  min-height: 94px;
  background-color: #ffffff;
  border-radius: 5px;
  border: none;
  padding: 15px;
  box-sizing: border-box;
  display: flex;
  justify-content: space-between;
  align-items: center;
  div {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }
  h3 {
    font-size: 19.976px;
    line-height: 25px;
    color: #666666;
    margin-bottom: 10px;
    max-width: 230px;
    //Para o conteúdo não fugir do box:
    overflow-wrap: break-word;
    word-wrap: break-word;
    hyphens: auto;
  }
  p {
    font-size: 12.976px;
    line-height: 16px;
  }
`;

const Atual = styled.p`
  color: ${(props) => (props.feito ? "#8FC549" : "#666666")};
`;

const Maior = styled.p`
  //Se não houver sequência Maior (se for 0), não pinta de verde. Se for, pinta se as sequências forem iguais
  color: ${({ sequenciaAtual, sequenciaMaior }) =>
    sequenciaMaior && sequenciaAtual === sequenciaMaior
      ? "#8FC549"
      : "#666666"};
`;
