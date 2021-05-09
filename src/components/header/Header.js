import React, {useState} from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/Navbar';
import Form from 'react-bootstrap/Navbar';
import FormControl from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Navbar';
import Logo from "../../assets/img/top-logo(2).svg";
import{Route, NavLink, HashRouter, Switch} from "react-router-dom";
import Databar from "../databar/databar";
import Accordion from "../accordion/accordion";
import Contact from "../../containers/Contact";
import Home from "../hero/Hero";

// const HeaderColor = () =>{
  //const [headerColor, setHeaderColor] = useState()


 //const scrollVar = () =>{

 /*window.onscroll=(e) =>{
    console.log(window.scrollY);}
   // console.log(scrollVar) ;
    

  if (window.onscroll===70){
    console.log('cambiarheader')
  }else{
    console.log('header')
  } //}*/


//}//}


const  Navbar1= ()=>{
  const [navbar11, setNavbar11] = useState(false);

  const changeBackground=()=>{
    if (window.scrollY>=150){
      setNavbar11(true)
    }else{
      setNavbar11(false);
    }
    }
    window.addEventListener('scroll', changeBackground);
  

    return(
      
      <header className={navbar11 ? 'navbar11 active' : 'navbar11'}>
          <Navbar>
  <Navbar.Brand href="#home" className="logo">
    <img
      src={Logo}
      width="200"
      height="50"
      className="-inline-block align-top"
      alt="25watts"
    />  </Navbar.Brand>
     <Navbar.Brand ><NavLink to="/"> Home</NavLink></Navbar.Brand>
     <Navbar.Brand ><NavLink to="/databar"> About</NavLink></Navbar.Brand>
     <Navbar.Brand ><NavLink to="/accordion"> Products</NavLink></Navbar.Brand>
     <Navbar.Brand ><NavLink to="/Contact"> Contact</NavLink></Navbar.Brand>
 
    </Navbar>
    </header>
  

     
  );
}

export default Navbar1;