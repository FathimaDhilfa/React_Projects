import React from 'react'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';

const Header = () => {
  return (
    <>
    <Navbar className="bg-success">
        <Container>
          <Navbar.Brand href="#home">Shopping cart</Navbar.Brand>
        </Container>
      </Navbar>
    </>
  )
}

export default Header