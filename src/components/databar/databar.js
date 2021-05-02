import React, {useState} from 'react';
import {Form, Button, Container, Row, Col, Alert} from "react-bootstrap";


const DataBar = () =>{
    return(
        <section className="dataBar">  
        <Container className="orangeBar">
            <div></div>
        </Container>
            <Container className="textDataBar">
                    <h2>We Help Businesses</h2>
                    <h2 className="h2WithStyles">Grow and Innovate</h2>
                    <br></br>
                    <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut</p>

            </Container>
        </section>
    );
}

export default DataBar; 