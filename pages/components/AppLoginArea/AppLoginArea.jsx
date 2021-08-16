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
  background-color: #FFF;
  color: #303030;
  
  .conteiner {
    ${flexCenter}
    flex-direction: row;
    max-width: 980px;
    padding: 5rem;
  }

  .login-text, .login-img{
    ${flexCenter}
    width:35vw;
    height: 80vh;
    margin: 0 2rem;
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

  .lion{
    width: 100%;
  }
`;

function AppSobre() {
  return (
    <Wrapper className="login-area">
      <div className="conteiner">
        <div className="login-text">todo: login text</div>
        <div className="login-img">
          <img className="lion" src="./lion.png"/>
        </div>
      </div>
    </Wrapper>
  );
}

export default AppSobre;