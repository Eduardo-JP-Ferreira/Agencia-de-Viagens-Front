import styled from "styled-components"
import { useEffect, useState } from "react";
import axios from "axios"

export default function HomePage(){
    const [checkPassagem, setCheckPassagem] = useState(false)
    const [checkHotel, setCheckHotel] = useState(false)
    const [cities, setCities] = useState([])
    

    useEffect(() => {

        axios.get(`//${process.env.REACT_APP_API_URL}/city`,) 
            .then((res) => {
              
              setCities(res.data)

            })
            .catch((err) => alert(err.message))
    }, [])

    const handleChange = (type) => {
        if(type === "passagem") setCheckPassagem(!checkPassagem);
        else setCheckHotel(!checkHotel);
      };
    return(
        <HomeContainer>
            <Header>
                <h1>Agência de Viagens</h1>
                <img src="././img/icone.jpg"></img>
            </Header>
            <SelectOptions>
                <label>
                    Cidade de Origem:
                    <select>
                        <option value="default">Selecione a cidade</option>
                        {cities.map((item)=>                            
                            <option value={item.name}>
                                {item.name} - {item.state}
                            </option>                            
                        )}
                    </select>
                </label>
                <label>
                    Cidade de Destino:
                    <select>
                        <option value="default" >Selecione a cidade</option>
                        {cities.map((item)=>                            
                            <option value={item.name}>
                                {item.name}
                            </option>                            
                        )}
                    </select>
                </label>
                <label>
                    <input 
                        type="checkbox" value="passagem" 
                        checked={checkPassagem} onChange={e=>handleChange(e.target.value)}
                    />
                    Passagens
                </label>
                <label>
                    <input 
                        type="checkbox" value="hospedagem"
                        checked={checkHotel} onChange={e=>handleChange(e.target.value)}
                    />
                    Hospedagens
                </label>
                
            </SelectOptions>
        </HomeContainer>
    )
}

const HomeContainer = styled.div`
    display: flex;
    flex-direction: column;
    height: calc(100vh - 50px);
`

const Header = styled.header`
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 10px;
    font-size: 26px;
    color: black;
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
    max-width: 100vw;
    background-color: lightcoral;
    label{
        font-size: 25px;
        font-weight: bold;
    }
    select{
        width: 20vw;
        height: 28px;
        font-size: 20px;
        margin-left: 10px;
        margin-right: 10px;
    }
    input{
        margin-left: 10px;
        margin-right: 8px;
        transform: scale(1.5);

    }
`