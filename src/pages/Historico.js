import { useState } from "react";
import styled from "styled-components";
import Calendario from "../components/Calendario/Calendario";
import { SectionContainer } from "../styles/SectionContainer";

export default function Historico() {
  const [habitosDiarios, setHabitosDiarios] = useState([]);
  return (
    <SectionContainer>
      <HojeTitulo>
        <h2>Histórico</h2>
      </HojeTitulo>
      <HistoricoBox data-test="calendar">
        <Calendario setHabitosDiarios={setHabitosDiarios} />
      </HistoricoBox>
      {habitosDiarios.length !== 0 &&
        habitosDiarios.map((habito, index) => 
        <HabitoBox key={index} feito={habito.done}>
          <p>{habito.name}</p>
        </HabitoBox>)}
    </SectionContainer>
  );
}

const HojeTitulo = styled.div`
  h2 {
    font-size: 22.976px;
    line-height: 29px;
    color: #126ba5;
  }
`;

const HistoricoBox = styled.div`
  margin-top: 17px;
  p {
    font-size: 17.976px;
    line-height: 22px;
    color: #666666;
  }
`;

const HabitoBox = styled.div`
  width: 340px;
  min-height: 50px;
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
    color: ${(props) => props.feito ? "#8cc654" : "#ea5766"};
    //Para o conteúdo não fugir do box:
    overflow-wrap: break-word;
    word-wrap: break-word;
    hyphens: auto;
  }
`;
