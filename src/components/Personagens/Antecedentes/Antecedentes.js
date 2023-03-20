import React from 'react'
import AntecedentesData from '../../../Data/AntecedentesSData'

import Ugly from '../../../assets/Ugly.gif'

import { AncetecentesContainer, AntecedentesBox, AntecedenteExplicacao, AntecedenteInstrucao, AntecedentesCol, AntecedentesDescricao, AntecedentesPontos } from './style'

const Antecedentes = () => {
  return (
    <>
      <AncetecentesContainer>
        <img src={Ugly} alt="ugly" />
        <AntecedentesDescricao data-aos="fade-up">
          <p>Os <b>Antecedentes</b> funcionam como perícias que sua personagem possui,
            ao passo que marcam traços de seu passado e até de sua personalidade.</p>

          <p>Cada um deles pode abranger diversos contextos, o que ajuda a contara história da personagem e que podem abranger diversas situações na ficção,
            pois cada <b>Antecedente</b> tem impacto direto nas mecânicas e testesque podem acontecer durante o jogo.</p>

          <p>Se a personagem tem pontos no <b>Antecedente</b> em Medicina, por exemplo, ela sabe fazer primeiros socorros,
            conferir tônicos e remédios ou atéperformar cirurgias sangrentas em lugares inoportunos.</p>

          <p>São os <b>Antecedentes</b> que mostram quem sua personagem já foi na vida,o que ela é e o que ela quer para o futuro,
            então use-os para criar umapequena biografia, tornando-a mais colorida e relevante para você.</p>
        </AntecedentesDescricao>

        <AntecedenteInstrucao>
          <AntecedentesBox>
            <span>Distribua 4 pontos entre os <br /><b>ANTECEDENTES</b> <br /> abaixo. É possível colocar <br />mais de um ponto em cada
              <br /><b>ANTECEDENTE</b> <br />com o máximo de 2 no primeiro nível. </span>
          </AntecedentesBox>

          <AntecedentesPontos>
            <div data-aos="fade-right" className="CondicaoContainer">Combate</div>
            <div data-aos="fade-left" className="CondicaoContainer">Negócios</div>
            <div data-aos="fade-right" className="CondicaoContainer">Montaria</div>
            <div data-aos="fade-left" className="CondicaoContainer">Tradição</div>
            <div data-aos="fade-right" className="CondicaoContainer">Labuta</div>
            <div data-aos="fade-left" className="CondicaoContainer">Exploração</div>
            <div data-aos="fade-right" className="CondicaoContainer">Medicina</div>
            <div data-aos="fade-left" className="CondicaoContainer">Roubo</div>
          </AntecedentesPontos>
        </AntecedenteInstrucao>
      </AncetecentesContainer>

      <AntecedenteExplicacao>
        {AntecedentesData.map(antecedente => (
          <AntecedentesCol key={antecedente.Titulo} data-aos="flip-left">
            <p><b>{antecedente.Titulo}</b></p>
            <span>{antecedente.Descricao}</span>
          </AntecedentesCol>
        ))}
      </AntecedenteExplicacao>
    </>
  )
}

export default Antecedentes