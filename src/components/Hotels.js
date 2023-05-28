import styled from "styled-components"
import { useEffect, useState } from "react";
import axios from "axios"

export default function Hotels({hotels}) {

    return(
        <HotelsPart>
            <h1>HOTEIS E PASSAGENS AQUI</h1>
            <HotelContainer> 
                {hotels.map((item) =>
                    <Hotel>
                        <img src={item.image}></img>
                        <h2>{item.name}</h2>
                        <h3>R$ {item.pricePerDay/100}</h3>
                    </Hotel>
                )}
            </HotelContainer> 
        </HotelsPart>
    )
}
const HotelsPart = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 20px;
    height: 100%;
    width: 90vw;
    background-color: lightgray;
    h1{
        color: blue;
        margin-bottom: 20px;
    }
`
const HotelContainer = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    width: 100%;
    background-color: lightgoldenrodyellow;
`

const Hotel = styled.div`
    display: flex;
    flex-direction: column;
    width: 150px;
    height: 200px;
    background-color: lightgreen;
    margin-right: 30px;
    margin-bottom: 10px;
    img{
        width: 150px;
        height: 100px;
        margin-bottom: 10px;
    }
    h2{
        font-size: 20px;
        margin-bottom: 10px;
    }
    h3{
        font-size: 22px;
    }
`