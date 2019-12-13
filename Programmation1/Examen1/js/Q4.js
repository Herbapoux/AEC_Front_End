/**
 * Created by Yannick on 06-12-2019.
 */

/* 
QUESTION 4 (6 points)

Vous devez compléter un programme qui permet de calculer l’aire de formes.
En entrée, l'utilisateur doit entrer la lettre correspondant au type de figure demandé:
- "O" pour cercle : PI * rayon2
- "R" pour rectangle : longueur * largeur
- "T" pour triangle rectangle : (longueur * largeur) / 2
- "C" pour carré : côté2

L’utilisateur doit pouvoir entrer son choix en lettres minuscules ou en majuscules. 

En fonction de la lettre saisie par le client, votre programme doit demander les renseignements nécessaires pour le calcul de l’aire. 


Une fois les informations saisies par l'utilisateur, votre programme doit afficher le type sélectionné ainsi que le calcul de l'aire.
*/

var choix;
var rayon;
var longueur;
var largeur;
var cote;
var air;
var erreur;

choix = prompt("Veuillez choisir une des lettres suivantes pour connaitre l'air de la forme correspondante. \nO pour le cercle \nR pour le rectangle \nT pour le triangle rectangle \nC pour le carré");

//Cercle
if(choix.toUpperCase() === "O"){
	rayon = Number(prompt("Veuillez entrer le rayon de votre cercle"));
	air = Math.PI * (rayon * rayon);
	choix = "cercle";
}

//Rectangle
else if(choix.toUpperCase() === "R"){
	longueur = Number(prompt("Veuillez entrer la longueur de votre rectangle"));
	largeur = Number(prompt("Veuille entrer la largeur de votre rectangle"));
	air = longueur * largeur;
	choix = "rectangle";
}

//Triangle rectangle
else if(choix.toUpperCase() === "T"){
	longueur = Number(prompt("Veuillez entrer la longueur de votre triangle rectangle"));
	largeur = Number(prompt("Veuille entrer la largeur de votre triangle rectangle"));
	air = (longueur * largeur) / 2;
	choix = "triangle rectangle";
}

//Carré
else if(choix.toUpperCase() === "C"){
	cote = Number(prompt("Veuillez entrer la dimension d'un des côtés de votre carré"));
	air = cote * cote;
	choix = "carré";
}
else{
	erreur = true;
}

//Erreurs et réponses
if(erreur === true){
	alert("Vous avez mal entrer votre choix. Veuillez recommencer svp");
}
else if(rayon >= 0 || rayon < 0 || longueur >= 0 || longueur < 0 || largeur >= 0 || largeur < 0 || cote >= 0 || cote < 0){
	alert("L'air de votre " + choix + " est de: " + air);
}
else{
	alert("Vous avez mal entré la valeur");
}


