/**
 * Created by Yannick on 2019-15-04.
 */

//Un marchand décide d’accorder une réduction de 15% à tout acheteur, si le montant total de ses achats est plus grand que 200.00$. Écrire un algorithme qui permet de calculer et d’afficher la réduction que chaque acheteur a droit, connaissant le montant total des achats.

    //Déclaration des variables
var montantTotal;
var reduction;

	//Lecture au clavier (l'usager entre une valeur)
montantTotal = Number(prompt("Veuillez inscrire le montant total de vos achats pour savoir si vous avez le droit à une réduction et, si oui, d'en connaitre sa valeur"));
	
	//Les calculs
reduction = montantTotal * 15 / 100;

if(montantTotal > 200){
	alert("Vous avez droit à une réduction de: " + reduction);
}
	
else{
	alert("Vous n'avez pas de réduction si vous achetez pour 200$ et moins.")
}

	//Les affichages