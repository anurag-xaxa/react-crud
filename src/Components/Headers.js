import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Image from 'react-bootstrap/Image'
import Logo from '../assets/images/logo.jpg';
import '../assets/Style/Headers.css';

// import Logout from '../Components/Logout'


const Header = () => {


  return (
    <div>

      <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="#home">
            <Image className="systos-logo" src={Logo} fluid />

          </Navbar.Brand>
          <Nav className="me-auto menu-bar">
            <Nav.Link href="/home">Home</Nav.Link>
            <Nav.Link href="#features">Features</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link>
            
            
            
          </Nav>
        </Container>
      </Navbar>
      <br />
      <br />



    </div>
  )
}

export default Header