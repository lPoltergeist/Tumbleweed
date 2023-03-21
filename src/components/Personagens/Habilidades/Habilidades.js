import React from 'react'
import HabilidadesData from '../../../Data/HabilidadesData'
import QuickDraw from '../../../assets/QuickDraw.gif'

import {ChooseContainer, HabilidadesCol, HabilidadesContainer, HabilidadesExplicacao, TopContainer} from './style'

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


