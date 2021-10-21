import React from 'react'
import { useHistory } from "react-router";
import { Container, Form } from "react-bootstrap";
import { useFormFields } from "../lib/hooksLib";
import auth from "./Auth";
import { useState } from "react";
import axios from "axios";

const UserLogin = () => {
    let history = useHistory();

    const [errorMessage, setErrorMessage] = useState("");

    const [fields, handleFieldChange] = useFormFields({
        username: "",
        password: "",
    });

    /*function isLoginExists(e) {
        e.preventDefault();
        axios
            .get(
                `http://localhost:9090/check/if/user/exist/${fields.username}/${fields.password}`
            )
            .then((response) => {return response.data})
    }*/


    function onCreatePost(e) {
        //let isValid = isLoginExists(e)
        e.preventDefault();
        //console.log(isValid)
            axios
            .get(
                `http://localhost:9090/login/user/${fields.username}/${fields.password}`
            )
            .then((response) => {
                auth.login(() => {
                    history.push({
                        pathname: `/home/${response.data.username}`,
                        state: response.data,
                    });
                }, response.data);
            }).catch((error) => {
                setErrorMessage("Erreur lors de la validation");
              });
    }


    return (
        <Container>
            <Form onSubmit={(e) => onCreatePost(e)} >
                <Form.Label className="discret mb-0">
                    Veuillez rentrez vos informations d'utilisations
                </Form.Label>
                <Form.Group controlId="username">
                    <Form.Control
                        value={fields.username}
                        onChange={handleFieldChange}
                        type="text"
                        placeholder="Entrer votre username"
                        required
                    />
                </Form.Group>
                <Form.Group controlId="password">
                    <Form.Control
                        value={fields.password}
                        onChange={handleFieldChange}
                        type="password"
                        placeholder="Entrer votre mot de passe"
                        required
                    />
                </Form.Group>
                <Container className="cont_btn">
                    <p>{errorMessage}</p>
                    <button className="btn_submit">Confirmer</button>
                </Container>
            </Form>
        </Container>
    )
}

export default UserLogin
