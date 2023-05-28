import styled from "styled-components"
import { useEffect, useState } from "react";
import axios from "axios"

export default function Hotels() {

    return(
        <HotelsPart>
            <h1>HOTEIS E PASSAGENS AQUI</h1>
        </HotelsPart>
    )
}
const HotelsPart = styled.div`
    display: flex;
    flex-direction: column;
    margin-top: 20px;
    height: 100%;
    background-color: lightgray;
    h1{
        color: blue;
    }
`