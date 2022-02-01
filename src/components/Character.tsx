import React from 'react';
import styled from "styled-components";

const CharacterWrapper = styled.div`
    position: absolute;
    bottom: 0;
    right: 0;
    width: 30vw;
    z-index: 10;
    img {
        width:100%;
        height: auto;
    }
`


interface Character {
    imageUrl: string;
    name: string
    text: string | null;
}

export const Character = ({imageUrl,name,text}:Character) => {
    return (
        <CharacterWrapper>
            <img src={imageUrl} />
        </CharacterWrapper>
    )
}