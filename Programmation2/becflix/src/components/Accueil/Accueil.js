import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import logoBecflix from '../../img/becflix.png';
import {Catalogue} from "../Catalogue/Catalogue";
import {Connexion} from '../Connexion/Connexion';
import {Deconnexion} from '../Deconnexion/Deconnexion';

export class Accueil extends React.Component{
    constructor(props){
        super(props);

        this.state = {connected: false};
        this.gestionConnexion=this.gestionConnexion.bind(this);
        this.verifierConnexion = this.verifierConnexion.bind(this);
    }

    verifierConnexion(connexion){
        this.setState({connected: connexion});
    }

    gestionConnexion(){
        if (this.state.connected){
            return(
                <Container fluid>
                    <Row>
                        <Col>
                            <img src = {logoBecflix} alt = "Becflix" width = "100px" />
                        </Col>
                        <Col>
                            <Deconnexion onClick = {this.verifierConnexion}/>
                        </Col>
                    </Row>
                    <Catalogue/>
                </Container>
            )
        }
        else{
            return(
                <Connexion onClick={this.verifierConnexion}/>
            )
        }
    }

    render(){
        return (
            <Container fluid>
              {this.gestionConnexion()}
            </Container>
        );
    }
}