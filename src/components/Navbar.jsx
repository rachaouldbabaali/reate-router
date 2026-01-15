import React from 'react'
import { Container, Navbar as BSNavbar, Nav, Button } from 'react-bootstrap'

const Navbar = () => {
  return (
    <BSNavbar bg='primary' variant='dark' fixed='top' style={{paddingLeft:'270px'}}>
        <Container fluid>
            <BSNavbar.Brand>
                Ecommerce App
            </BSNavbar.Brand>
        </Container>

    </BSNavbar>
  )
}

export default Navbar
