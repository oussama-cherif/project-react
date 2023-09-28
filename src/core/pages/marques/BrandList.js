import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

function BrandList() {
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
    <div>
      <h1>Marques</h1>
      <ul>
        {brands.map((brand) => (
          <li key={brand.id}>
          <Link to={`/carsbybrand/${brand.id}`}>
              {brand.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default BrandList;
