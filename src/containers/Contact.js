import React, {useState} from 'react';
import {Form, Button, Container, Row, Col, Alert} from "react-bootstrap";
import ContactImage from '../assets/img/contact-image.png';
import Spinner from 'react-bootstrap/Spinner';
import {sendEmail} from "../axios/index";
import swal from 'sweetalert';


const Contact = () =>{
    const [validate, setValidate] = useState(true)
    const [formData, setFormData] = useState({})
    const [loading, setLoading] = useState(false)

    const handleSubmit = async (e) =>{
        e.preventDefault();
       //console.log('Se envio')
        const form = e.currentTarget;

        if (!formData.name=="" && !formData.phone==""&& !formData.email==""&& !formData.message==""){         
            
            setLoading(true);
            //console.log(loading);
           let responseData = await sendEmail (formData) 
           
            //console.log (responseData)
           document.getElementById("contactForm").reset();
           setLoading(false);
            swal("Su mensaje se envio con éxito"); 
            setFormData ({});
            //console.log(loading);
          
        }else{
            swal("Por favor llene todos los campos del formulario");
        }
    }

    const resetForm = () =>{
        document.getElementById("contactForm").reset();
    }

    const handleOnChange = (e) => {
    let data = {}
    data [e.target.name] = e.target.value  
        setFormData ((prevState)=> {
            return {
                ...prevState, [e.target.name] : e.target.value
 
            }
        })


       
}
console.log (formData)

    return(
        <section className="contact" id="#contacto">
            <Container>
                <Row>
                    <Col md={12} lg={5}>
                        <h3>Get in touch<br></br>
                        <span>We are hiring!</span>
                        </h3>
                        <Form noValidate validated={validate} onSubmit={handleSubmit} id="contactForm">
                            <Form.Group>
                                <Form.Control
                                    onChange={handleOnChange}
                                    required
                                    type='text'
                                    placeholder='Name'
                                    name='name'
                                    ></Form.Control>
                            </Form.Group>
                            <Form.Group>
                                <Form.Control
                                    onChange={handleOnChange}
                                    required
                                    type='email'
                                    placeholder='email'
                                    name='email'
                                    ></Form.Control>
                            </Form.Group>
                            <Form.Group>
                                <Form.Control
                                    onChange={handleOnChange}
                                    required
                                    type='tel'
                                    placeholder='phone'
                                    name='phone'
                                    ></Form.Control>
                            </Form.Group>
                            <Form.Group  controlId ='forBasicTextArea'>
                                <Form.Control
                                    onChange={handleOnChange}
                                    required
                                    as='textarea'
                                    rows={3}
                                    placeholder='Message'
                                    name='message'
                                    ></Form.Control>
                            </Form.Group>
                    
  {!loading &&<Button className='buttonForm' onClick={handleSubmit}>                          
    Submit
  </Button>}
  {loading &&<Spinner animation="border" styles={{width:'85px'},{height:'85px'}} variant="success" />}
&emsp;
  <Button className='buttonForm' onClick={resetForm}>                          
    Clear
  </Button>

</Form>

                    </Col>
                    <Col md={12} lg={5}>
                        <img src={ContactImage} alt='Contact' className='imagenContacto'></img>
                    </Col>
                </Row>


            </Container>
            
           
        </section>
    );
}

export default Contact; 