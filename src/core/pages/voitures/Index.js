import axios from 'axios';
import React, { useEffect, useState } from 'react'

import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';

import { toast, ToastContainer } from 'react-toastify';

const Voitures = () => {
const [voitures, setVoitures] = useState([])

useEffect(() => {
    axios.get("https://formation.inow.fr/demo/api/v1/cars")
        .then(rep => {
            setVoitures(rep.data)
        })
        .catch(err => console.log(err.message))
    }, []);
    useEffect(() => {
        console.log(voitures); 
    }, [voitures]);

    const deleteCar = (id) => {
        if (window.confirm('Vous êtes sure de vouloir supprimer ?')) {
            axios.delete(`https://formation.inow.fr/demo/api/v1/cars/${id}`)
                .then(() => {
                    setVoitures(prevCars => prevCars.filter(car => car.id !== id));
                    console.log('Car deleted');
                    toast.success('suppression reussi');
                })
                .catch(err => {
                    console.log('Error:', err);
                    toast.error('écheque de suppression');
                });
        }
    };

    return (
        <Container>
            <ToastContainer />
            {voitures.map(voiture => (
                <Card style={{ width: '18rem' }} key={voiture.id}>
                    <Card.Body>
                        <Card.Title>{voiture.brandId}</Card.Title>
                        <Card.Text>
                            {voiture.model}
                        </Card.Text>
                        <Link to={`/voitures/edit/${voiture.id}`}><Button variant="primary" className="me-2">Modifier</Button></Link>
                        <Button variant="danger" onClick={() => deleteCar(voiture.id)}>Supprimer</Button>
                    </Card.Body>
                </Card>
            ))}
        </Container>
    )
}

export default Voitures