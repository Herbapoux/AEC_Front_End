/**
 * Created by Yannick on 2019-18-04.
 */

/**Calculer le prix des assurances pour un véhicule. 


Pour un garçon entre 16 et 25 ans, le prix des assurances est de 5 % de la valeur du véhicule. 


S’il est plus vieux, le taux sera de 3 %.
 
Pour une fille entre 16 et 25 ans, le taux est de 3 % et de 2% pour une fille plus âgée.
*/

    //Déclaration des variables
var prixVehicule;
var age;
var sexe;
var prixAssurance;

	//Lecture au clavier
prixVehicule = Number(prompt("Veuillez entrer le prix du véhicule"));
age = Number(prompt("Veillez entrer votre âge"));
sexe = prompt("Êtes-vous un garçon ou une fille?");

	//Les calculs

	//Les affichages
if(sexe === "garçon"){
	if(age >= 16 && age <= 25){
		prixAssurance = prixVehicule * 5 / 100;
		alert("Le prix des assurances est de: " + prixAssurance + "$")
	}
	else if(age > 25){
		prixAssurance = prixVehicule * 3 / 100;
		alert("Le prix des assurances est de: " + prixAssurance + "$")
	}
	else{
		alert("Erreur");
	}
}
else if(sexe === "fille"){
	if(age >= 16 && age <= 25){
		prixAssurance = prixVehicule * 3 / 100;
		alert("Le prix des assurances est de: " + prixAssurance + "$")
	}
	else if(age > 25){
		prixAssurance = prixVehicule * 2 / 100;
		alert("Le prix des assurances est de: " + prixAssurance + "$")
	}
	else{
		alert("Erreur");
	}
}
else{
	alert("erreur");
}

