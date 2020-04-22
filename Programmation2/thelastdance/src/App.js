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

const imgJoueurs={
  steve: {steveKerrImg},
  micheal: {michaelJordanImg},
  bill: {billWenningtonImg},
  scottie: {scottiePippenImg},
  dennis: {dennisRodmanImg}
};

const netflixLogo = (
  <img
  src ={logo}
  alt ="Netflix"
  height = {longueurLogo}
  with = {longueurLogo}
  />
)
const steveKerr = (
    <img
      src = {imgJoueurs.steve}
      alt = "Steve Kerr"
      height = {longueurJoueurs}
      with = {longueurJoueurs}
    />
);

const michealJordan = (
    <img
      src = {imgJoueurs.micheal}
      alt = "Micheal Jordan"
      height = {longueurJoueurs}
      with = {longueurJoueurs}
    />
);

const billWennington = (
    <img
      src = {imgJoueurs.bill}
      alt = "Bill Wennington"
      height = {longueurJoueurs}
      with = {longueurJoueurs}
    />
);

const scottiePippen = (
    <img
      src = {imgJoueurs.scottie}
      alt = "Scottie Pippen"
      height = {longueurJoueurs}
      with = {longueurJoueurs}
    />
);

const dennisRodman = (
    <img
      src = {imgJoueurs.dennis}
      alt = "Dennis Rodman"
      height = {longueurJoueurs}
      with = {longueurJoueurs}
    />
);

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
      {nomJoueurs[aleatoire]}
    </h2>
  </div>
);

const nomJoueurAffiche = (
  {nomJoueurs}
)

function App() {
  return (
  texteAfficher
  );
}

export default App;
