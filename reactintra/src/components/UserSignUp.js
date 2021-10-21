import axios from "axios";
import React from "react";
import auth from "./Auth";
import { useState } from "react";
import { useFormFields } from "../lib/hooksLib";
import { useHistory } from "react-router-dom";
import { Container, Form } from "react-bootstrap";

const UserSignUp = () => {
  let history = useHistory();

  const [errorMessage, setErrorMessage] = useState("");

  const [fields, handleFieldChange] = useFormFields({
    username: "",
    password: "",
    firstname: "",
    lastname: "",
  });

  function onCreatePost(e) {
    e.preventDefault();
    if (!fields.username.startsWith("U")) {
      setErrorMessage("Le nom d'utilisateur doit commencer par 'U'.");
      return;
    }

    axios
      .post("http://localhost:9090/save/user", fields)
      .then((response) => {
        auth.login(() => {
          history.push({
            //pathname: `/home/${response.data.username}`,
            pathname: `/userList`,
            state: response.data,
          });
        }, response.data);
      })
      .catch((error) => {
        setErrorMessage("Le nom d'utilisateur existe déjà.");
      });
  }

  return (
    <Form onSubmit={(e) => onCreatePost(e)}>
      <Container className="cont_inputs">
        <Form.Group controlId="username">
          <Form.Label className="discret mb-0">
            Veuillez commencez votre nom d'utilisateur par "E"
          </Form.Label>
          <Form.Control
            value={fields.username}
            onChange={handleFieldChange}
            type="text"
            placeholder="Entrer votre nom d'utilisateur"
            className="input_form"
            required
          />
        </Form.Group>
        <Form.Group controlId="password">
          <Form.Control
            value={fields.password}
            onChange={handleFieldChange}
            type="password"
            placeholder="Entrer votre mot de passe"
            className="input_form"
            required
          />
        </Form.Group>
        <Form.Group controlId="firstname">
          <Form.Control
            value={fields.firstname}
            onChange={handleFieldChange}
            type="text"
            placeholder="Entrer votre prénom"
            className="input_form"
            required
          />
        </Form.Group>
        <Form.Group controlId="lastname">
          <Form.Control
            value={fields.lastname}
            onChange={handleFieldChange}
            type="text"
            placeholder="Entrer votre nom"
            className="input_form"
            required
          />
        </Form.Group>
        <Container className="cont_btn">
          <p>{errorMessage}</p>
          <button className="btn_submit">Confirmer</button>
        </Container>
      </Container>
    </Form>
  );
};

export default UserSignUp;
