/**
 * Created by Yannick on 2019-11-04.
 */

//Lire le nom et l’âge d’un individu, puis convertir son âge en jours (approximatif). Imprimer un message incluant son nom pour l’informer du nombre de jours vécus. 

    //Déclaration des variables
var nom;
var age;
var jours;


	//Lecture au clavier (l'usager entre une valeur)
nom = prompt("Entrez votre nom svp");
age = Number(prompt("Entrez votre âge svp"));


	//Les calculs

jours = age * 365;

	//Les affichages

alert(nom + ", vous avez vécu plus de " + jours + " journées!");
