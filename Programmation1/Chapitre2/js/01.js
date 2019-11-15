/**
 * Created by Yannick on 2019-15-04.
 */

//Lire deux nombres et afficher le plus grand des deux.

    //Déclaration des variables
var nb1;
var nb2;

//Lecture au clavier (l'usager entre une valeur)
nb1 = Number(prompt("Veuillez entrer le premier nombre"));
nb2 = Number(prompt("Veuille entrer le deuxième nombre"));
	
//Les calculs
if(nb1 > nb2){
	alert("Ceci est le plus grand des deux nombres: " + nb1);
}
	else if(nb1 < nb2){
		alert("Ceci est le plus grand des deux nombres: " + nb2);
	}

else{
	alert("Ces deux nombres sont égaux! " + nb1);
}

//Les affichages