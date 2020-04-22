import React from 'react';
import ReactDOM from 'react-dom';
import logo from './MoiCanon.jpg';
import './index.css';
import app from './App';
import * as serviceWorker from './serviceWorker';

const presentation=(
  <div>
    <h1>
      Yannick Poulin
    </h1>
    <p className="rouge">
      Je suis en transition scolaire et j'étudie présentement en Développement WEB (Front End). J'espère un jours trouver un boulot que je vais aimer avec une belle ambiance de travail. 
    </p>
    <img src={logo} className="App-logo" alt="logo" />
    <br></br>
    <a
      href="https://github.com/Herbapoux/AEC_Front_End"
      >
      Mon github!
    </a>
    <ol>
      <li>
        Jeux vidéo
      </li>
      <li>
        Randonnées
      </li>
      <li>
        Lecture
      </li>
    </ol>
  </div>
);

ReactDOM.render(
  presentation,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
