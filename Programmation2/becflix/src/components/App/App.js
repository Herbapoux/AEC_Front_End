import React from 'react';
import './App.css';
import Container from 'react-bootstrap/Container';

import {TvShow} from "../TvShow/TvShow";
import {Catalogue} from "../Catalogue/Catalogue";


function App() {
  return (
    <div>
      <Container className="container-fluide">
        <TvShow/>
        <Catalogue/>
      </Container>
    </div>
  );
}

export default App;