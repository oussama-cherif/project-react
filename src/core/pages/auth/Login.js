import React, { useContext, useState } from "react";
import { Button, Form, Alert } from "react-bootstrap";
import { useNavigate } from "react-router";
import InputMail from "./InputMail";
import { UserContext } from "../../context/UserContext";

const Login = () => {
    const [userLog, setUserLog] = useState({ email: '', password: '' });
    const [user, setUser] = useContext(UserContext);
    const [errorMessage, setErrorMessage] = useState('');
    const navigate = useNavigate();

    const submit = (ev) => {
        ev.preventDefault();

         /*const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*]).{6,}$/;*/
         const passwordRegex = /$/

        if (!passwordRegex.test(userLog.password)) {
            setErrorMessage('Le mot de passe doit contenir au moins 6 caractères, une majuscule, une minuscule, un chiffre et un caractère spécial.');
        } else {
            let u = { mail: userLog.email };
            setUser(u);
            sessionStorage.setItem('USER', JSON.stringify(u))
            console.log(user)
            navigate("/")
        }
    }

    const changeFormField = (ev) => {
        const obj = { ...userLog };
        obj[ev.target.name] = ev.target.value;
        setUserLog(obj);
        setErrorMessage('');
    }

    return (
        <div>
            <h1>Connexion</h1>
            {errorMessage && <Alert variant="danger">{errorMessage}</Alert>}
            <Form noValidate onSubmit={submit}>
                <InputMail label="Login" placeholder="Votre login" onChange={changeFormField} name="email" />
                <Form.Group>
                    <Form.Label>Mot de passe</Form.Label>
                    <Form.Control name="password" type="password" onChange={changeFormField} />
                </Form.Group>
                <Button variant="primary" type="submit">Se connecter</Button>
            </Form>
        </div>
    )
}

export default Login;
