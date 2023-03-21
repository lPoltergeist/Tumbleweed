import React from 'react'
import styled from 'styled-components'

import Combat from '../../../assets/Combat.gif'
import Acerto from '../../../assets/AcertoCritico.gif'
import Falha from '../../../assets/Failed.gif'

import CombateData from '../../../Data/CombateData'

const Introducao = () => {
  return (
    <CombateIntroducao>
        <h1><b>combate</b></h1>
        <img src={Combat} alt="combate" />
        <Intro>
            <p>O Momento da conversa acabou, <br/> chegou a hora de sacar as armas e <br/> sair distribuindo sopapo.</p>
            <p>Quando a violência é a solução, temos <br/> um combate. As regras de combate<br/> 
            desse jogo são pensadas para<br/> 
            resolver conflitos de forma simples,<br/> frenética e mortal. Vem comigo.</p>
        </Intro>

        <DescricaoContainer>

  {CombateData.map(combat => (
    <div data-aos="fade-up" className="DescricaoAtributos">
    <div><b>{combat.Title}</b></div>
    <p>{combat.Description}</p></div>
  ))}

</DescricaoContainer>

<AcertoseFalhas>
    <h1>Acertos E Falhas Críticas</h1>

    <img src={Acerto} alt="acerto critico"/>
    <p>Quando numa jogada de ataque o dado cair no número 6, 
        jogue o dado novamentee torça para cair outro número 6. Se isso acontecer 
        você tem um acerto crítico. Isso quer dizer que sua ferradura de sorte está fazendo
         efeito e seu ataque teve um efeito espetacularmente sensacional.</p>


        <img src={Falha} alt="falha critica" />
         <p>Do contrário, se ligue. Se o resultado da rolagem for 1, 
            jogue o dado novamente e se outro 1 aparecer, seu ataque foi uma desgraça total. Além de errar o tiro, 
            você pode ter acertado uma pessoa inocente ou até mesmo um aliado. Isso é uma falha crítica.</p>

</AcertoseFalhas>

    </CombateIntroducao>
  )
}

export default Introducao

export const CombateIntroducao = styled.main`
display: flex;
flex-direction: column;
align-items: center;

img {
    height: auto;
    width: 90%;
}

@media (min-width: 768px){
    h1 {
        font-size: 3rem;
    }

    img {
    height: auto;
    width: 60%;
}
}

`

export const Intro = styled.section`
text-align: center;

@media (min-width: 768px){
    p {
        font-size: 1.2rem;
    }
}
`

export const DescricaoContainer = styled.section`  

  margin: 3rem auto;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 2fr));
  gap: 1.5rem;

.DescricaoAtributos {
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 30rem;
text-align: center;

b {
    font-size: 2rem;
}

p {
    font-size: 1.5rem;
}
}
`

const AcertoseFalhas = styled.section`
width: 80%;

display: flex;
flex-direction: column;

align-items: center;

p {
    font-size: 1.5rem;
}
`