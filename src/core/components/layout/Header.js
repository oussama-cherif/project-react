import React, { useContext } from 'react'

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from "react-router-dom";
import { UserContext } from '../../context/UserContext';

const Header = () => {
    const [user, setUser] = useContext(UserContext);
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
    <Container>
      <Link className="navbar-brand" to="/">voitures</Link>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="me-auto">
          <Link className="nav-link" to="/">Accueil</Link>
          <Link className="nav-link" to="/voitures">Voitures</Link>
          <Link className="nav-link" to="/voitures/create">Ajouter</Link>
          <Link to={'/login'} className="nav-link">Se connecter</Link>
        </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>
  )
}

export default Header