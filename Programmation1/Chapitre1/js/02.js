/**
 * Created by Yannick on 2019-11-04.
 */

//Calculer la surface d’un rectangle dont la longueur et la largeur sont lues à l’écran. 

    //Déclaration des variables
var longueur;
var largeur;
var surface;

	//Lecture au clavier (l'usager entre une valeur)
longueur = Number(prompt("Veuillez entrer la longueur du triangle svp: "));
largeur = Number(prompt("Veuillez entrer la largeur du triangle svp: "));

	//Les calculs
surface = largeur*longueur;

	//Les affichages

alert("La surface du triangle est: " + surface);