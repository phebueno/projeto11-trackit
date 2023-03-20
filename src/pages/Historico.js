import styled from "styled-components";
import Calendario from "../components/Calendario/Calendario";
import { SectionContainer } from "../styles/SectionContainer";

export default function Historico() {
  return (
    <SectionContainer>
      <HojeTitulo>
        <h2>Histórico</h2>
      </HojeTitulo>
      <HistoricoBox>
        <Calendario />
      </HistoricoBox>
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
