import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { Form, Button } from 'react-bootstrap';

import { useNavigate } from 'react-router-dom'; 

const EditVoitureForm = () => {
  const navigate = useNavigate();
  const { carId } = useParams();
  const [brands, setBrands] = useState([]);
  const [carData, setCarData] = useState({
    model: '',
    dateOfCirculation: '',
    price: '',
    brandID: '',
  });

  useEffect(() => {
    axios.get(`https://formation.inow.fr/demo/api/v1/cars/${carId}`)
      .then((response) => {
        setCarData({
          model: response.data.model,
          dateOfCirculation: response.data.dateOfCirculation.split('T')[0],
          price: response.data.price,
          brandID: response.data.brandID,
        });
      })
      .catch((error) => console.error('Fetching car data error', error));
  }, [carId]);

  useEffect(() => {
    axios.get('https://formation.inow.fr/demo/api/v1/brands')
      .then((response) => setBrands(response.data))
      .catch((error) => console.error('Fetching brands error', error));
  }, []);

  const changeFormField = (ev) => {
    setCarData((prevData) => ({
      ...prevData,
      [ev.target.name]: ev.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  
    const updatedCar = {
        model: carData.model,
        dateOfCirculation: carData.dateOfCirculation,
        price: parseFloat(carData.price), 
        brandID: parseInt(carData.brandID) 
    }
  
    console.log('Updated Car Data:', updatedCar);
  
    axios.put(`https://formation.inow.fr/demo/api/v1/cars/${carId}`, updatedCar)
      .then(rep => {
        navigate('/voitures');
        console.log(rep.data);
      })
      .catch(err => {
        console.log(err.message);
      });
  }

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group controlId="model">
        <Form.Label>Model</Form.Label>
        <Form.Control type="text" name="model" value={carData.model} onChange={changeFormField} required />
      </Form.Group>

      <Form.Group controlId="dateOfCirculation">
        <Form.Label>Date of Circulation</Form.Label>
        <Form.Control type="date" name="dateOfCirculation" value={carData.dateOfCirculation} onChange={changeFormField} required />
      </Form.Group>

      <Form.Group controlId="price">
        <Form.Label>Price</Form.Label>
        <Form.Control type="number" name="price" value={carData.price} onChange={changeFormField} required />
      </Form.Group>

      <Form.Group controlId="brandID">
        <Form.Label>Brand</Form.Label>
        <Form.Select name="brandID" value={carData.brandID} onChange={changeFormField} required>
          {brands.map(brand => (
            <option key={brand.id} value={brand.id}>{brand.name}</option>
          ))}
        </Form.Select>
      </Form.Group>

      <Button variant="primary" type="submit">
        Modifier
      </Button>
    </Form>
  )
}

export default EditVoitureForm