import styled from "styled-components"
import { useEffect, useState } from "react";
import axios from "axios"
import Hotels from "./Hotels";
import HeaderPage from "./Header";
export default function HomePage() {
    const [checkPassagem, setCheckPassagem] = useState(true)
    const [checkHotel, setCheckHotel] = useState(true)
    const [cities, setCities] = useState([])
    const [origem, setOrigem] = useState("default")
    const [destino, setDestino] = useState("default")
    const [hotels, setHotels] = useState([])
    const [tickets, setTickets] = useState([])
    const [filterHotels, setFilterHotels] = useState([])
    const [filterTickets, setFilterTickets] = useState([])
    const [minHotel, setMinHotel] = useState(0)
    const [maxHotel, setMaxHotel] = useState(500)
    const [minTicket, setMinTicket] = useState(0)
    const [maxTicket, setMaxTicket] = useState(2000)
    useEffect(() => {

        axios.get(`${process.env.REACT_APP_API_URL}/city`,)
            .then((res) => {
                setCities(res.data)
                // console.log(res.data)
            })
            .catch((err) => alert(err.message))
    }, [])

    function pesquisar(event) {
        event.preventDefault();
        // alert("Pass ", checkPassagem)
        console.log("origem ", origem)
        console.log("destino ", destino)

        if(destino === "default") alert("Selecione uma cidade de destino")
        else if(origem === destino) alert("As cidades de Origem e Destino precisam ser diferentes!")
        else if(origem === "default"){
            axios.get(`${process.env.REACT_APP_API_URL}/hotels/${destino}`,)
                .then((res) => {
                    setHotels(res.data)
                    // const filteredHotels = res.data.filter(item => item.pricePerDay >= 1900 && item.pricePerDay <= 200000);
                    setFilterHotels(res.data)
                    // console.log(res.data)
                })
                .catch((err) => alert(err.message))

            axios.get(`${process.env.REACT_APP_API_URL}/tickets/${destino}`,)
                .then((res) => {
                    setTickets(res.data)
                    setFilterTickets(res.data)
                    // console.log(res.data)
                })
                .catch((err) => alert(err.message))

        setMinHotel(0)
        setMaxHotel(500)
        setMinTicket(0)
        setMaxTicket(2000)
        }  
    }
    return (
        <HomeContainer>
            <HeaderPage/>
            {/* <Header>
                <h1>Agência de Viagens</h1>
                <img src="././assets/icone.jpg"></img>
            </Header> */}
            <SelectOptions>
                <form onSubmit={pesquisar}>
                    <div>
                        <label>
                            Cidade de Origem:
                            <select onChange={e => setOrigem(e.target.value)}>
                                <option value="default">Selecione a cidade (opcional)</option>
                                {cities.map((item) =>
                                    <option value={item.id}>
                                        {item.name} - {item.state}
                                    </option>
                                )}
                            </select>
                        </label>
                        <label>
                            Cidade de Destino:
                            <select onChange={e => setDestino(e.target.value)}>
                                <option value="default" >Selecione a cidade</option>
                                {cities.map((item) =>
                                    <option value={item.id}>
                                        {item.name} - {item.state}
                                    </option>
                                )}
                            </select>
                        </label>
                    </div>
                    <div>
                        <label>
                            <input
                                type="checkbox" value="passagem"
                                checked={checkPassagem} onChange={e => setCheckPassagem(!checkPassagem)}
                            />
                            Passagens
                        </label>
                        <label>
                            <input
                                type="checkbox" value="hospedagem"
                                checked={checkHotel} onChange={e => setCheckHotel(!checkHotel)}
                            />
                            Hospedagens
                        </label>
                        <button type="submit">Pesquisar</button>
                    </div>
                </form>
            </SelectOptions>
            <Hotels hotels={hotels} setHotels={setHotels} tickets={tickets}
             filterHotels={filterHotels} setFilterHotels={setFilterHotels}
             filterTickets={filterTickets} setFilterTickets={setFilterTickets}
             minHotel={minHotel} setMinHotel={setMinHotel}
             maxHotel={maxHotel} setMaxHotel={setMaxHotel}
             minTicket={minTicket} setMinTicket={setMinTicket}
             maxTicket={maxTicket} setMaxTicket={setMaxTicket} 
             />
        </HomeContainer>
    )
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
const SelectOptions = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 40px;
    /* height: 100%; */
    max-width: 100vw;
    background-color: lightcoral;
    div{
        background-color: aquamarine;
        display: flex;
        justify-content: center;
        margin-bottom: 10px;
        width: 90vw;
    }
    label{
        font-size: 25px;
        font-weight: bold;
    }
    select{
        width: 25vw;
        height: 28px;
        font-size: 20px;
        margin-left: 10px;
        margin-right: 10px;
    }
    input{
        margin-left: 15px;
        margin-right: 8px;
        transform: scale(1.5);
    }
    button{
        margin-left: 10px;
        font-size: 20px;
        font-weight: bold;
    }
    
`