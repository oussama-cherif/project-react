import axios from 'axios';
import React, { useEffect, useState, useContext } from 'react'
import { UserContext } from '../../context/UserContext';

import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Link } from 'react-router-dom';

import { toast, ToastContainer } from 'react-toastify';

const Voitures = () => {
    const [user] = useContext(UserContext)
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
            <Row>
                {voitures.map(voiture => (
                    <Col md={4} className="mb-4" key={voiture.id}>  
                        <Card style={{ width: '18rem' }}>
                            <Card.Body>
                                <Card.Title>{voiture.brandId}</Card.Title>
                                <Card>
                                    <Card.Body>
                                        <h5 className="card-title">Informations sur la voiture</h5>
                                        <ul>
                                            <li><strong>Modèle:</strong> {voiture.model}</li>
                                            <li><strong>Prix:</strong> {voiture.price}</li>
                                            <li><strong>Date de circulation:</strong> {voiture.dateOfCirculation}</li>
                                            <li><strong>Marque:</strong> {voiture.brand}</li>
                                        </ul>
                                    </Card.Body>
                                </Card>
                                {user ? <>
                                    <Link to={`/voitures/edit/${voiture.id}`}><Button variant="primary" className="me-2">Modifier</Button></Link>
                                    <Button variant="danger" onClick={() => deleteCar(voiture.id)}>Supprimer</Button>
                                </> : null}
                            </Card.Body>
                        </Card>
                    </Col>
                ))}
            </Row>
        </Container>
    );
}

export default Voitures




/*
return (
        <Container>
            <ToastContainer />
            <Row>
                {voitures.map(voiture => (
                    <Col md={4} className="mb-4" key={voiture.id}>  
                        <Card style={{ width: '18rem' }}>
                            <Card.Body>
                                <Card.Title>{voiture.brandId}</Card.Title>
                                <Card key={voiture.id} style={{ width: '18rem' }}>
                                    <Card.Body>
                                        <Card.Title>Nom du modèle : {voiture.model}</Card.Title>
                                        <Card.Text>Année : {voiture.dateOfCirculation}</Card.Text>
                                        <Card.Text>Prix : {voiture.price}$</Card.Text>
                                    </Card.Body>
                                </Card>
                                {user ? <>
                                    <Link to={`/voitures/edit/${voiture.id}`}><Button variant="primary" className="me-2">Modifier</Button></Link>
                                    <Button variant="danger" onClick={() => deleteCar(voiture.id)}>Supprimer</Button>
                                </> : null}
                            </Card.Body>
                        </Card>
                    </Col>
                ))}
            </Row>
        </Container>
    );*/