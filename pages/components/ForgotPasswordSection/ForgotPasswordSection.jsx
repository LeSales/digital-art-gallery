import React from "react";
import styled from "styled-components";
import ForgotPasswordForm from "../ForgotPasswordForm";

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

function LoginSection() {
  return (
    <Wrapper className="sobre">
      <ForgotPasswordForm/>
    </Wrapper>
  );
}

export default LoginSection;