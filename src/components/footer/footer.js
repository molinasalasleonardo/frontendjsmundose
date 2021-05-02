import React from 'react';
import { Container, Form } from 'react-bootstrap';
import Contact from '../../containers/Contact';
import Navbar from 'react-bootstrap/Navbar';
import LogoFooter from '../../assets/img/footer-logo(1).svg';




const Footer = () =>{
    return(
        <div className='footerBar' style={{background:"black"}}>
    <img className='footerImage'
        src={LogoFooter}
        width="100"
        height="25"
        alt="25watts"
      />
    <div>
            <p className="pFooter" style={{color:"white"},{left:"10px"}}>2020 @ All rights reserved</p>
    </div>
        </div>
    );
}


export default Footer;