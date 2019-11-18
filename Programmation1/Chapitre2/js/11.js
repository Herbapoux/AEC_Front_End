/**
 * Created by Yannick on 2019-18-04.
 */

/**11.Lire une lettre au clavier.
Si la lettre est 'w', écrire Avancer.
Si la lettre est 'a', écrire Gauche.
Ajouter 's' et 'd'.
Si c'est autre chose, écrire un message d'erreur.*/



    //Déclaration des variables
var lettre;

	//Lecture au clavier
lettre = prompt(alert("Veillez écrire une lettre au clavier"));

	//Les calculs

	//Les affichages
if(lettre === "w" || lettre === "W"){
	alert("Avancez");
}
else if(lettre === "a" || lettre === "A"){
	alert("Gauche");
}
else if(lettre === "s" || lettre === "S"){
	alert("Reculez");
}
else if(lettre === "d" || lettre === "D"){
	alert("Droite");
}
else{
	alert("Erreur");
}

