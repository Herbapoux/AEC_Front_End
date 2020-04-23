import React from 'react';
import logo from './img/netflixLogo.png';
import steveKerrImg from './img/steveKerr.jpg';
import michaelJordanImg from './img/michaelJordan.jpg';
import billWenningtonImg from './img/billWennington.jpg';
import scottiePippenImg from './img/scottiePippen.jpg';
import dennisRodmanImg from './img/dennisRodman.jpg';
import './App.css';

const longueurLogo = "100 px";
const longueurJoueurs = "250 px";
let aleatoire = Math.floor(Math.random()*5);

const nomJoueurs = ["Steve Kerr", "Micheal Jordan", "Bill Wennington", "Scottie Pippen", "Dennis Rodman"];
const imagesJoueurs = [steveKerrImg, michaelJordanImg, billWenningtonImg, scottiePippenImg, dennisRodmanImg];

const netflixLogo = (
  <img
  src ={logo}
  alt ="Netflix"
  height = {longueurLogo}
  with = {longueurLogo}
  />
)

const nomJoueurAffiche =(
  nomJoueurs[aleatoire]
)

const imageJoueurs =(
  <img
    src = {imagesJoueurs[aleatoire]}
    alt = {nomJoueurs[aleatoire]}
    height = {longueurJoueurs}
    with = {longueurJoueurs}
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
    <p>
      Mettant en vedette 
    </p>
    <h2>
      {nomJoueurAffiche}
    </h2>
      {imageJoueurs}
    
  </div>
);

function App() {
  return (
  texteAfficher
  );
}

export default App;
