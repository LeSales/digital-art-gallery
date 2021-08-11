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
  background-color: #ececec;
  color: #303030;
  .conteiner {
    ${flexCenter}
    max-width: 980px;
    padding: 5rem;
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
      <h2>To do: Sobre section</h2>
    </Wrapper>
  );
}

export default AppSobre;