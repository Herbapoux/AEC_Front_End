/**
 * Created by Yannick on 28-12-2019. Chapitre 6.
 */

/* 
Question 16:
Créez un tableau de 10 valeurs :

Bouclez pour i de 0 à length-1.

Générez un nombre aléatoire r.

Échangez les valeurs du tableau aux indices i et r.

À la fin de la boucle, votre tableau est mélangé!

*/

var tableau =[1,2,3,4,5,6,7,8,9,10];
var nbAleatoir =[];

for(var i=0; i<tableau.length-1; i++){
	nbAleatoir[i] = Math.floor(Math.random()*10+1);
	[tableau[i] = nbAleatoir[i]]
}

document.write(tableau + nbAleatoir);

