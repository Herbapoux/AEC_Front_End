/**
 * Created by Yannick on 2019-15-04.
 */

//Lire un degré de température. Si la température est comprise entre -40 et -10 écrire « HAAAAAAAAA! Il fait froid». Sinon, écrire « Enfin une belle journée! ».

    //Déclaration des variables
var temperature;

	//Lecture au clavier (l'usager entre une valeur
temperature = Number(prompt("Indiquez la température"));
	
	//Les calculs

	//Les affichages
if(temperature >= -40 && temperature <= -10){
	alert("HAAAAAA! Il fait froid")
}
	else if(temperature < -40){
		alert("Il fait trop froid, il faut déménager!");
	}
	
	else if(temperature >= 40){
		alert("Il fait trop chaud, allez dormir dans votre frigo!")
	}

else{
	alert("Enfin une belle journée!")
}