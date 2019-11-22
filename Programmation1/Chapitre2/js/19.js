/**
 * Created by Yannick on 2019-22-04.
 */

//Lire le montant de vente et afficher le montant d’escompte correspondant sachant que le taux d’escompte est de 12% et n’est calculé que sur les montants supérieurs ou égaux à $500.00.


    //Déclaration des variables
var montant;
var escompte;

	//Lecture au clavier
montant = Number(prompt("Quel est le montant de votre achat"));
	
	//Les calculs

	//Les affichages  

if(montant >= 500){
	escompte = montant * 12 / 100;
	alert("Vous avez droit à un escompte de: " + escompte + "$");
}

else if(montant < 500 && montant >= 0){
	alert("Vous n'avez pas le droit d'avoir un escompte.");
}

else{
	alert("Il y a une erreur dans l'entrée de votre montant");
}