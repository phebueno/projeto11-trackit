import styled from "styled-components";
import { SectionContainer } from "../styles/SectionContainer";
import UserContext from "../contexts/UserContext";
import { useContext, useEffect, useState } from "react";
import BASE_URL from "../constants/urls";
import axios from "axios";
import HojeItem from "../components/HojeItem";
import dayjs from "dayjs";
import { useNavigate } from "react-router-dom";


export default function Hoje({setPercentage, percentage}) {
  const user = useContext(UserContext);
  
  const [listaHoje, setListaHoje] = useState([]);
  const [update, setUpdate] = useState(true);
  const navigate = useNavigate();


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
    if(update===true){
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
          const tarefasFeitas = res.data.filter((item)=> item.done === true);
          setPercentage(Math.floor(tarefasFeitas.length/res.data.length*100));
          if(res.data.length===0) setPercentage(0); //se não tiver valor, força a ser 0
          setUpdate(false);
        })
        .catch((err) => {
          console.log(err);
          alert("Algo deu errado! Tente novamente");
          //localStorage.removeItem("lista"); //obrigado o usuário a logar de novo
          //navigate('/');
        });
    }    
  }, [user,update,setPercentage,navigate]);

  return (
    <SectionContainer>
      <HojeTitulo percentage={percentage} habitosLista={listaHoje.length}>
        <h2 data-test="today">{diaDaSemanaMaiusc}, {diaMes}</h2>
        <p data-test="today-counter">{(percentage===0) || (listaHoje.length===0) ? //nenhum hábito concluído ou nenhum hábito feito
        'Nenhum hábito concluído ainda':
        `${percentage}% dos hábitos concluídos`}
        </p>
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
              setUpdate={setUpdate}
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
    color: ${({percentage,habitosLista})=>(percentage === 0)||(habitosLista === 0) ? '#BABABA': '#8fc549'};
  }
`;
