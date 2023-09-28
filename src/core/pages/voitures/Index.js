import axios from 'axios';
import React, { useEffect, useState } from 'react'

import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const Voitures = () => {
const [voitures, setVoitures] = useState([])

useEffect(() => {
    axios.get("https://formation.inow.fr/demo/api/v1/cars")
        .then(rep => {
            setVoitures(rep.data)
            console.log(voitures)
        })
        .catch(err => console.log(err.message))
    }, []);
    useEffect(() => {
        console.log(voitures); 
    }, [voitures]);

    return (
        <Container>
            {voitures.map(voiture => (
                <Card style={{ width: '18rem' }} key={voiture.id}>
                    <Card.Body>
                        <Card.Title>{voiture.brandId}</Card.Title>
                        <Card.Text>
                            {voiture.model}
                        </Card.Text>
                        <Button variant="primary">Modifier</Button>
                        <Button variant="primary">Supprimer</Button>
                    </Card.Body>
                </Card>
            ))}
        </Container>
    )
}

export default Voitures