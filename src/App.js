import styled from "styled-components"
import './App.css';
import Login from './components/Login';
import Header from "./components/Header";
import Home from "./components/Home";
import {BrowserRouter,Routes,Route  } from "react-router-dom"

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="home" element={<Home/>}/>
        <Route />
       
      </Routes>
      
    </BrowserRouter>
  );
}

export default App;
