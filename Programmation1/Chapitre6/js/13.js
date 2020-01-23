/**
 * Created by Yannick on 23-12-2019. Chapitre 6.
 */

/* 
Question 13:
Lire 12 nombres quelconques et les mettre dans un tableau. Vérifier si le dernier nombre (12e) additionné avec un des 11 autres nombres font une somme de 15. Si tel est le cas, afficher ces 2 nombres.
*/

var nbRandom = [];

for(var i=0; i<12; i++){
	nbRandom[i] = Math.floor(Math.random()*15+1);
	document.write((i+1) + "= " + nbRandom[i] + "<br>");
}

document.write("<br>Voici le dernier chiffre: " + nbRandom[11]);

for(var j=0; j<12; j++){
	if(nbRandom[j]+nbRandom[11] === 15){
		document.write("<br>Voici le résulat:<br> " + nbRandom[11] + " + " + nbRandom[j] + " = 15<br>");
	} 
}
//document.write(nbRandom);

/*
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
*/
