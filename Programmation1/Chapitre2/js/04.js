/**
 * Created by Yannick on 2019-15-04.
 */

//Lire deux nombres. Vous devez diviser le premier nombre par le deuxième seulement si le deuxième nombre est différent de zéro. Par contre si ce nombre est zéro inscrivez le message suivant :‘Division par zéro interdite.’, si ce nombre n’est pas zéro vous devez afficher le résultat.

    //Déclaration des variables
var nb1;
var nb2;
var resultat;

	//Lecture au clavier (l'usager entre une valeur
nb1 = Number(prompt("Faire une division du premier nombre avec le deuxième. \nVeillez entrer le premier nombre"));
nb2 = Number(prompt("Veillez entrer le deuxième nombre"));
	
	//Les calculs
resultat = nb1 / nb2;

	//Les affichages
if(nb2 != 0){
	alert("Le résulat de la division est de: " + resultat);
}
	else if(nb2 === 0){
		alert("Division par 0 est interdite.");
	}
	
else{
	alert("Calcul impossible")
}