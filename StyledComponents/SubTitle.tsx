
import React from 'react'
import styled from "styled-components"

const StyledContainer = styled.div`
  margin: 0;
  font-family: 'Inter', sans-serif;
  font-weight: 700;
  font-size: 18px;
  line-height: 26px;
  margin-bottom: 9px;
`;

type BoxProps = {
    children: React.ReactNode;
};

export default function SubTitle(props:BoxProps) {
    
  return (
    <StyledContainer {...props} >{props.children}</StyledContainer>
  )
}
