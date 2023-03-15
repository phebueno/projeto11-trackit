import { Link } from "react-router-dom";
import logo from "../../assets/logo.png";
import { FormBox, StartBox } from "./styled";

export default function Cadastro() {
  return (
    <StartBox>
      <img src={logo} alt="" />
      <FormBox>
        <input type="email" placeholder="email" />
        <input type="password" placeholder="senha" />
        <input type="text" placeholder="nome" />
        <input type="text" placeholder="foto" />
        <button type="submit">Cadastrar</button>
      </FormBox>

      <Link to="/">Já tem uma conta? Faça login!</Link>
    </StartBox>
  );
}