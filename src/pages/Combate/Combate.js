import React from 'react'
import styled from 'styled-components'
import Building from '../../assets/Building.gif'

const Combate = () => {
  return (
    <CombateContainer>
      <h3>Página sendo construida</h3>

      <img src={Building} alt='building' />
    </CombateContainer>
  )
}

export default Combate;

const CombateContainer = styled.section`
display: flex;
flex-direction: column;
align-items: center;

padding: 2rem;
margin: 2rem;



background-color: rgba(33,33,33, 0.95);
border-radius: 10px;

img {
    height: auto;
    width: 100%;
}

h3 {
    font-size: 2rem;

    @media (min-width: 768px) {
        font-size: 5rem;
    }
}

`