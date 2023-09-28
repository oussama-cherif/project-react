import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { format } from 'date-fns';

function CarsByBrand() {
  const { id } = useParams();
  const [cars, setCars] = useState([]);
  const [brand, setBrand] = useState([]);


  useEffect(() => {
    axios
      .get(`https://formation.inow.fr/demo/api/v1/brands/${id}`)
      .then((response) => {
        setBrand(response.data);
      })
      .catch((error) => {
        console.error('Erreur marque', error);
      });
  
    axios
      .get('https://formation.inow.fr/demo/api/v1/cars')
      .then((response) => {
        const filteredCars = response.data.filter((car) => car.brandID == id);
        setCars(filteredCars);
      })
      .catch((error) => {
        console.error('Erreur voitures', error);
      });
    }, [id]);
  

    return (
        <div>
          <h1>Marque : {brand ? brand.name : 'Chargement'}</h1>
          <img src={`/images/${brand.image}`} alt={brand.name} />
          <ul>
            {cars.map((car) => (
              <li key={car.id}>
                <p>Nom du modèle : {car.model}</p>
                <p>Année : {format(new Date(car.dateOfCirculation), 'yyyy')}</p>
                <p>Prix : {car.price}$</p>
                <p>Marque : {brand ? brand.name : 'Chargement'}</p>
              </li>
            ))}
          </ul>
        </div>
      );
          }    

export default CarsByBrand;









{/* <div>
<h1>Marque : {id}</h1>
<ul>
  {cars.map((car) => (
    <li key={car.id}>
      <p>Nom du modèle : {car.name}</p>
      <p>Année : {car.year}</p>
      <p>Prix : {car.price}</p>
    </li>
  ))}
</ul>
</div> */}