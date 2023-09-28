import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

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

  useEffect(() => {
    brands.forEach((brand) => {
      console.log(`/images/${brand.image}`);
    });
  }, [brands]);

  return (
    <div>
      <h1>Marques</h1>
      <ul>
        {brands.map((brand) => (
          <li key={brand.id}>
            <Link to={`/marques/${brand.id}`}>{brand.name}</Link>
            <img src={`/images/${brand.image}`} alt={brand.name} />
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Home;
