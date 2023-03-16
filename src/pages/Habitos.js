import styled from "styled-components";
import { BsTrash } from 'react-icons/bs';
import { SectionContainer } from "../styles/SectionContainer";

export default function Habitos() {
  return (
    <SectionContainer>
      <HabitosTitulo>
        <h2>Meus Hábitos</h2>
        <button>+</button>
      </HabitosTitulo>
      <InputBox>
        <InputInfo>
          <input type="text" placeholder="nome do hábito" />
          <div>
            <span>D</span>
            <span>S</span>
            <span>T</span>
            <span>Q</span>
            <span>Q</span>
            <span>S</span>
            <span>S</span>
          </div>
        </InputInfo>
        <BotaoContainer>
          <BtnCancelar>Cancelar</BtnCancelar>
          <BtnSalvar>Salvar</BtnSalvar>
        </BotaoContainer>
      </InputBox>
      <HabitosLista>
        <HabitoBox>
          <p>Hábito diferentão</p>
          <div>
            <span>D</span>
            <span>S</span>
            <span>T</span>
            <span>Q</span>
            <span>Q</span>
            <span>S</span>
            <span>S</span>
          </div>
          <StyledBsTrash />
        </HabitoBox>
      </HabitosLista>
      <Aviso>
        Você não tem nenhum hábito cadastrado ainda. Adicione um hábito para
        começar a trackear!
      </Aviso>
    </SectionContainer>
  );
}

const StyledBsTrash = styled(BsTrash)`
position: absolute;
top:10px;
right:10px;
color: #666666;
`

const HabitosLista = styled.div`
  display: flex;
  flex-direction: column;
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
  position:relative;
  p {
    font-size: 19.976px;
    line-height: 25px;
    color: #666666;
  }
  div {
    display: flex;
    gap: 4px;
    span {
      width: 30px;
      height: 30px;
      border: 1px solid #d5d5d5;
      border-radius: 5px;
      box-sizing: border-box;
      display: flex;
      align-items: center;
      justify-content: center;
      margin-top: 4px;

      color: #d4d4d4;
      font-size: 19.976px;
      line-height: 25px;
    }
  }
  img{
    width:13px;
    height:15px;
  }
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
    span {
      width: 30px;
      height: 30px;
      border: 1px solid #d5d5d5;
      border-radius: 5px;
      box-sizing: border-box;
      display: flex;
      align-items: center;
      justify-content: center;
      margin-top: 4px;

      color: #d4d4d4;
      font-size: 19.976px;
      line-height: 25px;
    }
  }
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
`;

const BtnSalvar = styled.button`
  font-size: 15.976px;
  line-height: 20px;
`;
