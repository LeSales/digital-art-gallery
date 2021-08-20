import React from "react";
import styled from "styled-components";

export const Wrapper = styled.div`
  width: 100vw;
  height: 80vh;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background-color: #fff;
  background:#303030;
  background-position: center start;
  background-size: cover;
  overflow: hidden;
  background-blend-mode: overlay;
  
  .nome {
    font-size: 5rem;
    font-weight: 900;
    font-style: normal;
    font-family: sans-serif;
    color: #fff;
    margin: 0;
  }
  @media (max-width: 475px) {
    .nome {
      font-size: 4.5rem;
    }
  }
`;

export const SubName = styled.div`
  display: flex;
  flex-direction: row;
  align-self: center;
  align-items: center;
  justify-content: flex-end;
  font-family: sans-serif;
  font-weight: normal;
  color: #fff;
  
  @media (max-width: 475px) {
    margin-top: -10px;
    margin-left: 2px;
    .nome {
      font-size: 5rem;
    }
  }
`;

function AppHome() {
  return (
    <Wrapper className="home">
      <div className="conteiner">
        <h1 className="nome">Digital art Gallery</h1>
        <SubName>
          O lugar certo para exibir sua arte
        </SubName>
      </div>
    </Wrapper>
  );
}

export default AppHome;