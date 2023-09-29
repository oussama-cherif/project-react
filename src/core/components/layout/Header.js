import React, { useContext } from 'react'

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from "react-router-dom";
import { UserContext } from '../../context/UserContext';
import { Button } from 'react-bootstrap';

const Header = () => {
  const [user, setUser] = useContext(UserContext);
  const logout = () => {
    setUser(undefined);
    sessionStorage.removeItem('USER');
  }

  return (
    <Navbar expand="lg" bg="light" variant="light">
      <Container>
        <Link className="navbar-brand" to="/">
          Voitures
        </Link>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Link className="nav-link" to="/">Accueil</Link>
            <Link className="nav-link" to="/voitures">Voitures</Link>
            {user ? (<Link className="nav-link" to="/voitures/create">Ajouter une voiture</Link>): null}
          </Nav>
          {user ? (
              <span className="d-flex align-items-center">
                <span className="me-2">{user?.mail}</span>
                <Button className="btn btn-secondary" onClick={logout}>Se déconnecter</Button>
              </span>
          ) : (
            <Link to={'/login'} className="btn btn-primary">Se connecter</Link>
          )}
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
  
}

export default Header


