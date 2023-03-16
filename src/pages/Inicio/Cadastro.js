import axios from "axios";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import logo from "../../assets/logo.png";
import { FormBox, StartBox } from "./styled";

export default function Cadastro() {

  const navigate = useNavigate();
  const [cadastroUsuario, setCadastroUsuario] = useState({
    email: "",
    name: "",
    image: "",
    password: "",
  });

  //Atualiza e armazena o estado de cadastro do usuário
  function handleChange(e) {
    setCadastroUsuario({ ...cadastroUsuario, [e.target.name]: e.target.value });
  }

  console.log(cadastroUsuario);

  function cadastrarUsuario(e) {
    e.preventDefault();
    const baseURL =
      "https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/auth/sign-up";
    
    axios
      .post(baseURL, cadastroUsuario)
      .then((res) => {
        navigate("/");
      })
      .catch((err) => {
        alert("Algo deu errado!");
        console.log(err.response.data.message);
        console.log(err.response.data.details);
      });
  }

  return (
    <StartBox>
      <img src={logo} alt="" />
      <FormBox onSubmit={cadastrarUsuario}>
        <input
          type="email"
          placeholder="email"
          name={"email"}
          value={cadastroUsuario.email}
          onChange={handleChange}
        />
        <input
          type="password"
          placeholder="senha"
          name={"password"}
          value={cadastroUsuario.password}
          onChange={handleChange}
        />
        <input
          type="text"
          placeholder="nome"
          name={"name"}
          value={cadastroUsuario.name}
          onChange={handleChange}
        />
        <input
          type="text"
          placeholder="foto"
          name={"image"}
          value={cadastroUsuario.image}
          onChange={handleChange}
        />
        <button type="submit">Cadastrar</button>
      </FormBox>

      <Link to="/">Já tem uma conta? Faça login!</Link>
    </StartBox>
  );
}
