/**
 * Created by Yannick on 06-12-2019.
 */

/* 
QUESTION 3 (6 points)            

Vous devez compléter un programme qui permet de calculer une facture pour l’achat d’une grande Pizza.

	1. Le prix de base de la Pizza au fromage est de 10$.
	2. Si on veut des légumes, il faut ajouter 5$ au prix initial.
	3. Si on veut du pepperoni, il faut ajouter 8$ au prix initial.
	4. Si on veut de la sauce, il faut ajouter 1$ par personnes.
	5. Le TPS s’élève à 5% du prix sans les taxes.
	6. Le TVQ s’élève à 9,975% du prix sans les taxes.

Produisez une facture qui résume l’achat, le prix avant et après les taxes.
*/

var legumes;
var pepperoni;
var nbSauce;
var taxes;
var prix = 10;
var erreur;

legumes = prompt("Vous avez sélectionner une grande pizza au montant de 10$. \nPour 5$ de plus, désirez-vous ajouter des légumes? Répondre par oui ou non svp");
pepperoni = prompt("Pour 8$ de plus, désirez-vous ajouter du pepperoni? Répondre par oui ou non svp");
nbSauce = Number(prompt("Pour seulement 1$ de plus par personne, vous pouvez ajouter de la sauce. Inscrire le nombre de personnes qui en désire. Indiquez 0 si vous ne voulez pas d'ajout."));


//Légumes
if(legumes.toUpperCase() === "OUI" || legumes.toUpperCase() === "O"){
	prix += 5;
	legumes = "+ légumes,";
}
else if(legumes.toLowerCase() === "NON" || legumes.toUpperCase() === "N"){
	legumes = " sans légumes,";
}
else{
	erreur = true;
}

//Pepperoni		
if(pepperoni.toUpperCase() === "OUI" || pepperoni.toUpperCase() === "O"){
	prix += 8;
	pepperoni = " + pepperoni, +";
}
else if(pepperoni.toLowerCase() === "NON" || pepperoni.toUpperCase() === "N"){
	pepperoni = " sans pepperoni, +";
}
else{
	erreur = true;
}

//Sauce
if(nbSauce >= 0){
	prix += nbSauce;
}
else{
	erreur = true;
}

//Taxes arrondies 
taxes = (prix + prix * .05 + prix * .09975).toFixed(2);

//Erreurs et réponses
if(erreur === true){
	document.write("Il y a une erreur sur votre commande");
}
else{
	alert("Voici le résumé de votre commande: \nUne large pizza; " + legumes + pepperoni + " " + nbSauce + " sauce(s)" + "\nPrix avant taxes: " + prix + "$" + "\nPrix avec taxes: " + taxes + "$");
}







