import { signInWithPopup, signOut } from 'firebase/auth'
import {useDispatch, useSelector} from 'react-redux'
import React,{useEffect} from 'react'
import styled from "styled-components"
import { auth,provider} from "../firebase"
import { useNavigate } from 'react-router-dom'
import {
    selectUserName,
    selectUserEmail,
    selectUserPhoto,
    setUserLoginDetails,
    setSignOutState
    
} from "../features/user/userSlice"


const Header = () => {

    const dispatch=useDispatch()
    const navigate=useNavigate()
    const userName=useSelector(selectUserName)
    const useremail=useSelector(selectUserEmail)
    const userPhoto=useSelector(selectUserPhoto);
    const setUser = (user)=>{
      dispatch(
        setUserLoginDetails({
          name:user.displayName,
          email:user.email,
          photo:user.photoURL,
        })
      )
  
    }
    useEffect(() => {
        auth.onAuthStateChanged(async(user)=>{
            if(user){
                setUser(user);
                navigate("/home")
            }
        })
        
    }, [userName]);

    const handleAuth=()=>{
        if(!userName){
            signInWithPopup(auth,provider)
            .then((result)=>{
                setUser(result.user)
            }).catch((error)=>{
                alert(error.message)
            })
        }else if(userName){
            signOut(auth).then(()=>{
                dispatch(setSignOutState());
                navigate("/")
            })
        }
        
    }
  return (
   <Nav>
       <Logo>
           <img src="/images/logo.svg" />
       </Logo>
       {
           !userName?
           <Login onClick={handleAuth}>
           Login
           </Login>    :
           <>
       <NavMenu>
           <a>
               <img src="/images/home-icon.svg" />
               <span>HOME</span>
           </a>
           <a>
               <img src="/images/search-icon.svg" />
               <span>SEARCH</span>
           </a>
           <a>
               <img src="/images/watchlist-icon.svg" />
               <span>WHATCHLIST</span>
           </a>
           <a>
               <img src="/images/original-icon.svg" />
               <span>ORIGINAL</span>
           </a>
           <a>
               <img src="/images/movie-icon.svg" />
               <span>MOVIES</span>
           </a>
           <a>
               <img src="/images/series-icon.svg" />
               <span>SERIES</span>
           </a>
       </NavMenu>
       <SignOut>
       <UserImg  src={userPhoto} alt="userPhoto" />
           <DropDown>
               <span onClick={handleAuth}>Sign Out</span>
           </DropDown>
       </SignOut>
       </>
       }

       
   </Nav>
  )
}
const Nav =styled.nav`
height:70px;
position:fixed;
background-color:#090b13;
width:100%;
display:flex;
align-items:center;
justify-content:space-between;
top:0;
left:0;
right:0;
padding:0 69px;
z-index:3;
`
const Logo=styled.a`
width:80px;
margin-top:4px;
display:inline-block;
a{
    display:block;

    
}
`
const NavMenu=styled.div`

  align-items: center;
  display: flex;
  flex-flow: row nowrap;
  height: 100%;
  justify-content: flex-end;
  margin: 0px;
  position: relative;
  margin-right: auto;
  margin-left: 25px;
a{
    display:flex;
    align-items:center;
    font-size:12px;
    padding:0 10px;
    
    
        
    img{
        width:20px;
        height:20px;
        z-index:auto;
    }

    span{

        position:relative;

        &:before{
            content: '';
            height: 2px;
            width: 100%;
            background: #f9f9f9;
            position: absolute;
            left: 0;
            top: 21px;
            opacity:0;
            transform-origin:left center;
            transform:scaleX(0);
            transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
        }
    }
    &:hover{
        cursor:pointer;
        span:before{
            opacity:1;
            transform:scaleX(1);
        }
    }
}
@media (max-width:906px){
    display:none;
}

`
const Login=styled.div`
padding:7px 24px;
background:rgb(0,0,0,0.3);
border:1px solid #f9f9f9;
cursor:pointer;
border-radius:4px;
`

const UserImg=styled.img`
width:100%;
height:100%;
border-radius:50%;
objet-fit:cover;

`
const DropDown=styled.div`
position:absolute;
top:48px;
right:0;
padding:10px;
width:100px;
font-size:14px;
background:rgb(19,19,19);
border-radius:3px;
display:flex;
align-items:center;
justify-content:center;
opacity:0;
transition:all 0.5s;
box-shadow:rgb(0 0 0/50%) 0px 0px 18px 0px ;
`
const SignOut=styled.div`
width:48px;
height:48px;
position:relative;
cursor:pointer;

&:hover{
    ${DropDown}{
        opacity:1;
        transition-duration:1S
    }
}
`

export default Header