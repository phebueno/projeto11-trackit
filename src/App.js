import { BrowserRouter, Route, Routes } from "react-router-dom";
import styled from "styled-components";
import Cadastro from "./pages/Inicio/Cadastro";
import Habitos from "./pages/Habitos";
import Historico from "./pages/Historico";
import Hoje from "./pages/Hoje";
import Login from "./pages/Inicio/Login";

export default function App() {
  return (
    <MainContainer>
      <BrowserRouter>
    {/* <Topo e Menu /> */}
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/cadastro" element={<Cadastro />} />
        <Route path="/habitos" element={<Habitos />} />
        <Route path="/hoje" element={<Hoje />} />
        <Route path="/historico" element={<Historico />} />
      </Routes>
    </BrowserRouter>
    </MainContainer>
    
  );
}

const MainContainer = styled.div`
width:375px;
font-family: 'Lexend Deca', sans-serif;
`;
