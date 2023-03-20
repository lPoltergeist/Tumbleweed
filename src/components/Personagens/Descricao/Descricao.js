import React from 'react'
import { DescricaoContainer, Container } from './styles'

import Survive from '../../../assets/Survive.gif'


const Descricao = () => {
  return (

    <Container>
      <img src={Survive} alt="survive" />
      <DescricaoContainer>

        <div data-aos="fade-up" className="DescricaoAtributos"><p>Os <b>Pontos de Vida</b> ou <b>“PVs”</b> representam a integridade física da personagem.
          Digamos que seja sua barra de vida. Quando estes pontos chegarem a <b>ZERO</b>,
          a personagem está na beirada morte, acenando para Deus. Ou pro capeta.</p></div>

        <div data-aos="fade-up" className="DescricaoAtributos"><p><b>Iniciativa</b> é o que define a ordem dos turnos de combate entre todas as personagens da cena.
          Ter uma boa <b>Iniciativa</b> pode fazer total diferença em um tiroteio.
          Afinal, quase sempre quem atira primeiro ri por último... Acho que aquele ditado era assim...</p></div>

        <div data-aos="fade-up" className="DescricaoAtributos"><p><b>Defesa</b> é a capacidade do sujeito aguentar as mazelas da Fronteira. Ela pode representar uma esquiva,
          um bloqueio, ou um pulo nada gracioso que impede sua personagem de tomar tiros e socos. Para que um golpe acerte sua personagem é preciso que o resultado de um ataque seja igual ou maior do que sua <b>Defesa</b>.
        </p></div>

        <div data-aos="fade-up" className="DescricaoAtributos"><p>Quanto mais <b>Ações em Combate</b>, mais coisas a personagem pode fazer durante o pegapacapá.
          Estas ações envolvem movimento, a quantidadede tiros que a personagem pode disparar, recarga das armas, se esconder, se render,
          ir para mais longe, subir na laje, gritar pela mãe,
          fazer uma sopa, dançar catira, admirar a paisagem, cuspir no chão e tudo o que der na telha.</p></div>

      </DescricaoContainer>
    </Container>




  )
}

export default Descricao