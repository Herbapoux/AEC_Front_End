/**
 * Created by Yannick on 16-12-2019. Chapitre 6.
 */

/* 
Question 03:
Affichez les mois précédents de Décembre à Janvier à l’aide d’une boucle for (inversée).
*/

var moisInverse = [];

moisInverse[0] = "Janvier";
moisInverse[1] = "Février";
moisInverse[2] = "Mars";
moisInverse[3] = "Avril";
moisInverse[4] = "Mai";
moisInverse[5] = "Juin";
moisInverse[6] = "Juillet";
moisInverse[7] = "Août";
moisInverse[8] = "Septembre";
moisInverse[9] = "Octobre";
moisInverse[10] = "Novembre";
moisInverse[11] = "Décembre";



for(var i=moisInverse.length-1; i>=0; i--){
	document.write(moisInverse[i] + "<br>");
}