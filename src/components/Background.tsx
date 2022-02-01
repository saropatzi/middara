import React from 'react';
import styled from "styled-components";

const BackgroundWrapper = styled.div<Background>`
  background: url(${props => props.imageUrl}) no-repeat center center fixed;
  background-size:cover;
  width: 100%;
  height: 100%;
  position: absolute;
  z-index:5;
`
interface Background {
    imageUrl: string;
    text: string | null;
}

export const Background = ({imageUrl,text}:Background) => {
    return (
        <BackgroundWrapper imageUrl={imageUrl} text={text} />
    )
}