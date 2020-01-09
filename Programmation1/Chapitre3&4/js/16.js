/**
 * Created by Yannick on 08-01-2020.
 */

/* 
Question 16:
Faire un programme qui boucle 10 fois. À toutes les itérations, votre programme génère un nombre aléatoire entre 0 et 1 et vous demande aussi de choisir un nombre entre 0 et 1. Si le nombre est identique, vous gagnez, perdez sinon. Vous affichez le pointage à la fin des 10 itérations.
*/

var joueur = 0;
var ordi = 0;
var nbrUsager;

alert("Le programme choisi aléatoirement un chiffre entre 0 et 1. Essayez de trouver de quel nombre il sagit en le transcrivant. vous gagnez 1 point à chaque fois que vous le trouver. Bonne chance.");

for(var i=1; i<=10; i++){
	nbrUsager = Number(prompt("Choississez un nombre entre 0 et 1"));
	var random = Math.floor(Math.random()+0.5);
	
	if(nbrUsager === random){
		joueur++
	}
	else{
		ordi++
	}
}

document.write("Voici le nombre de point que vous avez gagné: " + joueur + "<br>" + "Et voici le nombre de point que l'ordinateur a gagné " + ordi);
