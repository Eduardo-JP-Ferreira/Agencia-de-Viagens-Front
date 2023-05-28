import styled from "styled-components"
import { useEffect, useState } from "react";
import axios from "axios"

export default function Hotels({hotels, tickets}) {

    return(
        <HotelsPart>
            <h1>HOTEIS</h1>
            <HotelContainer> 
                {hotels.map((item) =>
                    <Hotel>
                        <img src={item.image}></img>
                        <h2>{item.name}</h2>
                        <h3>R$ {item.pricePerDay/100}</h3>
                    </Hotel>
                )}
            </HotelContainer> 
            <h1>PASSAGENS</h1>
            <TicketContainer> 
                {tickets.map((item) =>
                    <Ticket>
                        <img src="././assets/icone.jpg"></img>
                        <h2>De <b>{item.originName}</b> Para <b>{item.destinationName}</b></h2>
                        <h3>R$ {item.price/100}</h3>
                    </Ticket>
                )}
            </TicketContainer> 
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
const TicketContainer = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    width: 100%;
    background-color: lightgoldenrodyellow;
`
const Ticket = styled.div`
    display: flex;
    flex-direction: column;
    width: 180px;
    height: 200px;
    background-color: lightgreen;
    margin-right: 30px;
    margin-bottom: 10px;
    img{
        width: 100%;
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