import styled from "styled-components"
import { useEffect, useState } from "react";
import axios from "axios"
import Hotels from "./Hotels";

export default function HeaderPage({icone}) {
    return(
        <Header>
            <h1>Agência de Viagens</h1>
            <img src={icone}></img>
        </Header>
    )
}

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