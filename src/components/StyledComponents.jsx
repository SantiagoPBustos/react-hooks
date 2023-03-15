import React from 'react';
import styled from 'styled-components'

export default function ComponentesEstilizados(params) {

    let mainColor = "#db7093", 
    mainColor80 = "#db709380";

    const setTransitionTime = (time) => `all ${time} ease-in-out`

    const MyH3 = styled.h3`
        padding: .35rem;
        text-align: center;
        background-color: ${mainColor};
        transition: ${setTransitionTime("0.9s")} ;

        &:hover{
            background-color: ${mainColor80};
        }
    `; 

    return (
        <>
            <h2>Styled Component!!!!</h2>
            <MyH3>Hola soy un H3 estilizado con styled-components</MyH3>
        </>
    );
}