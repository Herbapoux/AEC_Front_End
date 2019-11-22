/**
 * Created by Yannick on 2019-22-04.
 */

//Lire une note d’examen et afficher « Échec » si la note est inférieure à 60 et « Bravo » si la note est supérieure ou égale à 60.


    //Déclaration des variables
var note;

	//Lecture au clavier
note = Number(prompt("Entrez votre note pour savoir si c'est un échec ou non"))
	//Les calculs

	//Les affichages  

if(note < 60 && note >= 0){
	alert("Échec");
}

else if(note >= 60 && note <= 100){
	alert("Bravo!");
}

else{
	alert("Il y a une erreur sur l'entrée de votre note");
}