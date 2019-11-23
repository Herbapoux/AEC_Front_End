/**
 * Created by Yannick on 2019-22-04.
 */

/**Calculer et afficher l’impôt provincial à charger selon le revenu imposable : 
revenu > 0 et $7000.00 inclus : 16% du revenu imposable
> 7000 et $14000.00 inclus : $1120 + 19.5% du reste
>14000 et $23000.00 inclus : $2485 + 21.5% du reste
>23000 et $50000.00 inclus : $4420 + 24.5% du reste
>50000 et + $11035 + 26% du reste.
*/


    //Déclaration des variables
var revenu;
var impot;

	//Lecture au clavier
revenu = Number(prompt("Quel est votre revenu pour connaitre le taux d'imposition provincial à payer"));
	
	//Les calculs

	//Les affichages  

if(revenu > 0 && revenu <= 7000){
	impot = revenu * 16 / 100;
	alert("L'impôt provincial à payer est de: " + impot + "$");
}

else if(revenu > 7000 && revenu <= 14000){
	impot = 1120 + (revenu * 19.5 / 100);
	alert("L'impôt provincial à payer est de: " + impot + "$");
}

else if(revenu > 14000 && revenu <= 23000){
	impot = 2485 + (revenu * 21.5 / 100);
	alert("L'impôt provincial à payer est de: " + impot + "$");
}

else if(revenu > 23000 && revenu <= 50000){
	impot = 4420 + (revenu * 24.5 / 100);
	alert("L'impôt provincial à payer est de: " + impot + "$");
}

else if(revenu > 50000){
	impot = 11035 + (revenu * 26 / 100);
	alert("L'impôt provincial à payer est de: " + impot + "$");
}

else{
	alert("Il y a une erreur dans l'entrée de votre revenu");
}