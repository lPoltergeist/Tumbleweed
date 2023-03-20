import styled from "styled-components";

export const Container = styled.div`
display: flex;
flex-direction: column;

img {
  margin: 0 auto;
}
`

export const AtributosContainer = styled.section`
justify-content: center;
  align-items: center;
 margin: 3rem auto;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 2fr));
  gap: 1.5rem;

.AtributosContainer{
display: flex; 
flex-direction: column;
align-items: center;
justify-content: center;
text-align: center;

h4 {
  font-size: 1.5rem;
  margin-bottom: -0.5rem;
}

}

.Container{
  background-color: #f3ecc5;
border-radius: 10px;
padding: 2rem;
height: 3rem;
font-size: 1.1rem;
}

@media (min-width: 768px) {
  .AtributosContainer {
    p {
      height: 10rem;
    }
  }
}

`