import React from 'react'
import { Container, Nav, Navbar } from 'react-bootstrap'
import logo from '../../assets/sagara-logo.png';
import { Link } from "react-router-dom";
import GlobalButton from '../atoms/GlobalButton/GlobalButton';
function Header()
{
  return (
    <Navbar bg="dark" expand="lg">
      <Container fluid={true}>
        <div className={'navbar-brand'}>
          <Link to="/"> <img src={logo} alt="" /></Link>
        </div>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="w-100 text-right align-self-end">
          </Nav>
          <Nav className="text-right align-content-right align-self-end">
            <Link to="/login"> <GlobalButton variant="info" type="outline">LOGIN</GlobalButton></Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default Header
