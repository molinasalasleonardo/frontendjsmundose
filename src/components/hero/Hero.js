import React, {useState} from 'react';
import {Carousel, Button, Tooltip, OverlayTrigger} from "react-bootstrap";
import imageSlider from "../../assets/img/slider-1.png";
import imageSlider2 from "../../assets/img/slider-222.jpg";
import imageSlider3 from "../../assets/img/slider-333.jpg";
import Overlay from 'react-bootstrap/Overlay';





const Hero = () =>{
  const renderTooltip = (props) => (
    <Tooltip id="button-tooltip" {...props}>
      De momento no hay nada que leer
    </Tooltip>
  );

    return (
      
     <Carousel >
  <Carousel.Item>
    <img
      className="imageContact"
      src={imageSlider}
      alt="First slide"
    />
    <Carousel.Caption>
      <h3>Este es nuestro primer slide</h3>
      <h2>Insertar información de su producto aquí</h2>
      <OverlayTrigger
    placement="right"
    delay={{ show: 250, hide: 400 }}
    overlay={renderTooltip}
  >
    <Button className="btn draw-border" style={{background:'transparent'}}  >Read More!</Button>
  </OverlayTrigger>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="imageContact"
      src={imageSlider2}
      alt="Second slide"
    />

    <Carousel.Caption>
    <h3>Este es nuestro segundo slide</h3>
      <h2>Insertar información de su producto aquí</h2>
      <OverlayTrigger
    placement="right"
    delay={{ show: 250, hide: 400 }}
    overlay={renderTooltip}
  >
    <Button className="btn draw-border" style={{background:'transparent'}}  >Read More!</Button>
  </OverlayTrigger>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="imageContact"
      src={imageSlider3}
      alt="Third slide"
    />

    <Carousel.Caption>
    <h3>Este es nuestro tercer slide</h3>
      <h2>Insertar información de su producto aquí</h2>
      <OverlayTrigger
    placement="right"
    delay={{ show: 250, hide: 400 }}
    overlay={renderTooltip}
  >
    <Button className="btn draw-border" style={{background:'transparent'}}  >Read More!</Button>
  </OverlayTrigger>
    </Carousel.Caption>
  </Carousel.Item>
  
</Carousel>
    );
}

export default Hero;