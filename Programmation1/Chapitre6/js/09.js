/**
 * Created by Yannick on 17-12-2019. Chapitre 6.
 */

/* 
Question 09:
Lire 10 nombres quelconques et les placer dans un tableau. Par la suite, trouver le plus petit et le plus grand de ces nombres.
*/

var tableau = [];
var nbrMax = 0;
var nbrMin = 999;

for(var i=0; i<10; i++){
	tableau[i] = Math.floor(Math.random()*100);
	document.write(tableau[i] + "<br>");
}

for(var j=0; j<10; j++){
	if(tableau[j] > nbrMax){
		nbrMax = tableau[j];
	}
	if(tableau[j]<nbrMin){
		nbrMin = tableau[j];
	}
}

document.write("Le plus petit nombre est: " + nbrMin + "<br>Le plus grand nombre est: " + nbrMax);
