import Link from "next/link";
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

  .login-text,
  .login-img {
    ${flexCenter}
    flex-direction: column;
    width:35vw;
    height: 80vh;
    margin: 0 2rem;
  }

  .login-text-title{
    align-self: flex-start;
    padding-top: 6rem;
    font-size: 3rem;
  }
  .login-text-description{
    font-size: 2.4rem;
    font-weight: lighter;
    padding-bottom: 5rem;
  }
  .buttons{
    ${flexCenter}
  }
  .btn-login, .btn-register{
    ${flexCenter}
    background-color: #303030;
    color: #FFF;
    text-decoration: none;
    margin:0 3rem;
    height: 3rem;
    width: 10rem;
    border-radius: 20px;
    :hover{
      background-color: #414141;
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

  .lion {
    width: 100%;
  }
`;

function AppSobre() {
  return (
    <Wrapper className="login-area">
      <div className="conteiner">
        <div className="login-text">
          <h1 className="login-text-title">
            Faça parte do nosso grupo de artistas
          </h1>
          <h2 className="login-text-description">
            Tenha acesso um espaço todo seu para expor suas lindas obras de arte
          </h2>
          <div className="buttons">
            <Link href="/loginPage"><a><div className="btn-login">Login</div></a></Link>
            <Link href="/registerPage"><a><div className="btn-register">Registrar</div></a></Link>
          </div>
        </div>
        <div className="login-img">
          <img className="lion" src="./lion.png" />
        </div>
      </div>
    </Wrapper>
  );
}

export default AppSobre;
