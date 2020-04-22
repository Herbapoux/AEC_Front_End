import React from 'react';
import logo from './img/netflixLogo.png';
import './App.css';

const netflixLogo = (
  <img
  src ={logo}
  alt ="Netflix"
  />
)

const texteAfficher = (
  <div>
    <h1>
      THE LAST DANCE
    </h1>
    <p>
      Une production de
    </p>
    {netflixLogo}
  </div>

);

function App() {
  return (
  texteAfficher
  );
}

export default App;
