/**
 * Created by Yannick on 2019-18-04.
 */

//10.    Lire un nombre entier au clavier et afficher le nom du mois correspondant. Si le nombre saisi ne correspond pas à un mois, affichez le message suivant : « Mois invalide ».


    //Déclaration des variables
var mois;

	//Lecture au clavier
mois = Number(prompt("Entrez un nombre entier pour connaitre le mois associé"));
	
	//Les calculs

	//Les affichages

if(mois === 1){
	alert("Ceci est le mois de janvier");
}
else if(mois === 2){
	alert("Ceci est le mois de février");
}
else if(mois === 3){
	alert("Ceci est le mois de mars");
}
else if(mois === 4){
	alert("Ceci est le mois d'avril");
}
else if(mois === 5){
	alert("Ceci est le mois de mai");
}
else if(mois === 6){
	alert("Ceci est le mois de juin");
}
else if(mois === 7){
	alert("Ceci est le mois de juillet");
}
else if(mois === 8){
	alert("Ceci est le mois d'août");
}
else if(mois === 9){
	alert("Ceci est le mois de septembre");
}
else if(mois === 10){
	alert("Ceci est le mois de octobre");
}
else if(mois === 11){
	alert("Ceci est le mois de novembre");
}
else if(mois === 12){
	alert("Ceci est le mois de décembre");
}
else{
	alert("« Mois invalide »");
}
