import styled from "styled-components";

export const Rectangle = styled.div`
border-radius: 20px;
height: 3px;
width: 100%;
background-color: red;

margin: 3rem 0;
`

export const Container = styled.main`

background-color: rgba(33,33,33, 0.95);
border-radius: 10px;

margin: 2rem 0.5rem; 
padding: 0.5rem;

@media (min-width: 768px) {
  margin: 2rem;
  padding: 0;
}
`

export const PersonagensContainer = styled.section`

display: flex;
flex-direction: column;
justify-content: center;
align-items: center;

h1 {
  font-size: 1.5rem;
}

@media (min-width: 768px) {
  margin: 2rem 3rem;
  padding: .5rem;


h1 {
  font-size: 2.5rem
}

h2 {
  font-size: 1.7rem;
}

p{
 color: #f3ecc5;
 font-size: 1.2rem;
}


}

@media (max-width: 768px) {
  img {
    height: auto;
    width: 100%;
  }
}

`

export const Instrucoes = styled.section`


align-items: center;

img {
  align-items: center;
}

@media (min-width: 768px) {

p{
 color: #f3ecc5;
 font-size: 1.4rem;
}

}

`
