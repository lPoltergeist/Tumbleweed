import React from 'react'
import HabilidadesData from '../../../Data/HabilidadesData'
import QuickDraw from '../../../assets/QuickDraw.gif'

import styled from 'styled-components'

const Habilidades = () => {
  return (
    <HabilidadesContainer>
      <img src={QuickDraw} alt="clint" />
      <TopContainer>
        <span> Para destacar sua personagem entre xerifes, patifes, canalhas, barões, prefeitos e
          coveiros do Oeste Selvagem, escolha suas habilidades abaixo.
          Elas servem para aprimorar algo que você já faz bem ou para dar um estilo marcante à sua personagem.</span>

        <ChooseContainer>
          <span>escolha</span>
          <span><b>DUAS HABILIDADES</b></span>
          <span>no primeiro nível</span>
        </ChooseContainer>
      </TopContainer>

      <HabilidadesExplicacao>
        {HabilidadesData.map(habilidades => (
          <HabilidadesCol key={habilidades.title} data-aos="flip-left">
            <p><b>{habilidades.title}</b></p>
            <span>{habilidades.description}</span>
          </HabilidadesCol>
        ))}
      </HabilidadesExplicacao>

    </HabilidadesContainer>
  )
}

export default Habilidades


const HabilidadesContainer = styled.section`
display: flex;
flex-direction: column;
align-items: center;

img {
  margin: 2rem 0;
}
`

const TopContainer = styled.main`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;

span {
  font-size: 1.5rem;
}


`

const ChooseContainer = styled.div`
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