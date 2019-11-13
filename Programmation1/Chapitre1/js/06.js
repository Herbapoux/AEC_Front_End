/**
 * Created by Yannick on 2019-11-04.
 */

//Faites un programme qui lit le nom d’un article et son prix de détail. Votre programme doit afficher le prix de gros (66% du prix de détail) ainsi que le profit attendu. 

    //Déclaration des variables
var nom
var prixDetails
var prixGros
var profit


	//Lecture au clavier (l'usager entre une valeur)
nom = prompt("Entrez le nom du produit svp");
prixDetails = Number(prompt("Entrez le prix de votre produit svp"));


	//Les calculs

prixGros = prixDetails * 66 / 100;
profit = prixDetails - prixGros;

	//Les affichages

alert(nom + " a un prix de gros de : " + prixGros +"$"+ " et votre profit est de: " + profit + "$");

