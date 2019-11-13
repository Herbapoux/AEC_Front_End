/**
 * Created by Yannick on 2019-11-04.
 */

//Programmer un convertisseur Degré Celsius -> Fharenheit. 

    //Déclaration des variables
var celsius;
var fahrenheit;


	//Lecture au clavier (l'usager entre une valeur)
celsius = Number(prompt("Entrez la température en celsius que vous voulez convertir en fahrenheit"));

	//Les calculs

fahrenheit = celsius * 9 / 5 + 32

	//Les affichages

alert("Il fait " + fahrenheit + " degrés fahrenheit.")
