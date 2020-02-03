/**
 * Created by Yannick on 30-12-2019. Chapitre 6.
 */

/* 
Question 16A:
Créez un tableau de 10 valeurs :

Bouclez pour i de 0 à length-1.

Générez un nombre aléatoire r.

Échangez les valeurs du tableau aux indices i et r.

À la fin de la boucle, votre tableau est mélangé!

*/

var tableau = [1,2,3,4,5,6,7,8,9,10];
var nbAleatoir;
var temp;

document.write(tableau + "<br>");

//mélanger le tableau
for(var i=0; i<tableau.length; i++){
	nbAleatoir = Math.floor(Math.random()*9);
	console.log("On échange l'indice " + i + " avec l'indice " + nbAleatoir);
	
	temp = tableau[i];
	tableau[i] = tableau[nbAleatoir];
	tableau[nbAleatoir] = temp;
}

document.write(tableau);



