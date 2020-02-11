/**
 * Created by Yannick on 07-02-2020. 
Examen FOrmatif
 */

//Question 1

/* :
Vous devez calculer les dommages de l’attaque Darkest Lariat du pokémon Incineroar.

Pour cela, il faut lire le type du pokémon adverse. Si c’est de type eau, les dommages seront doublés car les pokémons du type eau ont une faiblesse contre le feu.

Il faut ensuite faire deux pile ou face. Pour cela, il faut générer un nombre aléatoire entre 0 et 1. Si c’est face (1), l’attaque fait 100 de dégâts. Si c’est faux l’attaque fait 0 dégât. Répétez les opérations pour le second lancé.

Exemple :
type = “eau” face face → 400 de dégâts
type = “ténèbre” pile face → 100 dégâts
*/


let attAdverse = prompt("Quel est le type d'attaque de l'adversaire?");
let degats = 0;
let darkestLariat;


for (let i=0; i<2; i++){
	darkestLariat = Math.floor(Math.random() + .5)*100;
	degats += darkestLariat;
	document.write(darkestLariat + "<br>")
}
	
	
if(attAdverse.toUpperCase() === "EAU"){
	degats = degats *2;
}

document.write("Vous avez fait :" + degats + " dégâts.");
