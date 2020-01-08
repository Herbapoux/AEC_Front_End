/**
 * Created by Yannick on 08-01-2020.
 */

/* 
Question 14:
Lire une série de nombres fournis par l’usager (l’usager transmet le nombre 0 pour terminer). Afficher la somme des nombres positifs ainsi que la somme des nombres négatifs.
*/


var nbrUsager;
var nbrPositif = 0;
var nbrNegatif = 0;

nbrUsager = Number(prompt("Inscrivez une série de nombre. Le programme affichera la somme des nombres positifs ainsi que la somme des nombres négtifs. Transcrivez le nombre 0 pour terminer le programme."));

while(nbrUsager != 0){
	
	if(nbrUsager < 0){
	nbrNegatif += nbrUsager;
	}

	else if(nbrUsager > 0){
	nbrPositif += nbrUsager;
	}
	nbrUsager = Number(prompt("Entrez un autre nombre"));
}

document.write("la somme des nombres positifs est de " + nbrPositif + " et la somme des nombres négatifs est de " + nbrNegatif);
