import React from "react";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

import vador from "../../img/Vader.jpg";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import ListGroupItem from "react-bootstrap/ListGroupItem";

let image = {
    src: vador,
    alt: "Vador",
    title: "Vador"
};

export class Usages extends React.Component{
    render(){
        return(
            <Row>
                <Col>
                    <Card style={{ width: '18rem' }}>
                        <Card.Img                
                            src = {image.src}
                            alt = {image.alt}
                            title = {image.title}
                            width = "200px"
                            className = "img-fluid"
                        />
                        <Card.Body>
                            <Card.Title>Nom</Card.Title>
                            <Card.Text>
                            Profession
                            </Card.Text>
                        </Card.Body>
                        <ListGroup className="list-group-flush">
                            <ListGroupItem>Courriel</ListGroupItem>
                            <ListGroupItem>Téléphone</ListGroupItem>
                            <ListGroupItem>Adresse</ListGroupItem>
                        </ListGroup>
                    </Card>
                </Col>
            </Row>
        );
    }
}