import React from 'react';
import './App.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import logoBecflix from '../../img/becflix.png';

import {Catalogue} from "../Catalogue/Catalogue";


function App() {
  return (
      <Container fluid>
        <Row>
          <Col>
            <img src={logoBecflix} alt="BecFlix" width="100px"/>
          </Col>
        </Row>
        <Catalogue/>
      </Container>
  );
}

export default App;