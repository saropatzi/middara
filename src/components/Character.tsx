import React from 'react';
import styled from "styled-components";

const CharacterWrapper = styled.div<Character>`
    position: absolute;
    bottom: 0;
    ${props => props.position === 'left' ? 
        `transform: scaleX(-1);
        left:0;`:''};
    ${props => props.position === 'right' ?
    `right:0;`:''};
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
    position: string | null;
}

export const Character = ({imageUrl,name,text,position}:Character) => {
    return (
        <CharacterWrapper imageUrl={imageUrl} name={name} text={text} position={position}>
            <img src={imageUrl} />
        </CharacterWrapper>
    )
}