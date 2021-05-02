import React from "react";
import { Container, Card, Button } from "react-bootstrap";
import accordionImage from "../../assets/img/section4-image.png";
import Accordion from 'react-bootstrap/Accordion';

const AccordionSection4 = () =>{
    return(
        <section className="sectionAccordion">
            <Accordion defaultActiveKey="0">
  <Card>
    <Card.Header className="accordionHeader">
      <Accordion.Toggle as={Button} variant="link" eventKey="0">
      Sed ut perspiciatis
      </Accordion.Toggle>
    </Card.Header>
    <Accordion.Collapse eventKey="0">
      <Card.Body>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.</Card.Body>
    </Accordion.Collapse>
  </Card>
  <Card>
    <Card.Header>
      <Accordion.Toggle as={Button} variant="link" eventKey="1">
      Ut enim ad minima veniam
      </Accordion.Toggle>
    </Card.Header>
    <Accordion.Collapse eventKey="1">
      <Card.Body>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.</Card.Body>
    </Accordion.Collapse>
  </Card>
  <Card>
    <Card.Header>
      <Accordion.Toggle as={Button} variant="link" eventKey="2">
      Sit amet, consectetur, adipisci
      </Accordion.Toggle>
    </Card.Header>
    <Accordion.Collapse eventKey="2">
      <Card.Body>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.</Card.Body>
    </Accordion.Collapse>
  </Card>
</Accordion>
                    <div className="imageAccordion">
            <img
                src= {accordionImage}
                alt="section4"
                />
                     </div>     
        </section>
        
    );
} 
export default AccordionSection4;