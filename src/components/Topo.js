import { useContext } from "react";
import { useLocation } from "react-router-dom";
import styled from "styled-components";
import UserContext from "../contexts/UserContext";

export default function Topo() {
  const location = useLocation();
  const user = useContext(UserContext);

  if (location.pathname !== "/" && location.pathname !== "/cadastro") {
    return (
      <Header data-test="header">
        <h1>TrackIt</h1>
        <img src={user.image} alt="" />
      </Header>
    );
  }
}

const Header = styled.header`
  height: 70px;
  width: inherit;
  background-color: #126ba5;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);
  display: flex;
  align-items: center;
  padding: 0 18px;
  justify-content: space-between;
  position: fixed;
  top: 0;
  box-sizing: border-box;
  z-index: 1;
  h1 {
    font-family: "Playball";
    font-weight: 400;
    font-size: 38.982px;
    line-height: 49px;
    color: #ffffff;
  }
  img {
    //Configurar imagem para não quebrar. Centralizar a imagem, sem distorcer
    width: 51px;
    height: 51px;
    object-fit: cover;
    border-radius: 98.5px;
  }
`;
