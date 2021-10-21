import React from "react";
import auth from "./Auth";
import "../App.css";
import { Container, Row, Col, Card } from "react-bootstrap";

function Home() {
    let user = auth.user;
    return (
        <>
            <Container className="cont_home">
                <Row className="cont_central">
                    <Col xs={12} md={3}>
                        <Row>
                            <Card bg="secondary" text="white" className="pfp_card">
                                <br />
                                <Card.Body>
                                    <Card.Title>
                                        <h4>Nom d'utilisateur: {user.username}</h4>
                                    </Card.Title>
                                    <h5>Prénom: {user.firstname}</h5>
                                    <h5>Nom: {user.lastname}</h5>
                                </Card.Body>
                                <br />
                            </Card>
                        </Row>
                    </Col>
                </Row>
            </Container>
        </>
    );
}

export default Home;
