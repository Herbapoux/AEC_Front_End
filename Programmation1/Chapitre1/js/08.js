/**
 * Created by Yannick on 2019-11-04.
 */

//Programmer un convertisseur Degré Celsius -> Fharenheit. 

    //Déclaration des variables
var fahrenheit;
var celsius;



	//Lecture au clavier (l'usager entre une valeur)
fahrenheit = Number(prompt("Entrez la température en degré fahrenheit que vous voulez convertir en celsius"));

	//Les calculs

celsius = (fahrenheit - 32) * 5 / 9

	//Les affichages

alert("Il fait " + celsius + " degrés celsius.")
