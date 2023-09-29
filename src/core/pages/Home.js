import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { Container, ListGroup, Image, Card } from 'react-bootstrap';

function Home() {
  const [brands, setBrands] = useState([]);

  useEffect(() => {
    axios
      .get('https://formation.inow.fr/demo/api/v1/brands')
      .then((response) => {
        setBrands(response.data);
      })
      .catch((error) => {
        console.error('Erreur lors de la récupération des données des marques :', error);
      });
  }, []);

  return (
    <Container className="mt-5">
      <ListGroup className="d-flex flex-row mt-4">
        {brands.map((brand) => (
          <ListGroup.Item key={brand.id} className="d-flex align-items-center">
            <Link to={`/marques/${brand.id}`} className="text-decoration-none mr-3"><Image src={`/images/${brand.image}`} alt={brand.name} className="brand-image" /></Link>
          </ListGroup.Item>
        ))}
      </ListGroup>
    </Container>
  );
}

export default Home;

