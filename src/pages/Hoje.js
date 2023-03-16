import styled from "styled-components";
import { SectionContainer } from "../styles/SectionContainer";
import { BsFillCheckSquareFill } from "react-icons/bs";

export default function Hoje() {
  const percentage = 50;
  return (
    <SectionContainer>
      <HojeTitulo>
        <h2>Segunda, 17/05</h2>
        <p>{percentage}% dos hábitos concluídos</p>
      </HojeTitulo>
      <HojeList>
        <HojeBox>
          <div>
            <div>
              <h3>Ler 1 capítulo de livro</h3>
            </div>
            <div>
              <p>Sequência atual: 3 dias</p>
              <p>Seu recorde: 3 dias</p>
            </div>
          </div>
          <NotCheckedStyle />
        </HojeBox>
        <HojeBox>
          <div>
            <div>
              <h3>Ler 1 capítulo de livro </h3>
            </div>
            <div>
              <p>Sequência atual: 3 dias</p>
              <p>Seu recorde: 3 dias</p>
            </div>
          </div>
          <CheckedStyle />
        </HojeBox>
      </HojeList>
    </SectionContainer>
  );
}

const CheckedStyle = styled(BsFillCheckSquareFill)`
color:#8FC549;
font-size:65px;
border-radius: 10px;
`;

const NotCheckedStyle = styled(BsFillCheckSquareFill)`
color:#EBEBEB;
font-size:65px;
border: 1px solid #E7E7E7;
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
  div{
    display:flex;
    flex-direction: column;
    justify-content: space-between;
  }
  h3 {
    font-size: 19.976px;
    line-height: 25px;
    color: #666666;
    margin-bottom: 10px;;
  }
  p{
    font-size: 12.976px;
    line-height: 16px;
    color: #666666;
  }
`;

const HojeList = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 30px;
  gap:10px;
`;

const HojeTitulo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
  h2 {
    font-size: 22.976px;
    line-height: 29px;
    color: #126ba5;
  }
  p {
    font-size: 17.976px;
    line-height: 22px;
    color: #8fc549;
  }
`;
