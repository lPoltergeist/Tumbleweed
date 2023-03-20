import styled from 'styled-components'

export const Nav = styled.nav`
  height: 80px;
width: 100%;

background-color: rgba(33,33,33, 0.95);

display: flex;
align-items: center;



`
export const NavMenu = styled.div`
display: none;

@media (min-width: 768px) {
    display: flex;

    ul {
        display: flex;
        justify-content: center;
        align-items: center;

        li {
            padding: 0 0.5rem;
            font-size: 1.7rem;
            color: #DE0303;

            transition: 0.2s ease-in-out;
            :hover {
                scale: 1.1;
                color: #fff;
                letter-spacing: 2px;
            }
        }

        a {
            padding-left: 0.5rem;
 
        }
    }
}
`


export const NavContainer = styled.div`

margin: 0 0.5rem;
display: flex;
justify-content: space-between;
align-items: center;
width: 100%;

.MenuBars{
    @media (min-width: 768px) {
        display: none;
    }
}

img {
    height: auto;
    width: 10rem;
}

span{
    color: white;
    font-family: "Chinese Rock";
  
}

.menu-overlay{
    position: fixed;
    top: 0;
    left: 0;
    width: 40%;
    height: 100vh;
    background-color: #000000;
    opacity: 0.5;
}

.menu-items{
    position: fixed;
    top: 0;
    right: 0;
    background-color: #252525;
    width: 60%;
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
   padding-top: 2rem;

    a {
        font-size: 2rem;
        color: #DE0303;
        text-transform: uppercase;
        padding-left: 0.5rem;
    }
}

@media (min-width: 1000px) {

    margin: 0 5rem;

    img {
    height: auto;
    width: 10rem;
}

span{
    color: white;
    font-family: "Chinese Rock";
  
}

.menu-overlay{
    position: fixed;
    top: 0;
    left: 0;
    width: 40%;
    height: 100vh;
    background-color: #000000;
    opacity: 0.5;
}

.menu-items{
    position: fixed;
    top: 0;
    right: 0;
    background-color: #252525;
    width: 60%;
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
   padding-top: 2rem;

    a {
        font-size: 2rem;
        color: #DE0303;
        text-transform: uppercase;
        padding-left: 0.5rem;
    }
}
}
`

