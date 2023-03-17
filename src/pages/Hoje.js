import styled from "styled-components";
import { SectionContainer } from "../styles/SectionContainer";
import UserContext from "../contexts/UserContext";
import { useContext, useEffect, useState } from "react";
import BASE_URL from "../constants/urls";
import axios from "axios";
import HojeItem from "../components/HojeItem";
import dayjs from "dayjs";

export default function Hoje() {
  const user = useContext(UserContext);
  const percentage = 50;
  const [listaHoje, setListaHoje] = useState([]);  

  //INÍCIO USO DE DIAS

  require('dayjs/locale/pt-br'); //puxa o locale pt-br
  var localeData = require('dayjs/plugin/localeData');
  dayjs.extend(localeData); //libera o uso do plugin para usar meses e dias
  dayjs.locale('pt-br'); //seta o locale pt-br
  const weekdays = dayjs.weekdays()
  
  let now = dayjs();
  //variáveis fixas que só mudam se atualizar o site
    const diaDaSemana = weekdays[now.day()];
    const diaDaSemanaMaiusc = diaDaSemana.charAt(0).toUpperCase() + diaDaSemana.slice(1);
    const diaMes = now.format('DD/MM');
  //FIM USO DE DIAS

  useEffect(() => {
    const config = {
      headers: {
        Authorization: `Bearer ${user.token}`,
      },
    };

    const url = `${BASE_URL}/habits/today`;
    axios
      .get(url, config)
      .then((res) => {
        setListaHoje(res.data);
      })
      .catch((err) => {
        console.log(err);
        alert("Algo deu errado!");
      });
  }, [user]);
  return (
    <SectionContainer>
      <HojeTitulo>
        <h2>{diaDaSemanaMaiusc}, {diaMes}</h2>
        <p>{percentage}% dos hábitos concluídos</p>
      </HojeTitulo>
      <HojeList>
        {listaHoje &&
          listaHoje.map((itemHoje, index) => (
            <HojeItem
              key={index}
              id={itemHoje.id}
              nome={itemHoje.name}
              feito={itemHoje.done}
              sequenciaAtual={itemHoje.currentSequence}
              sequenciaMaior={itemHoje.highestSequence}
            />
          ))}
      </HojeList>
    </SectionContainer>
  );
}

const HojeList = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 30px;
  gap: 10px;
`;

const HojeTitulo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
  h2 {
    font-size: 22.976px;
    line-height: 29px;
    color: #126ba5;
  }
  p {
    font-size: 17.976px;
    line-height: 22px;
    color: #8fc549;
  }
`;
