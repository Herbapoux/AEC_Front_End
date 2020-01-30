/**
 * Created by Yannick on 28-12-2019. Chapitre 6.
 */

/* 
Question 15:
Lire 2 valeurs dans un tableau. Inverser ces deux valeurs.
*/


var valeur = [];
var valeur1;
var valeur2;
var temp;

for(var i=0; i<12; i++){
	valeur[i] = Math.floor(Math.random()*10);
}

document.write(valeur + "<br>");

valeur1 = Number(prompt("Quel indice voulez-vous échanger entre 0 et 11?"));
valeur2 = Number(prompt("Quel est le deuxième indice voulez-vous échanger entre 0 et 11?"))

temp = valeur[valeur1];
valeur[valeur1] = valeur[valeur2];
valeur[valeur2] = temp;

document.write(valeur + "<br>");


