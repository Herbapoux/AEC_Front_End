/**
 * Created by Yannick on 2019-22-04.
 */

//15. Calculer et afficher la surface d'un rectangle pour seulement ceux ayant un périmètre d'au moins 100.

    //Déclaration des variables
var coteA;
var coteB;
var coteC;
var demiPerimetre;
var surface;

	//Lecture au clavier
coteA = Number(prompt("Pour connaitre la surface d'un triangle avec un périmètre de 100 et plus veillez entrez la longueur du côté A"));
coteB = Number(prompt("Pour connaitre la surface d'un triangle avec un périmètre de 100 et plus veillez entrez la longueur du côté B"));
coteC = Number(prompt("Pour connaitre la surface d'un triangle avec un périmètre de 100 et plus veillez entrez la longueur du côté C"));
  
	//Les calculs
demiPerimetre = (coteA + coteB + coteC) / 2;

	//Les affichages  
if(coteA + coteB + coteC <= 100){
	alert("Le paramètre du triangle est plus petit que 100");
}

else if(coteA + coteB + coteC >= 100){
	surface = Math.sqrt((demiPerimetre*(demiPerimetre - coteA) * (demiPerimetre - coteB) * (demiPerimetre - coteC)));
		alert("La surface de votre triangle est de: " + surface);
}
	
else{
	alert("Il y a une erreur sur l'entrée de vos valeur");
}
