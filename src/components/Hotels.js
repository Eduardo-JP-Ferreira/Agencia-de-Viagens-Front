import styled from "styled-components"
import { useEffect, useState } from "react";
import axios from "axios"

export default function Hotels({hotels, tickets, 
    filterHotels, setFilterHotels, filterTickets, setFilterTickets,
    minHotel, setMinHotel, maxHotel, setMaxHotel,
    minTicket, setMinTicket, maxTicket,setMaxTicket 
}) {
    
    function filtrar(event){
        event.preventDefault();
        const filteredHotels = hotels.filter(item => item.pricePerDay >= minHotel*100 
            && item.pricePerDay <= maxHotel*100);
        setFilterHotels(filteredHotels)

        const filteredTickets = tickets.filter(item => item.price >= minTicket*100 
            && item.price <= maxTicket*100);
        setFilterTickets(filteredTickets)
    }
    return(        
        <HotelsPart>
            <h1>HOTEIS</h1>
            <HotelContainer> 
                <OptionsContainer>
                    {filterHotels.map((item) =>
                        <Hotel>
                            <img src={item.image}></img>
                            <h2>{item.name}</h2>
                            <h3>R$ {item.pricePerDay/100}</h3>
                        </Hotel>
                    )}
                </OptionsContainer>
                <FilterContainer>
                    <form onSubmit={filtrar}>
                        <h1>Filtro Hospedagens</h1>
                        <label>
                            Valor Mínimo: 
                            <input type="range" min={0} max={500} step={10} value={minHotel}
                            onChange={e => setMinHotel(e.target.value)}
                            />
                            {minHotel}                            
                        </label>
                        <label>
                            Valor Máximo: 
                            <input type="range" min={0} max={500} step={10} value={maxHotel}
                            onChange={e => setMaxHotel(e.target.value)}
                            />
                            {maxHotel}                            
                        </label>
                        <button type="submit">Pesquisar</button>
                    </form>
                </FilterContainer>
            </HotelContainer> 
            <h1>PASSAGENS</h1>
            <TicketContainer> 
                <OptionsContainer>
                    {filterTickets.map((item) =>
                        <Ticket>
                            <img src="././assets/icone.jpg"></img>
                            <h2>De <b>{item.originName}</b> Para <b>{item.destinationName}</b></h2>
                            <h3>R$ {item.price/100}</h3>
                        </Ticket>
                    )}
                </OptionsContainer>
                <FilterContainer>
                    <form onSubmit={filtrar}>
                        <h1>Filtro Passagens</h1>
                        <label>
                            Valor Mínimo: 
                            <input type="range" min={0} max={2000} step={10} value={minTicket}
                            onChange={e => setMinTicket(e.target.value)}
                            />
                            {minTicket}                            
                        </label>
                        <label>
                            Valor Máximo: 
                            <input type="range" min={0} max={2000} step={10} value={maxTicket}
                            onChange={e => setMaxTicket(e.target.value)}
                            />
                            {maxTicket}                            
                        </label>
                        <button type="submit">Pesquisar</button>
                    </form>
                </FilterContainer>   
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
    width: 100%;
    background-color: lightgoldenrodyellow;
`
const OptionsContainer = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    width: 70%;
    background-color: lightcyan;
`
const FilterContainer = styled.div`
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    width: 30%;
    background-color: lightcoral;
    h1{
        font-size: 25px;
        color: black;
    }
    label{
        font-size: 20px;
        margin-bottom: 5px;
        input{
            margin-left: 10px;
        }
    }
    form{
        display: flex;
        flex-direction: column;
    }
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