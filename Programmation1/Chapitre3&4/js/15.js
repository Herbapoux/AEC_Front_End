/**
 * Created by Yannick on 08-01-2020.
 */

/* 
Question 15:
Lire une série de nombres fournis par l’usager (l’usager transmet le nombre 0 pour terminer). Afficher combien de nombres positifs ont été entrés ainsi que combien de nombres négatifs ont été entrés.
*/

var nbrUsager;
var nbrPositif = 0;
var nbrNegatif = 0;

nbrUsager = Number(prompt("Inscrivez une série de nombres. Le programme calculera combien de nombres positifs et de nombres négatifs vous avez transcrit respectivement. Transcrivez le nombre 0 pour terminer le programme."));


while(nbrUsager != 0){
	if(nbrUsager < 0){
		nbrNegatif++
	}
	else if(nbrUsager > 0){
		nbrPositif++
	}
	nbrUsager = Number(prompt("Entrez un autre nombre."));
}

document.write("Vous avez entré " + nbrPositif + " nombre positif et vous avez entrez " + nbrNegatif + " nombre négatif.")

