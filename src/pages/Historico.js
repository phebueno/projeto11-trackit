import dayjs from "dayjs";
import { useState } from "react";
import styled from "styled-components";
import Calendario from "../components/Calendario/Calendario";
import { SectionContainer } from "../styles/SectionContainer";

export default function Historico() {
  const [habitosDiarios, setHabitosDiarios] = useState([]);
  console.log(habitosDiarios);
  return (
    <SectionContainer>
      <HojeTitulo>
        <h2>Histórico</h2>
      </HojeTitulo>
      <HistoricoBox data-test="calendar">
        <Calendario setHabitosDiarios={setHabitosDiarios} />
      </HistoricoBox>

      {habitosDiarios.length !== 0 &&
        <HojeTitulo>
        <h3>Hábitos do dia {dayjs(habitosDiarios[0].date).format('DD/MM')}</h3>
      </HojeTitulo>}
      <HabitoBoxContainer>        
      {habitosDiarios.length !== 0 &&
        habitosDiarios.map((habito, index) => 
        <HabitoBox key={index} feito={habito.done}>
          <NumeroLista>{index+1}</NumeroLista><p>{habito.name}</p>
        </HabitoBox>)}
      </HabitoBoxContainer>
    </SectionContainer>
  );
}

const HojeTitulo = styled.div`
  h2 {
    font-size: 22.976px;
    line-height: 29px;
    color: #126ba5;
  }
  h3{
    margin-top: 20px;
    margin-bottom: 10px;
    font-size: 18px;
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

const HabitoBoxContainer = styled.div`
`;

const HabitoBox = styled.div`
  width: 335px;
  background-color: #ffffff;
  border: none;
  padding: 10px;
  box-sizing: border-box;
  display: flex;
  align-items: center;
  gap:10px;
  margin: 0 auto;
  &:first-child{
    border-top-left-radius:10px;
    border-top-right-radius:10px;

  } 
  &:last-child{
    border-bottom-left-radius:10px;
    border-bottom-right-radius:10px;

  } 
  p {
    font-size: 15px;
    color: ${(props) => props.feito ? "#8cc654" : "#ea5766"};
    //Para o conteúdo não fugir do box:
    overflow-wrap: break-word;
    word-wrap: break-word;
    hyphens: auto;
  }
`;

const NumeroLista = styled.span`
  cursor: default;
  min-width: 30px;
  min-height: 30px;
  border: 1px solid #CFCFCF;
  border-radius: 5px;
  box-sizing: border-box;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 4px;
  background: #CFCFCF;

  color: #FFFFFF;
  font-size: 19.976px;
  line-height: 25px;
`;
