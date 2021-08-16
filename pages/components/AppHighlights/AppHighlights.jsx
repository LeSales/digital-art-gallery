import React from "react";
import styled from "styled-components";

import {highlights} from '../../../utils/highlights';

const flexCenter = `
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Wrapper = styled.div`
  ${flexCenter}
  min-height: 100vh;
  flex-direction: column;
  grid-gap: 0.5rem;
  background-color: #fff;
  font-size: 2.4rem;
  font-family: sans-serif;
  color: #5e5e5e;
  margin: 5rem 0;
 
  .conteiner {
    ${flexCenter}
    align-self: center;
  }

  .highlights-grid{
    width: 100vw;
    max-width: 980px;
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    grid-gap:0.5rem;
  }
  .imagem {
    ${flexCenter}
    justify-content: space-between;
    height: 30vh;
    border-radius: 10px;
  }
  
  .imagem img {
    max-width: 100%;
    max-height: 100%;
    border-radius: 10px;
  }
  @media (max-width: 768px) {
    .conteiner {
      flex-direction: column;
    }
    .infos {
      min-width: 90vw;
      padding: 0;
    }
    .imagem {
      min-width: 90vw;
      margin: 0;
      padding: 0;
    }
  }
`;

function AppHighlights() {

  const imageList = highlights.map((item) => <PortfolioSection img={item.image}/>)

  return (
    <Wrapper className="portfolio" >
      <h3>Destaques</h3>
      <div className="highlights-grid">
      {imageList}
      </div>
    </Wrapper>
  );
}

function PortfolioSection(props) {
  return (
    <>
      <div className="conteiner">
        <div className="imagem">
          <img src={props.img} alt="Preview Image" />
        </div>
      </div>
    </>
  );
}

export default AppHighlights;