import { BrowserRouter, Route, Routes } from "react-router-dom";
import styled from "styled-components";
import Cadastro from "./pages/Inicio/Cadastro";
import Habitos from "./pages/Habitos";
import Historico from "./pages/Historico";
import Hoje from "./pages/Hoje";
import Login from "./pages/Inicio/Login";
import Topo from "./components/Topo";
import Menu from "./components/Menu";
import { useState } from "react";
import UserContext from "./contexts/UserContext";
import PercentageContext from "./contexts/PercentageContext";

export default function App() {
  const [usuarioLogado, setUsuarioLogado] = useState("");
  const [percentage, setPercentage] = useState(0);

  return (
    <MainContainer>
      <UserContext.Provider value={usuarioLogado}>
        <PercentageContext.Provider value={percentage}>
          <BrowserRouter>
            <Topo />
            <Routes>
              <Route
                path="/"
                element={<Login setUsuarioLogado={setUsuarioLogado} />}
              />
              <Route path="/cadastro" element={<Cadastro />} />
              <Route path="/habitos" element={<Habitos />} />
              <Route path="/hoje" element={<Hoje setPercentage={setPercentage} percentage={percentage}/>} />
              <Route path="/historico" element={<Historico />} />
            </Routes>
            <Menu />
          </BrowserRouter>
        </PercentageContext.Provider>
      </UserContext.Provider>
    </MainContainer>
  );
}

const MainContainer = styled.div`
  width: 375px;
  font-family: "Lexend Deca", sans-serif;
`;
