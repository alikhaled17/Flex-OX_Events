import React from 'react'
import styled from "styled-components"

const StyledContainer = styled.div`
    font-family: 'Inter', sans-serif;
    font-weight: 600;
    font-size: 24px;
    line-height: 36px;
    margin-bottom: 24px;
`;

type BoxProps = {
    children: React.ReactNode;
};

export default function StyledTitle(props:BoxProps) {
    
  return (
    <StyledContainer {...props} >{props.children}</StyledContainer>
  )
}
