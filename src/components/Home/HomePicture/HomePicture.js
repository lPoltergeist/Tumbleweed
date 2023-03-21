import React from 'react'
import styled from 'styled-components'
import HomePic from '../../../assets/homePic.jpg'

const HomePicture = () => {
  return (
    <PictureContainer>
      
    </PictureContainer>

  )
}

export default HomePicture

const PictureContainer = styled.section`
background-image: url(${HomePic});
background-size: contain;
background-repeat: no-repeat;

height: 35vh;
width: 100%;

p {
  font-size: .8rem;
  color: black;
  font-weight: bold;
}


@media (min-width: 560px) {
  background-size: cover;
  height: 60vh;
width: 100%;
}

`