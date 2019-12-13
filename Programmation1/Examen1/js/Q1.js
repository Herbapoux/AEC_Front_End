/**
 * Created by Yannick on 06-12-2019.
 */

/* 
QUESTION 1 (4 points)

Le prix saisonnier d’un billet pour la ronde est de 50$. Toutefois, il y a des possibilités de rabais pour des inscriptions en groupe :
Aucun rabais pour moins de 10 personnes.
10 personnes et plus, 5% de rabais.
20 personnes et plus, 10% de rabais.
30 personnes et plus, 15% de rabais.
40 personnes et plus, 20% de rabais.

Écrivez un programme qui demande, pour une inscription donnée, le nombre de personnes et affichera le montant de l’inscription à la fin. 
*/

var nbPersonnes;
var montant;
var erreur;

nbPersonnes = Number(prompt("Combien de personnes voulez-vous inscrire pour l'obtention de passes saisonnières de la ronde?"));

if(nbPersonnes > 0 && nbPersonnes < 9){
	montant = 50 * nbPersonnes;
}
else if(nbPersonnes >= 10 && nbPersonnes <= 19){
	montant = 50 * nbPersonnes - (50 * nbPersonnes * .05);
}
else if(nbPersonnes >= 20 && nbPersonnes <= 29){
	montant = 50 * nbPersonnes - (50 * nbPersonnes * .1);
}
else if(nbPersonnes >= 30 && nbPersonnes <= 39){
	montant = 50 * nbPersonnes - (50 * nbPersonnes * .15);
}
else if(nbPersonnes >= 40){
	montant = 50 * nbPersonnes - (50 * nbPersonnes * .2);
}
else{
	erreur = true;
}

//Erreurs et réponses
if(erreur === true){
	alert("Il y une erreur sur le nombre de personnes que vous avez transcrit");
}
else{
	document.write("Le prix de vos billets pour " + nbPersonnes + " personnes, s'élève à " + montant + "$");
}


