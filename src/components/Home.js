import React from 'react'
import styled from "styled-components"
import ImgSlider from './ImgSlider'
import Viewers from './Viewers'

const Home = () => {
  return (
    <Container>
      <ImgSlider/>
      <Viewers/>

    </Container>
   
  )
}
const Container=styled.main`
position:relative;
min-height:calc(100vh - 250px);
display:block;
overflow-x:hidden;
top:70px;
padding:0 calc(3.5vw + 5px);

&:after{
  content:'';
  position:absolute;
  background:url('/images/home-background.png');
  inset:0;
  z-index:-1;
}
`

export default Home