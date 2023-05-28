import styled from "styled-components"
import { useEffect, useState } from "react";
import axios from "axios"
import Hotels from "./Hotels";

export default function HomePage() {
    const [checkPassagem, setCheckPassagem] = useState(true)
    const [checkHotel, setCheckHotel] = useState(true)
    const [cities, setCities] = useState([])
    const [origem, setOrigem] = useState("default")
    const [destino, setDestino] = useState("default")
    const [hotels, setHotels] = useState([])
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
                console.log(res.data)
            })
            .catch((err) => alert(err.message))
        }
  
    }
    return (
        <HomeContainer>
            <Header>
                <h1>Agência de Viagens</h1>
                <img src="././img/icone.jpg"></img>
            </Header>
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
            <Hotels hotels={hotels}/>
        </HomeContainer>
    )
}

const HomeContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    height: calc(100vh - 50px);
`

const Header = styled.header`
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 20px;
    font-size: 26px;
    color: black;
    width: 90vw;
    background-color: lightgoldenrodyellow;
    img{
        width: 50px;
        height: 50px;
        margin-left: 20px;
    }
`
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