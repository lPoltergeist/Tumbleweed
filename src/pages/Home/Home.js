import React from 'react'

import { HomeContainer, P_Container, Section } from './style'

import Cowboys from '../../assets/cowboys.jpg'
import Cowboys2 from '../../assets/cowboys2.jpg'
import Termos from '../../components/Home/Termos/Termos'

const Home = () => {
    return (
        <HomeContainer>
            <Section>
                <h2>Bem vindo a Deadwood, forasteiro. </h2>
                <P_Container>
                    <img src={Cowboys} alt="cowboys" />
                    <p>Não vemos muito de ocês por essas bandas... Deadwood é um lugar muito perigoso,
                        então se ocês quiserem se aventurar por aqui,
                        estejam preparados, não são todos que conseguem sobreviver aos perigos. </p>
                </P_Container>

                <P_Container>
                    <p>Deixe me contar um pouco sobre essas bandas, Deadwood é uma região do Arizona cercada de perigos,
                        como foras da lei dos tipo de dar febre de tão brabo,
                        indigenas sanguinarios e caçadores de recompensa.<br />   Mas também não é de todo ruim, entende?
                        Pode se encontrar muitas chaienes por aqui e
                        saloons bons pra moiá as palavras.</p>
                    <img src={Cowboys2} alt="cowboys" />
                </P_Container>
            </Section>

            <Termos />
        </HomeContainer>
    )
}

export default Home

