import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

function BrandList() {
  const { id } = useParams();
  const [brand, setBrand] = useState({});

  useEffect(() => {
    axios
      .get(`https://formation.inow.fr/demo/api/v1/brands/${id}`)
      .then((response) => {
        setBrand(response.data);
      })
      .catch((error) => {
        console.error('Erreur', error);
      });
  }, [id]);

  return (
    <div>
      <h1>{brand.nom}</h1>
      <img src={`/images/${brand.image}`} alt={brand.nom} />
    </div>
  );
}

export default BrandList;
