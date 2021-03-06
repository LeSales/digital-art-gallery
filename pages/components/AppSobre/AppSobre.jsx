import React from "react";
import styled from "styled-components";
const flexCenter = `
  display: flex;
  justify-content: center;
  align-items: center;
  `;

export const Wrapper = styled.div`
  width: 100vw;
  min-height: 100vh;
  ${flexCenter}
  background-color: #191a1c;
  color: #303030;
  .conteiner {
    ${flexCenter}
    max-width: 980px;
  }
  .image{
      width: 30vw;
      max-width: 980px;
  }
  .sobre-text{
    display: flex;
  justify-content: center;
  align-items: flex-start;
      width: 70vw;
      height: 50vh;
      h1{
          color: #fff;
      }
  }
  
  @media (max-width: 768px) {
    .conteiner {
      display: flex;
      flex-direction: column;
      max-width: 80vw;
    }
    .sobre-image {
      width: 90vw;
      grid-gap: 0;
    }
    .sobre-text {
      width: 90vw;
    }
  }
`;

function AppSobre() {
  return (
    <Wrapper className="sobre">
        <div className="conteiner">
      <img className="image" src="./sobre.png" />
      <div className="sobre-text">
        <h1>Art</h1>
        </div>
        </div>
    </Wrapper>
  );
}

export default AppSobre;