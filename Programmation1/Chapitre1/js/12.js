/**
 * Created by Yannick on 2019-11-05.
 */

//Écrire un algorithme qui calcule la note finale d’un étudiant sur 100%. Cette note est dérivée des trois notes suivantes : note à l’examen de mi-session qui compte pour 30% de la note finale, note de l’examen de fin session qui compte pour 50% et la note de laboratoire qui compte pour 20%.



    //Déclaration des variables
var finale;
var miSession;
var finSession;
var laboratoire;

	//Lecture au clavier (l'usager entre une valeur)
miSession = Number(prompt("Entrez votre notre de l'examen de mi-session svp"));
finSession = Number(prompt("Veuillez entrer la note de votre examen de fin de session svp"));
laboratoire = Number(prompt("Veuille entrer la note de votre laboratoire svp"));

	//Les calculs
finale = (miSession * 30 /100) + (finSession * 50 / 100) + (laboratoire * 20 / 100);




	//Les affichages
alert("Votre note finale est de: " + finale);