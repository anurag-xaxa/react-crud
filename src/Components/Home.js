import React from "react";
import Header from "../Components/Headers";
// import Image from 'react-bootstrap/Image';
// import Col from 'react-bootstrap/Col';
// import Row from 'react-bootstrap/Row';
// import Container from 'react-bootstrap/Container';
// import Images from '../assets/images/images.jpg';
import Wallpaper from '../assets/images/front-wallpaper.jpg';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import '../assets/Style/Home.css';
import card1 from '../assets/images/card-1.jpg'
import card2 from '../assets/images/card-2.jpg'
import card3 from '../assets/images/card-3.jpg'




const Home = () => {
    const backgroundStyle = {
        backgroundImage: `url(${Wallpaper})`,
        backgroundSize: 'cover', // or 'contain', or a specific size
        backgroundPosition: 'center', // or any other valid CSS position value
        height: '100vh', // adjust the height based on your design
        // Add more background-related styles if needed
      };
    
    return(
       <>
         <div>   
            <Header/>
       

            <div style={backgroundStyle}>
            </div>
            {/* <Container>
                <br/>
      <Row>
        <Col xs={6} md={4}>
          <Image src={Images} thumbnail />
        </Col>
        <Col xs={6} md={4}>
          <Image src={Images} thumbnail />
        </Col>
        <Col xs={6} md={4}>
          <Image src={Images} thumbnail />
        </Col>
      </Row>
    </Container> */}

    <div className="container">
    <Card style={{ width: '18rem' , marginTop:'700px', marginLeft: '50px'}}>
      <Card.Img   style={{height:"300px"}}src= {card1} />
      <Card.Body>
        <Card.Title>Card 1</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>

    <Card style={{ width: '18rem' , marginTop:'700px'}}>
      <Card.Img style={{height:"300px"}}src= {card2} />
      <Card.Body>
        <Card.Title>Card 2</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>

    <Card style={{ width: '18rem' , marginTop:'700px', marginRight:'50px'}}>
      <Card.Img style={{height:"300px"}}src= {card3} />
      <Card.Body>
        <Card.Title>Card 3</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
    
    
    </div>
    
    
    <br/> <br/>
    
    </div> 
        <div className="category"><h1>Category</h1></div>
    

       </>
        
    ) 
}

export default Home;