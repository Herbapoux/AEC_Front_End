import React from "react";
import Col from "react-bootstrap/Col";

import vador from "../../img/Vader.jpg";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import ListGroupItem from "react-bootstrap/ListGroupItem";


export class Usages extends React.Component{

    render(){
        return(
                <Col className="img-fluide" xs lg="2" >
                    <Card style={{ width: '18rem' }}>
                        <Card.Img                
                            src = {this.props.src}
                            alt = {this.props.alt}
                            title = {this.props.title}
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
        );
    }
}