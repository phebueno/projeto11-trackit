import styled from "styled-components";
import { BsFillCheckSquareFill } from "react-icons/bs";

export default function HojeItem({    
  id,
  nome,
  feito,
  sequenciaAtual,
  sequenciaMaior,
}) {
  return (
    <HojeBox>
      <div>
        <div>
          <h3>{nome}</h3>
        </div>
        <div>
          <p>
            Sequência atual: {sequenciaAtual}{" "}
            {sequenciaAtual === 1 ? "dia" : "dias"}
          </p>
          <p>
            Seu recorde: {sequenciaMaior}{" "}
            {sequenciaMaior === 1 ? "dia" : "dias"}
          </p>
        </div>
      </div>
      {feito ? <CheckedStyle /> : <NotCheckedStyle />}
    </HojeBox>
  );
}

const CheckedStyle = styled(BsFillCheckSquareFill)`
  color: #8fc549;
  font-size: 65px;
  border-radius: 10px;
`;

const NotCheckedStyle = styled(BsFillCheckSquareFill)`
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
  }
  p {
    font-size: 12.976px;
    line-height: 16px;
    color: #666666;
  }
`;
