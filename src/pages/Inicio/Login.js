import { Link } from "react-router-dom";
import logo from "../../assets/logo.png";
import { FormBox, StartBox } from "./styled";


export default function Login() {
  return (
    <StartBox>
      <img src={logo} alt="" />
      <FormBox>
        <input type="email" placeholder="email" />
        <input type="password" placeholder="senha" />
        <button type="submit">Entrar</button>
      </FormBox>

      <Link to="/cadastro">Não tem uma conta? Cadastre-se!</Link>
    </StartBox>
  );
}