import React from "react";
import styled from "styled-components"

export const Wrapper = styled.header`
    height: 70px;
    width: 99vw;
    overflow: hidden;
    margin: 0;
    padding: 0;
    font-size: 1.6rem;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color : #1f1f1f;
    color: #f0f0f0;
    div{
        max-width: 980px;
        font-size: 1.6rem;
        width: 100vw;
        display: flex;
        align-items: center;
        justify-content: center;
    }
`

function AppFooter() {
  return (
      <Wrapper>
       <div>Criado por Leandro Sales</div>
      </Wrapper>
  );
}

export default AppFooter;