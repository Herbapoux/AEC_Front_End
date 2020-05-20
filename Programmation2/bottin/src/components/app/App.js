import React from 'react';
import './App.css';
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import { Usages } from '../usages/usages';


function App() {
  return (
    <Container fluid>
      <Row>
        <Usages />  
      </Row>
    </Container>
  );
}

export default App;
