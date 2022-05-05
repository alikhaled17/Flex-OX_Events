import React from 'react'
import styled from "styled-components"

type BoxProps = {
    children: React.ReactNode;
    size: string;
};


const StyledContainer = styled.div`
  width: 100%;
  height: 136;
  padding: 16px;
  display: flex;
  justify-content: flex-start;
  margin-bottom: 17px;
  border: 1px solid #E5E7EB;
  border-radius: 8px;
  
  .card-image {
    border-radius: 8px;
    width:169px;
    height:104px;
    overflow: hidden !important;
    margin-right: 16px;
    
  }
  .event-card span {
    display: block;
  }
  .ev-date {
    margin: 0;
    margin-top: 2px;
    font-family: 'Inter', sans-serif;
    font-weight: 600;
    font-size: 14px;
    line-height: 20px;
    color: #6366F1;
  }
  .ev-title {
    margin: 0;
    margin-top: 4px;
    font-family: 'Inter', sans-serif;
    font-weight: bold;
    font-size: 16px;
    line-height: 24px;
  }

  .ev-office {
    margin-top: 4px;
    font-family: 'Inter', sans-serif;
    font-weight: 400;
    font-size: 14px;
    line-height: 20px;
    color: #6B7280;
  }

  .ev-type {
    margin: 0;
    margin-top: 6px;
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: 2px 2px;
    background: #ECFDF5;
    border-radius: 4px;
    width: fit-content;
    height: 20px;
    text-align: center;
    line-height: 20px;
    font-family: 'Inter', sans-serif;
    font-weight: 600;
    font-size: 14px;
    color: #059669;
  }

  @media screen and (max-width: 1480px) {
    width: 267px;
    height: fit-content;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    margin-bottom:17px;
    border: 1px solid #E5E7EB;
    border-radius: 8px;
    padding: 0px;
    .card-info {
      padding: 16px 16px 18px 16px;
    }
    .card-image {
      border-radius: 8px 8px 0 0;
      width:267px;
      height:160px;
      overflow: hidden !important;
      margin-right: 16px;
      img {
        width:267px !important;
        height:160px !important;
      }
    }
  }
  ${
    ({size}:any) => (size == "small" ? `
      width: 267px;
      height: fit-content;
      display: flex;
      flex-direction: column;
      justify-content: flex-start;
      margin-bottom:17px;
      border: 1px solid #E5E7EB;
      border-radius: 8px;
      padding: 0px;
      .card-image {
        border-radius: 8px 8px 0 0;
        width:267px;
        height:160px;
        overflow: hidden !important;
        margin-right: 16px;
      }
      .card-info {
        padding: 16px 16px 18px 16px;
      }
    ` : ""
    )
  }

  
`;

export default function CardStyled(props:BoxProps) {
  return (
    <StyledContainer {...props} >{props.children}</StyledContainer>
  )
}
