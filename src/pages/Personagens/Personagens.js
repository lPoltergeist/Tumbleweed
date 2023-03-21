import React from 'react'
import { Container, Instrucoes, PersonagensContainer, Rectangle } from './style'

import MadDog from '../../assets/MadDog.gif'

import Condicao from '../../components/Personagens/Condicao/Condicao'
import Atributos from '../../components/Personagens/Atributos/Atributos'
import Descricao from '../../components/Personagens/Descricao/Descricao'
import Antecedentes from '../../components/Personagens/Antecedentes/Antecedentes'
import Habilidades from '../../components/Personagens/Habilidades/Habilidades'
import Tormenta from '../../components/Personagens/Tormenta/Tormenta'

const Personagens = () => {
  return (
    <Container>
      <PersonagensContainer>
        <h1>Novo pistoleiro na região? Monte sua ficha, peão.</h1>
        <img src={MadDog} alt="Personagens" />

        <h2>É mais simples de criar seu personagem do que domar uma mula velha na fronteira com o México.</h2>

        <p>Antes de tudo, escolha o nome do seu personagem, pois é como ele será conhecido.</p>
        <p>Esta será sua condição inicial: </p>

        <Instrucoes>

          <Condicao />

          <Rectangle></Rectangle>

          <h2>Em seguida, distribua 4 pontos entre os <b>ATRIBUTOS</b>.</h2>

          <Atributos />

          <Rectangle></Rectangle>

          <h2>Aqui você pode ver como cada atributo vai te ajudar a <b>sobreviver</b> no oeste selvagem.</h2>

          <Descricao />

          <Rectangle></Rectangle>

          <h2>Antecedentes</h2>

          <Antecedentes />

          <Rectangle></Rectangle>

          <h2>Agora é hora de escolher suas <b> habilidades</b> iniciais</h2>

          <Habilidades />

          <Rectangle></Rectangle>

          <h2>Por fim, é hora de escolher sua <b>Tormenta</b>.</h2>

          <Tormenta />

        </Instrucoes>
      </PersonagensContainer>
    </Container>
  )
}

export default Personagens

