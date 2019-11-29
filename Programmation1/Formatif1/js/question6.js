/**
 * Created by Yannick on 2019-29-04.
 */

/*
Vous devez compléter un programme qui permet de calculer la facture pour l’achat d’un robot imprimable en 3 dimensions.

L’usager doit sélectionner le contrôleur
55$ pour un RaspBerry Pi
15$ pour un Raspberry Pi Zero

L’usager doit décider du nombre de moteurs entre 2 et 24.
Un moteur coûte 5$

L’usager décide s’il veut une caméra USB ou non
La caméra coûte 35$

L’usager décide s’il veut une matrice de LEDS pour les yeux
La matrice coûte 10$ pour les deux yeux.

Il faut ensuite ajouter 20$ pour le filament 3D.
Il faut ajouter 15$ pour la batterie USB.


RasPiBot aimerait que votre programme affiche 

un résumé de l’achat 
ex: “Robot avec Raspberry Pi Zero, 10 moteurs, pas de caméra, pas de matrice de LEDS.”
le prix 
le prix avec la livraison de 15%.
*/

var choixRaspberry;
var nbMoteur;
var cameraUSB;
var matrice;
var prix = 35;
var livraison;

choixRaspberry = prompt("Veuillez choisir entre les deux contrôleurs: \n1. RaspBerry Pi: 55$ \n2. RaspBerry Pi Zero: 15$");
nbMoteur = Number(prompt("Veuillez indiquer le nombre de moteurs nécessaire entre 2 et 24 au coût de 5$ chaque."));
cameraUSB = prompt("Est-ce que oui ou non vous avez besoin d'une caméra USB au coût de 35$?");
matrice = prompt("Est-ce que oui ou non vous avez besoin d'une matrice LEDS pour les yeux au coût de 10$?");

// Raspberry

if(choixRaspberry === "1" || choixRaspberry.toUpperCase() === "RASPBERRY PI ZERO"){
	choixRaspberry = "Raspberry Pi";
	prix += 55;
}
else if(choixRaspberry === "2" || choixRaspberry.toUpperCase() === "RASPBERRY PI ZERO"){
	choixRaspberry = "Raspberry Pi Zero";
	prix += 15;
}

else{
	choixRaspberry = "erreur";
 }

// Caméra

if(cameraUSB.toUpperCase() === "OUI"){
	cameraUSB = "Caméra USB";
	prix += 35;
}
else if(cameraUSB.toUpperCase() === "NON"){
	cameraUSB = "pas de caméra";
}
else{
	choixRaspberry = "erreur";
 }

// Matrice

if(matrice.toUpperCase() === "OUI"){
	matrice = "Matrice de LEDS";
	prix += 10;
}
else if(matrice.toUpperCase() === "NON"){
	matrice = "pas de matrice de LEDS"
}
else{
	matrice = "erreur";
}

// moteur

if(nbMoteur >= 2 && nbMoteur <= 24){
	prix += 5 * nbMoteur;
}
else{
	alert("Erreur");
}

// Livraison

livraison = prix + prix * 0.15;

//Résumé de l'achat

alert("Votre résumé de l'achat: " + choixRaspberry + ", " + nbMoteur + " moteurs, " + cameraUSB + ", "  + matrice + ", " + "filament 3d" + " et " + "batterie USB" + "\nLe prix déboursé: " + prix + "$" + "\nLe prix avec la livraison: " + livraison + "$");



