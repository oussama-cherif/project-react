import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { Form, Button, Container, Col } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom';

const CreateVoitureForm = () => {
  const navigate = useNavigate();
  const [brands, setBrands] = useState([])
  const [carData, setCarData] = useState({
    model: '',
    dateOfCirculation: '',
    price: '',
    brandID: ''
  })

  useEffect(() => {
    axios.get('https://formation.inow.fr/demo/api/v1/brands')
      .then(response => {
        setBrands(response.data)
      })
      .catch(error => console.log(error))
  }, []);

  const changeFormField = (ev) => {
    const obj = { ...carData }
    obj[ev.target.name] = ev.target.value
    setCarData(obj)
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const car = {
        model: carData.model,
        dateOfCirculation: carData.dateOfCirculation,
        price: parseFloat(carData.price), 
        brandID: parseInt(carData.brandID) 
      };

      axios.post('https://formation.inow.fr/demo/api/v1/cars', car)
      .then(response => {
        console.log('voiture ajoutée:', response.data);
        navigate('/voitures');
      })
      .catch(error => {
        console.log('Error:', error);
      });
};

  return (
    <Container>
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
            <option value="" disabled>Select a brand</option>
            {brands.map(brand => (
              <option key={brand.id} value={brand.id}>{brand.name}</option>
            ))}
          </Form.Select>
        </Form.Group>
        <Col className="text-center mt-4"> 
          <Button variant="primary" type="submit">
            Ajouter
          </Button>
        </Col>
      </Form>
    </Container>
  )
}

export default CreateVoitureForm