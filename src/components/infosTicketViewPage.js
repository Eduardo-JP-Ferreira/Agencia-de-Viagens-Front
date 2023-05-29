import styled from "styled-components"
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"
import axios from "axios"
import HeaderPage from "./Header";

export default function InfosTicketView({icone}) {
    const parametro = useParams();
    const [ticketSelected, setTicketSelected] = useState(null);
    // const [ticket, setTicket] = useState();
    useEffect(() => {
        axios.get(`${process.env.REACT_APP_API_URL}/tickets/id/${parametro.id}`)
            .then((res) => {
                setTicketSelected(res.data[0]);
                console.log("resposta", res.data[0]);          
            })
            .catch((err) => alert(err.message));
        
    }, []);

    return (
        <HomeContainer>
          <HeaderPage/>
          <HotelView>
            {ticketSelected &&  (
              <>
                <img src="https://img.freepik.com/fotos-premium/aviao-decolando-do-aeroporto_37416-74.jpg"
                 alt="Imagem do hotel" />
                <Infos>
                  <h1>Detalhes do Voo:</h1>
                  <h2><b>Cidade de Origem:</b> {ticketSelected.originName} </h2>
                  <h2><b>Cidade de Destino:</b> {ticketSelected.destinationName} </h2>
                  <h2><b>Compania Aérea:</b> {ticketSelected.cia}</h2>
                  <h2><b>Horário de Partida:</b> {ticketSelected.departureTime.slice(0,5)} </h2>
                  <h2><b>Horário Previsto de Chegada:</b>  {ticketSelected.arrivalTime.slice(0,5)}</h2>
                  <h2><b>Preço:</b> R$ {ticketSelected.price/100}</h2>
                </Infos>
              </>
            )}
          </HotelView>
        </HomeContainer>
      );
    }
  
  
  const HomeContainer = styled.div`
      display: flex;
      flex-direction: column;
      align-items: center;
      height: calc(100vh - 50px);
  `
  
  // const Header = styled.header`
  //     display: flex;
  //     align-items: center;
  //     justify-content: center;
  //     margin-bottom: 20px;
  //     font-size: 26px;
  //     color: black;
  //     width: 90vw;
  //     background-color: lightgoldenrodyellow;
  //     img{
  //         width: 50px;
  //         height: 50px;
  //         margin-left: 20px;
  //     }
  // `
  const HotelView= styled.div`
      display: flex;
      flex-direction: column;
      align-items: center;
      margin-top: 20px;
      height: 100%;
      width: 90vw;
      /* background-color: white; */
      img{
          max-width: 35vW;
          max-height: 30vH;
      }
  `
  const Infos= styled.div`
      display: flex;
      flex-direction: column;
      align-items: center;
      margin-top: 20px;
      height: 100%;
      width: 100%;
      /* background-color: lightgray; */
      h1{
          color: black;
          margin-bottom: 20px;
          font-family: Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif;
          font-size: 30px;
      }
      h2{
          color: black;
          margin-bottom: 5px;
          font-family: Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif;
          font-size: 20px;
      }
  `
