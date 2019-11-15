/**
 * Created by Yannick on 2019-15-04.
 */

//Lire un nombre au clavier. Afficher la catégorie (Positif, Négatif ou Zéro à l’écran)

    //Déclaration des variables
var nb;

	//Lecture au clavier (l'usager entre une valeur
nb = Number(prompt("Inscrire un nombre"));
	
	//Les calculs

	//Les affichages
if(nb > 0){
	alert("Vous avez un nombre positif");
}
	else if(nb < 0){
		alert("Vous avez un nombre négatif");
	}
	else if(nb === 0){
		alert("Vous avec inscrit 0");
	}		  
else{
	alert("Erreur sur le nombre transcrit");
}