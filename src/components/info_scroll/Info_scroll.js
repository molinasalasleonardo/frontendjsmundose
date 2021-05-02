import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Section3Image from "../../assets/img/section3-image.png";
import Carousel from 'react-bootstrap/Carousel';
import Figure from 'react-bootstrap/Figure';



const InfoScroll = () =>{
    return(
<section className="InfoScroll">
<div>
                    <img className="sec3Image"
                          src={Section3Image}
                          width="1000"
                          height="850"
                          alt="sec3"
                                    />
</div>
<div>
<Carousel className="carouselFigure">
  <Carousel.Item>
  <Figure>
  <Figure.Image
  />
</Figure>
    <Carousel.Caption className="caption1">
    <p>Sed ut perspiciatis</p>
      <h1>Nemo Enim1</h1>
      <br></br>
      <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
  <Figure>
  <Figure.Image
  />
</Figure>
    <Carousel.Caption className="caption2">
    <p>Sed ut perspiciatis</p>
      <h1>Nemo Enim2</h1>
      <br></br>
      <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
  <Figure>
  <Figure.Image
  />
</Figure>
    <Carousel.Caption className="caption3" >
      <p>Sed ut perspiciatis</p>
      <h1>Nemo Enim3</h1>
      <br></br>
      <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam.</p>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>

</div>
                                    

</section>

    );
}

export default InfoScroll;