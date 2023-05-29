import styled from "styled-components"
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"
import axios from "axios"
import HeaderPage from "./Header";

export default function InfosHotelView() {
    const parametro = useParams();
    const [hotelSelected, setHotelSelected] = useState(null);
    const [city, setCity] = useState();
    const [commodity, setCommodity] = useState();
    useEffect(() => {
        let cityId = null
        axios.get(`${process.env.REACT_APP_API_URL}/hotels/view/${parametro.id}`)
            .then((res) => {
                setHotelSelected(res.data[0]);
                // console.log("resposta", res.data[0]);
                axios.get(`${process.env.REACT_APP_API_URL}/city/${res.data[0].cityId}`)
                    .then((response) => {
                        setCity(response.data[0]);
                        // console.log("resposta city", response.data[0]);
                    })
                    .catch((err) => alert(err.message));            
                    })
            .catch((err) => alert(err.message));
            axios.get(`${process.env.REACT_APP_API_URL}/commodities/${parametro.id}`)
                .then((res) => {
                    setCommodity(res.data);
                    // console.log("Commodity", res.data);
                })
                .catch((err) => alert(err.message));
        
    }, []);
  
    return (
      <HomeContainer>
        <HeaderPage/>
        <HotelView>
          {hotelSelected && city && commodity &&(
            <>
              <img src={hotelSelected.image} alt="Imagem do hotel" />
              <Infos>
                <h1>{hotelSelected.name}</h1>
                <h2><b>Local:</b> {city.name} - {city.state}</h2>
                <h2><b>Preço por Diária:</b> R$ {hotelSelected.pricePerDay/100}</h2>
                <h2><b>Descrição:</b> {hotelSelected.description}</h2>
              </Infos>
              <Comodidades>
                <h1>Comodidades:</h1>
                <CommodityItens>
                    {commodity.map((item) =>
                        <h2>*{item.name}</h2>                                              
                    )}
                </CommodityItens>
              </Comodidades>
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
    padding: 20px;
    /* margin-top: 10px; */
    height: 100%;
    width: 90vw;
    /* background-color: lightgray; */
    img{
        max-width: 30vW;
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
    img{
        width: 50vW;
    }
`
const Comodidades= styled.div`
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
    img{
        width: 50vW;
    }
`
const CommodityItens= styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    margin-top: 20px;
    height: 100%;
    width: 100%;
    /* background-color: lightgray; */
    font-size: 30px;
    h2{
        color: black;
        margin-bottom: 5px;
        font-family: Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif;
        font-size: 20px;
        margin-right: 5px
    }

`