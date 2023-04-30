import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

function Navbarpro() {
  const cart = useSelector(state => state.cart)
  return (
    <div>
      <Navbar fixed='top' bg="light" expand="lg" >
        <Container>
          <Link to="/" className='navbar-brand'>Noor Store</Link>
          <Navbar.Toggle aria-controls="u-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Link className='navbar-brand' to="/">Products</Link>
              <Link className='navbar-brand' to="/cart">Cart-{cart.length}</Link>

            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  )
}

export default Navbarpro
