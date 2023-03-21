import styled from "styled-components"

export const HomeContainer = styled.main`
margin: 2rem .5rem;

border-radius: 10px;

@media (min-width: 768px) {
    margin: 2rem 3rem;

}

background-color: rgba(33,33,33, 0.9);
`

export const Section = styled.section`
margin: 0 0.5rem;

display: flex;
flex-direction: column;
align-items: center;

text-indent: 1rem;

@media (min-width: 1000px) {
    margin: 0 5rem;

display: flex;
flex-direction: column;
align-items: center;

text-indent: 1rem;

text-align: start;
h2 {
    font-family: "Teko", sans-serif;
    font-size: 5rem;
    font-weight: 400;
}

}
`

export const P_Container = styled.div`

display: flex;
flex-direction: column;
align-items: center;


@media (max-width: 999px) {

    :nth-child(3){
        flex-direction: column-reverse;
    }
}

h2 {
    font-family: "Teko", sans-serif;
    font-size: 2rem;
    font-weight: 400;
}

p{
    color:#f3ecc5; text-indent: 20px;
    font-size: 1rem;
    
}

img{
    height: auto;
    width: 90%;
    padding: 1rem 0;
    border-radius: 10px;
}



@media (min-width: 1000px) {
    display: flex;
    flex-direction: row;
  


p{
    color:#f3ecc5;
     text-indent: 20px;
    font-size: 2.5vw;   

    :nth-child(2){
        padding-left: 2rem;
    }

    :nth-child(1){
        padding-right: 2rem;
    }
}

img{
    height: auto;
    width: 50%;
    padding: 1rem 0;
    border-radius: 10px;
}
}
`

