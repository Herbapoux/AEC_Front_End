/**
 * Created by Yannick on 23-12-2019. Chapitre 6.
 */

/* 
Question 13:
Lire 12 nombres quelconques et les mettre dans un tableau. Vérifier si le dernier nombre (12e) additionné avec un des 11 autres nombres font une somme de 15. Si tel est le cas, afficher ces 2 nombres.
*/

var nbRandom = [];

for(var i=0; i<12; i++){
	nbRandom[i] = Math.floor(Math.random()*12+1);
	document.write((i+1) + "= " + nbRandom[i] + "<br>");
}

document.write("<br>Voici le dernier chiffre: " + nbRandom[11]);

for(var j=0; j<12; j++){
	if(nbRandom[j]+nbRandom[11] === 15){
		document.write("<br>Voici le résulat:<br> " + nbRandom[11] + " + " + nbRandom[j] + " = 15<br>");
	} 
}
