/**
 * Created by Yannick on 17-12-2019. Chapitre 6.
 */

/* 
Question 06:
Créez un tableau de 10 cellules qui contient une chaîne de caractères à deux valeurs (Pile ou Face). Vous décidez manuellement des valeurs qui seront dans le tableau (ce n’est pas random) et affichez ces valeurs à l’aide d’une boucle Pour.
*/

var tableau = [];

tableau[0]="vrai";
tableau[1]="faux";
tableau[2]="faux";
tableau[3]="vrai";
tableau[4]="vrai";
tableau[5]="vrai";
tableau[6]="faux";
tableau[7]="faux";
tableau[8]="vrai";
tableau[9]="faux";

for (var i=0; i<tableau.length-1; i++){
	document.write(tableau[i] + "<br>");
}


	