import styled from "styled-components"
import React from 'react'

const Viewers = () => {
  return (
    <Container>
        <Wrap>
            <img src="/images/viewers-disney.png" />
            <video autoPlay={true} loop={true} playsInline={true}>
               <source  src="/videos/1564674844-disney.mp4" type="video/mp4"/>
            </video>
        </Wrap>
        <Wrap>
            <img src="/images/viewers-marvel.png" />
            <video autoPlay={true} loop={true} playsInline={true}>
               <source  src="/videos/1564676115-marvel.mp4" type="video/mp4"/>
            </video>
        </Wrap>
        <Wrap>
            <img src="/images/viewers-national.png" />
            <video autoPlay={true} loop={true} playsInline={true}>
               <source  src="/videos/1564676296-national-geographic.mp4" type="video/mp4"/>
            </video>
        </Wrap>
        <Wrap>
            <img src="/images/viewers-pixar.png" />
            <video autoPlay={true} loop={true} playsInline={true}>
               <source  src="/videos/1564676714-pixar.mp4" type="video/mp4"/>
            </video>
        </Wrap>
        <Wrap>
            <img src="/images/viewers-starwars.png" />
            <video autoPlay={true} loop={true} playsInline={true}>
               <source  src="/videos/1608229455-star-wars.mp4" type="video/mp4"/>
            </video>
        </Wrap>

    </Container>
  )
}
const Container=styled.div`
margin-top:30px;
display:grid;
grid-gap:25px;
gap:25px;
padding:30px 0px 26px;
grid-template-columns:repeat(5,minmax(0,1fr));
@media(max-width:768px){
    grid-template-columns:repeat(1,minmax(0,1fr));
}

`;
const Wrap=styled.div`
padding-top:56.25%;
overflow:hidden;
box-shadow:rgb(0 0 0 /69%) 0px 26px 30px -10px , rgb(0 0 0 /73%) 0px 16px 10px -10px;
position:relative;
transition:all 250ms cubic-bezier(0.25,0.46,0.35);
cursor:pointer;
border:3px solid rgba(249,249,249,0.1);
border-radius:4px;

img{
    inset:0;
    width:100%;
    height:100%;
    objet-fit:cover;
    display:block;
    position:absolute;
    opacity:1;
    z-index:1;
    top:0; 
    
    
}
video{
    height:100%;
    width:100%;
    position:absolute;
    top:0px;
    opacity:0;
    cursor:pointer;

    
}
&:hover{
    box-shadow:rgb(0 0 0 /69%) 0px 26px 30px -10px , rgb(0 0 0 /73%) 0px 16px 10px -10px;
    transform:scale(1.05);
    border:3px solid #f9f9f9;

  

    video{
        opacity:1;
    }
}

`;


export default Viewers