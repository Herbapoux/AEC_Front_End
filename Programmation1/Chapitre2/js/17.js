/**
 * Created by Yannick on 2019-22-04.
 */

//Lire une lettre de l'alphabet. Afficher le mot voyelle (pour : a, e, i, o, u, y) ou le mot consonne (pour les autres) selon la lettre lue. Assurez-vous que l'utilisateur puisse entrer les lettres en minuscules ou en majuscules.


    //Déclaration des variables
var lettre;

	//Lecture au clavier
lettre = prompt("Veuillez entrer une lettre pour déterminer si c'est une voyelle ou une consonne");
  
	//Les calculs

	//Les affichages  
if(lettre.toUpperCase() === "A" || lettre.toUpperCase() === "E" || lettre.toUpperCase() === "I" || lettre.toUpperCase() === "O" || lettre.toUpperCase() === "U" || lettre.toUpperCase() === "Y"){
	alert("Votre lettre est une voyelle");
}


else if(lettre.toUpperCase() === "B" || lettre.toUpperCase() === "C" || lettre.toUpperCase() === "D" || lettre.toUpperCase() === "F" || lettre.toUpperCase() === "G" || lettre.toUpperCase() === "H" || lettre.toUpperCase() === "J" || lettre.toUpperCase() === "K" || lettre.toUpperCase() === "L" || lettre.toUpperCase() === "M" || lettre.toUpperCase() === "N" || lettre.toUpperCase() === "P" || lettre.toUpperCase() === "Q" || lettre.toUpperCase() === "R" || lettre.toUpperCase() === "S" || lettre.toUpperCase() === "T" || lettre.toUpperCase() === "V" || lettre.toUpperCase() === "W" || lettre.toUpperCase() === "X" || lettre.toUpperCase() === "Z"){
		alert("Votre lettre est une consonne");
}

else{
	alert("Il y a une erreur sur l'entrée de votre lettre");
}