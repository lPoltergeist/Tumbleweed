import styled from "styled-components"

export const AncetecentesContainer = styled.section`
display: flex;
flex-direction: column;
align-items: center;

.DescricaoAntecedentes {
  max-width: 25rem;
text-align: start;
}
`

export const AntecedentesDescricao = styled.div`
text-indent: 1.5rem;
margin: 2rem 0;

display: flex;
flex-direction: column;
align-items: center;
text-align: start;

`

export const AntecedenteInstrucao = styled.div`
display: flex;
flex-direction: column;
max-width: 20rem;

text-align: center;

span {
  font-size: 1.3rem;
}
`

export const AntecedentesPontos = styled.div`

justify-content: center;
align-items: center; margin: 3rem auto;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 2fr));


.CondicaoContainer{
  :nth-child(even){
    background-color: #f3ecc5;
  }

  display: flex;
  align-items: center;
  justify-content: center;

  background-color: #fff;
  color: #000;
  font-size: 1.2rem;

  height: 3rem;
  margin: 0.5rem 1rem;
  border-radius: 2rem;
 
}
`

export const AntecedenteExplicacao = styled.div`
margin: 0 0.5rem;

justify-content: center;
align-items: center;
 
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 2fr));
  gap: 1.5rem;

  @media (min-width: 768px) {
    grid-template-columns: repeat(auto-fit, minmax(500px, 2fr));
  }
`

export const AntecedentesCol = styled.div`
display: flex;
flex-direction: column;
align-items: center;
text-align: center;
margin: 0 auto;
outline: 5px solid red;
border-radius: 1rem;
padding: 1rem;

min-height: 15rem;

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

export const AntecedentesBox = styled.div`
  padding: 1.5rem;
  border: 5px solid red;
  border-radius: 20px;
`