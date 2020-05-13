import React from 'react';
import steveKerrImg from './img/steveKerr.jpg';
import michaelJordanImg from './img/michaelJordan.jpg';
import billWenningtonImg from './img/billWennington.jpg';
import scottiePippenImg from './img/scottiePippen.jpg';
import dennisRodmanImg from './img/dennisRodman.jpg';
import './App.css';
import logo from './img/netflixLogo.png';

const longueurLogo = "100 px";
const longueurJoueurs = "250 px";

let aleatoire = Math.floor(Math.random()*5);
const netflixLogo = (
  <img
  src ={logo}
  alt ="Netflix"
  height = {longueurLogo}
  />
)
let imageJoueurs;
const nomJoueurs = [
  "Steve Kerr", 
  "Micheal Jordan", 
  "Bill Wennington", 
  "Scottie Pippen", 
  "Dennis Rodman"
];

const steve = 
<img 
  id="imgJoueur" 
  src={steveKerrImg} 
  height={longueurJoueurs} 
  alt= "Steve Kerr"
/>;

const micheal = 
<img 
  id="imgJoueur" 
  src={michaelJordanImg} 
  height={longueurJoueurs} 
  alt= "Micheal Jordan"
/>;

const bill = 
<img 
  id="imgJoueur" 
  src={billWenningtonImg} 
  height={longueurJoueurs} 
  alt= "Bill Wennington"
/>;

const scottie = 
  <img 
  id="imgJoueur" 
  src={scottiePippenImg} 
  height={longueurJoueurs} 
  alt= "Scottie Pippen"
/>;

const dennis = 
  <img 
  id="imgJoueur"
  src={dennisRodmanImg} 
  height={longueurJoueurs} 
  alt= "Dennis Rodman"
/>;

// changement des noms avec l'image
if (nomJoueurs[aleatoire] === "Steve Kerr"){
  imageJoueurs = steve;
}
else if (nomJoueurs[aleatoire] === "Micheal Jordan"){
  imageJoueurs = micheal;
}
else if (nomJoueurs[aleatoire] === "Bill Wennington"){
  imageJoueurs = bill;
}
else if (nomJoueurs[aleatoire] === "Scottie Pippen"){
  imageJoueurs = scottie;
}
else if (nomJoueurs[aleatoire] === "Dennis Rodman"){
  imageJoueurs = dennis;
}

const nomJoueurAffiche =(
  nomJoueurs[aleatoire]
)

//Création de la liste de joueur MAP à faire afficher
const partants = nomJoueurs.map((element,i) => <li key={"element"+i}>{element}</li>);

//Création de la liste de joueurs && à faire afficher
const partants2 = (
  <ul id="partants2">
    {imageJoueurs !== steve && <li>Steve</li>}
    {imageJoueurs !== micheal && <li>Micheal</li>}
    {imageJoueurs !== bill && <li>Bill</li>}
    {imageJoueurs !== scottie && <li>Scottie</li>}
    {imageJoueurs !== dennis && <li>Dennis</li>}
  </ul>
);

// Bouton évènement pour changer de joueur
//const buttonChangerjoueur

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
    <h3>
      Les 5 partants affichés avec Map()
    </h3>
    <ul>
      {partants}
    </ul>
    <h3>
      Les 4 partants affichés avec &&
    </h3>
    {partants2}
  </div>
);

function App() {
  return (
  texteAfficher
  );
}

export default App;
