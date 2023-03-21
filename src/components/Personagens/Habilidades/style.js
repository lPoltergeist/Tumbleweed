import styled from "styled-components";

export const HabilidadesContainer = styled.section`
display: flex;
flex-direction: column;
align-items: center;

img {
  margin: 2rem 0;
}
`

export const TopContainer = styled.main`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;

span {
  font-size: 1.5rem;
}


`

export const ChooseContainer = styled.div`
display: flex; 
flex-direction: column;
align-items: center;


margin: 2rem 0;

border: 5px solid red;
border-radius: 2rem;
padding: 2rem;

span {
  font-size: 1.7rem;
}
`


export const HabilidadesExplicacao = styled.div`
margin: 1 0.5rem;

justify-content: center;
align-items: center;
 
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 2fr));
  gap: 1.5rem;

  @media (min-width: 768px) {
    grid-template-columns: repeat(auto-fit, minmax(500px, 2fr));
  }
`

export const HabilidadesCol = styled.div`
display: flex;
flex-direction: column;
align-items: center;
text-align: center;
margin: 0 .5rem;
outline: 5px solid red;
border-radius: 1rem;
padding: 1rem;
min-height: 12rem;

transition: 0.2s ease-in-out;

:hover {
    scale: 1.1;
    background-color: #212121;
    z-index: 999;
}

p {
  color: red;
  font-family: "Teko", sans-serif;
  font-size: 2rem;
  margin-bottom: 1rem;
}

span {
  font-size: 1.2rem;
}

`