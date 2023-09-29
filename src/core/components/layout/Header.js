import React, { useContext, useEffect } from 'react'

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from "react-router-dom";
import { UserContext } from '../../context/UserContext';
import { Button } from 'react-bootstrap';
import { useTranslation, Trans } from 'react-i18next';

const Header = () => {
  const { t, i18n } = useTranslation();
  const [user, setUser] = useContext(UserContext);
  const logout = () => {
    setUser(undefined);
    sessionStorage.removeItem('USER');
  }
  useEffect(() => {
    console.log('Current Language: ', i18n.language);
  }, [i18n.language]);

  return (
    <Navbar expand="lg" bg="light" variant="light mb-4">
      <Container>
        <Link className="navbar-brand" to="/">
          Voitures
        </Link>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Link className="nav-link" to="/">{t('home')}</Link>
            <Link className="nav-link" to="/voitures">{t('cars')}</Link>
            {user ? (<Link className="nav-link" to="/voitures/create">{t('addcar')}</Link>): null}
          </Nav>
          {user ? (
              <span className="d-flex align-items-center">
                <span className="me-2">{user?.mail}</span>
                <Button className="btn btn-secondary" onClick={logout}>{t('logout')}</Button>
              </span>
          ) : (
            <Link to={'/login'} className="btn btn-primary">{t('login')}</Link>
          )}
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
  
}

export default Header


