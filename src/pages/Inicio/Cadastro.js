import axios from "axios";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import logo from "../../assets/logo.png";
import BASE_URL from "../../constants/urls";
import { FormBox, StartBox } from "./styled";
import { ThreeDots } from "react-loader-spinner";

export default function Cadastro() {
  const navigate = useNavigate();
  const [cadastroUsuario, setCadastroUsuario] = useState({
    email: "",
    name: "",
    image: "",
    password: "",
  });
  const [carregando, setCarregando] = useState(false);

  //Atualiza e armazena o estado de cadastro do usuário
  function handleChange(e) {
    setCadastroUsuario({ ...cadastroUsuario, [e.target.name]: e.target.value });
  }

  console.log(cadastroUsuario);

  function cadastrarUsuario(e) {
    e.preventDefault();
    setCarregando(true);
    const url = `${BASE_URL}/auth/sign-up`;

    axios
      .post(url, cadastroUsuario)
      .then((res) => {
        navigate("/");
      })
      .catch((err) => {
        console.log(err);
        if(err.response.data.message){
          const detalhesErro = err.response.data.details;
          alert(`${err.response.data.message}${detalhesErro ? `\nDetalhes do erro: ${detalhesErro}` : ""}`);
        }
        else{
          alert(err.message)
        }
        setCarregando(false);
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
          disabled={carregando}
          required
        />
        <input
          type="password"
          placeholder="senha"
          name={"password"}
          value={cadastroUsuario.password}
          onChange={handleChange}
          disabled={carregando}
          required
        />
        <input
          type="text"
          placeholder="nome"
          name={"name"}
          value={cadastroUsuario.name}
          onChange={handleChange}
          disabled={carregando}
          required
        />
        <input
          type="text"
          placeholder="foto"
          name={"image"}
          value={cadastroUsuario.image}
          onChange={handleChange}
          disabled={carregando}
          required
        />
        <button type="submit" disabled={carregando}>{carregando ? (
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
            'Cadastrar'
          )}</button>
      </FormBox>

      <Link to="/">Já tem uma conta? Faça login!</Link>
    </StartBox>
  );
}
