import React from 'react'
import styled from "styled-components"

const StyledContainer = styled.div`
    background: #4F46E5;
    border-radius: 4px;
    padding: 8px 16px;
    text-align: center;
    color: #fff;
    outline-style: none;
    line-height: 24px ;
    width: 138px;
    height: 40px;
    font-family: 'Inter', sans-serif;
    font-weight: 600;
    font-size: 14px;
    @media screen and (max-width: 1480px) {
      margin-bottom: 10px;
      order: -1;

    }
`;

type BoxProps = {
    children: React.ReactNode;
};

export default function StyledBtn(props:BoxProps) {
    
  return (
    <StyledContainer {...props} >{props.children}</StyledContainer>
  )
}
