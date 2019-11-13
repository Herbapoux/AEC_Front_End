/**
 * Created by Yannick on 2019-11-04.
 */

//Convertir un nombre de gallons en litres. 1 gal = 4.55 litres 

    //Déclaration des variables
var nombre;
var resultat;

	//Lecture au clavier (l'usager entre une valeur)
nombre = Number(prompt("Entrez le nombre de gallon pour connaitre son équivalent en litre svp: "));

	//Les calculs

resultat = nombre * 4.55;

	//Les affichages

alert("Vous avez " + resultat + " litres");

