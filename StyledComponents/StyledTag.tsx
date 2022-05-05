
import React from 'react'
import styled from "styled-components"

const StyledContainer = styled.div`
    cursor: pointer;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 6px 16px 6px 12px;
    background: #F3F4F6;
    border: 1px solid #E5E7EB;
    border-radius: 100px;
    margin-right: 10px;
    margin-top: 16px;
    span {
        margin-left: 6.5px;
    }
    ${({isActive}:any) => (isActive && `
        background: #F5F3FF;
        border: 1px solid #DBDCFF;
    `
    )}

    @media screen and (max-width: 1480px) {
        font-size: 12px;
        padding: 3px 8px 3px 6px;
        width: fit-content;
        text-overflow: ellipsis;
        white-space: nowrap;
    }
`;

type BoxProps = {
    children: React.ReactNode;
    isActive: boolean;
};

export default function StyledTag(props:BoxProps) {
    
  return (
    <StyledContainer {...props} >
        {props.isActive && <i className="fa-solid fa-check"></i> }
        {props.children}
    </StyledContainer>
  )
}
