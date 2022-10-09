import React from 'react'
import styled from "styled-components"

const Login = (props) => {
  return (
    <Container>
        <Content>
            <CTA>
               <CTAlogonOne src="/images/cta-logo-one.svg" />
               <CTAbuttom>Get all there</CTAbuttom>
               <Description>
               Get Premier Access to Raya and the Last Dragon for an additional fee
            with a Disney+ subscription. As of 03/26/21, the price of Disney+
            and The Disney Bundle will increase by $1.
               </Description>
               <CTAlogotwo src="/images/cta-logo-two.png" />
            </CTA>
            <BgImage />
        </Content>
    </Container>
  )
};
const Container=styled.section`
    overFlow:hidden;
    display:flex;
    flex-direction:column;
    height:100vh;


`;
const Content = styled.div`
width:100%;
display:flex;
align-items:center;
justify-content:center;
height:100%;
position:relative;
padding:80px 40px;

`;
const BgImage=styled.div`
height:100%;
position:absolute;
background-position:top;
background-size:cover;
background-repeat:no-repeat;
background-image:url("/images/login-background.jpg");
top:0;
left:0;
right:0;
z-index:-1;


`;
const CTA =styled.div`
max-width:650px;
width:100%;

`;
const CTAbuttom=styled.button`
width: 100%;
padding: 16.5px 0;
border: 1px solid transparent;
text-align: center;
background-color: #0063e5;
font-size: 18px;
color: #f9f9f9;
font-weight: bold;
margin-bottom:2vw;
`
const CTAlogonOne=styled.img`
max-width:650px;
width:100%;
`;
const Description=styled.p`
text-align: center;
line-height: 1.5;
letter-spacing: 1.5px;
font-size: 15px;
margin-bottom:2vw;
`;
const CTAlogotwo=styled.img`
max-width:600px;
width:100%;
display:block;


`;

export default Login