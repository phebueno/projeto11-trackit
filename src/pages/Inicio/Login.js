import { Link, useNavigate } from "react-router-dom";
import logo from "../../assets/logo.png";
import { FormBox, StartBox } from "./styled";
import { useState } from "react";
import axios from "axios";
import BASE_URL from "../../constants/urls";
import { ThreeDots } from "react-loader-spinner";

export default function Login({ setUsuarioLogado }) {
  const navigate = useNavigate();
  const [loginUsuario, setLoginUsuario] = useState({
    email: "",
    password: "",
  });
  const [carregando, setCarregando] = useState(false);

  //Atualiza e armazena o estado de cadastro do usuário
  function handleChange(e) {
    setLoginUsuario({ ...loginUsuario, [e.target.name]: e.target.value });
  }

  function login(e) {
    setCarregando(true);
    e.preventDefault();
    const url = `${BASE_URL}/auth/login`;
    axios
      .post(url, loginUsuario)
      .then((res) => {
        console.log(res);
        setUsuarioLogado(res.data);
        navigate("/hoje");
      })
      .catch((err) => {
        alert("Algo deu errado!");
        setCarregando(false);
        console.log(err);
      });
  }

  console.log(loginUsuario);

  return (
    <StartBox>
      <img src={logo} alt="" />
      <FormBox onSubmit={login}>
        <input
          type="email"
          placeholder="email"
          name={"email"}
          value={loginUsuario.email}
          onChange={handleChange}
          disabled={carregando}
        />
        <input
          type="password"
          placeholder="senha"
          name={"password"}
          value={loginUsuario.password}
          onChange={handleChange}
          disabled={carregando}
        />
        <button type="submit" disabled={carregando}>
          {carregando ? (
            <ThreeDots
              height="50"
              width="50"
              radius="9"
              color="#FFFFFF"
              ariaLabel="three-dots-loading"
              wrapperStyle={{}}
              wrapperClassName=""
              visible={true}
            />
          ) : (
            'Entrar'
          )}
        </button>
      </FormBox>

      <Link to="/cadastro">Não tem uma conta? Cadastre-se!</Link>
    </StartBox>
  );
}
