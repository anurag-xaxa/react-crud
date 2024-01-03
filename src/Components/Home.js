import React from "react";
import Header from "../Components/Headers";
import Footer from "../Components/Footer";
import Card from 'react-bootstrap/Card';
// import Button from 'react-bootstrap/Button';
import '../assets/Style/Home.css';
import RegistrationForm from '../Components/RegisterForm.js';
// import LoginForm from '../Components/LoginForm.js';

// import card1 from '../assets/images/card-1.jpg';
// import card2 from '../assets/images/card-2.jpg';
// import card3 from '../assets/images/card-3.jpg';
import icon1 from '../assets/images/icon1.png';
import icon2 from '../assets/images/icon2.png';
import icon3 from '../assets/images/icon3.png';
import icon4 from '../assets/images/icon4.png';


const Home = () => {

  return (
    <>
      <div>
        <Header />
        <div className="main-container">
          <RegistrationForm/>
        <div className="container"> </div>
          {/* <Card style={{ width: '18rem', marginTop: '700px', marginLeft: '50px' }}>
            <Card.Img style={{ height: "300px" }} src={card1} />
            <Card.Body>
              <Card.Title>Card 1</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up the
                bulk of the card's content.
              </Card.Text>
              <Button variant="primary">Go somewhere</Button>
            </Card.Body>
          </Card>

          <Card style={{ width: '18rem', marginTop: '700px' }}>
            <Card.Img style={{ height: "300px" }} src={card2} />
            <Card.Body>
              <Card.Title>Card 2</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up the
                bulk of the card's content.
              </Card.Text>
              <Button variant="primary">Go somewhere</Button>
            </Card.Body>
          </Card>

          <Card style={{ width: '18rem', marginTop: '700px', marginRight: '50px' }}>
            <Card.Img style={{ height: "300px" }} src={card3} />
            <Card.Body>
              <Card.Title>Card 3</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up the
                bulk of the card's content.
              </Card.Text>
              <Button variant="primary">Go somewhere</Button>
            </Card.Body>
          </Card> */}
          </div>
       
        <br />
        <br />
        <div className="container">
      <div className="row">
        {/* <div className="col-md-6">
          <RegistrationForm />
        </div> */}
        {/* <div className="col-md-6">
          <LoginForm />
        </div> */}
      </div>
    </div>
          {/* <div className>
          <RegistrationForm/>
          <LoginForm/>
          </div> */}
      </div>

      <div className="category"><h1>Features</h1></div>

      <div className="conatiner">
        <div className="feature-card">
          <Card style={{ width: '8rem', marginTop: '1400px', marginLeft: '50px' }}>
            <Card.Img style={{ height: "80px" }} src={icon1} />
            <Card.Body>
              <Card.Title>Menu Management</Card.Title>
              <Card.Text>
                <p>Menu Management</p>
              </Card.Text>
              {/* <Button variant="primary">Go somewhere</Button> */}
            </Card.Body>
          </Card>
          <Card style={{ width: '8rem', marginTop: '1400px', marginLeft: '300px' }}>

            <Card.Img style={{ height: "80px" }} src={icon2} />
            <Card.Body>
              <Card.Title>Push Notifications</Card.Title>
              <Card.Text>
                <p>Push Notifications</p>
              </Card.Text>
              {/* <Button variant="primary">Go somewhere</Button> */}
            </Card.Body>
          </Card>

          <Card style={{ width: '8rem', marginTop: '1400px', marginRight: '300px' }}>
            <Card.Img style={{ height: "80px" }} src={icon3} />
            <Card.Body>
              <Card.Title>Offers & Discounts</Card.Title>
              <Card.Text>

                <p>Offers & Discounts</p>
              </Card.Text>
              {/* <Button variant="primary">Go somewhere</Button> */}
            </Card.Body>
          </Card>

          <Card style={{ width: '8rem', marginTop: '1400px', marginRight: '50px' }}>
            <Card.Img style={{ height: "80px" }} src={icon4} />
            <Card.Body>
              <Card.Title>Reports & Analytics</Card.Title>
              <Card.Text>
                <p>Reports & Analytics</p>
              </Card.Text>
              {/* <Button variant="primary">Go somewhere</Button> */}
            </Card.Body>
          </Card>

        </div>
       <Footer/>
      </div>
      <br />
      <br />


    </>

  )
}

export default Home;