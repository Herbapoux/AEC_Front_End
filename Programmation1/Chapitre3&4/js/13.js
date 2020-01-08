/**
 * Created by Yannick on 08-01-2020.
 */

/* 
Question 13:
Afficher les nombres impairs de 1 à 49, et mettre 5 valeurs par ligne.
*/


var cinqN = 0;

for(var i=1; i<=50; i+=2){
	document.write(i + " ");
	cinqN++;
	if (cinqN === 5){
		document.write("<br>");
		cinqN = 0;
	}
}