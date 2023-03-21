import React from 'react'
import styled from 'styled-components'
import Building from '../../assets/Building.gif'
import Introducao, { CombateIntroducao } from '../../components/Combate/Introducao/Introducao'

const Combate = () => {
  return (
    <CombateContainer>
     <Introducao/>
    </CombateContainer>
  )
}

export default Combate;

const CombateContainer = styled.section`
background-color: rgba(33,33,33, 0.9);
border-radius: 10px;

margin: 2rem 0.5rem; 
padding: 0.5rem;

display: flex;
flex-direction: column;
align-items: center;


@media (min-width: 768px) {
  margin: 2rem;
  padding: 0;
}

`