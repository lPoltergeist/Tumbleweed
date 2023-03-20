import React from 'react'
import AtributosData from '../../../Data/Atributos.Data'
import Clint from '../../../assets/clint.gif'

import { AtributosContainer, Container } from './styles'

const Atributos = () => {
  return (
    <Container>
      <img src={Clint} alt="Clint" />
      <AtributosContainer >

        {AtributosData.map(({ Atributo, Descricao, Instrucao }) => (
          <div key={Atributo} data-aos="fade-up" className="AtributosContainer">
            <h4>{Atributo}</h4>
            <p>{Descricao}</p>

            <div className="Container" data-aos="fade-up">
              {Instrucao}
            </div>
          </div>
        ))}
      </AtributosContainer>
    </Container>

  )
}

export default Atributos