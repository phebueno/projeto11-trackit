import { useLocation } from "react-router-dom";
import styled from "styled-components";

//Remover depois:
import placeholder from "../assets/placeholder.png"

export default function Topo() {
  const location = useLocation();

  if (location.pathname !== "/" && location.pathname !== "/cadastro") {
    return (
      <Header>
        <h1>TrackIt</h1>
        <img src={placeholder} alt="" />
      </Header>
    );
  }
}

const Header = styled.header`
  height: 70px;
  width:inherit;
  background-color: #126ba5;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);
  display: flex;
  align-items: center;
  padding: 0 18px;
  justify-content: space-between;
  position: fixed;
  top: 0;
  box-sizing: border-box;
  h1 {
    font-family: "Playball";
    font-weight: 400;
    font-size: 38.982px;
    line-height: 49px;
    color: #ffffff;
  }
  img{
    //Configurar imagem para não quebrar. Centralizar a imagem, sem distorcer
    border-radius: 98.5px;
  }
`;
