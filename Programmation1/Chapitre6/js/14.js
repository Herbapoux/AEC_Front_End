/**
 * Created by Yannick on 23-12-2019. Chapitre 6.
 */

/* 
Question 14:
Lire 12 nombres quelconques et vérifier si deux de ces nombres font une somme de 15. Si tel est le cas, affichez ces deux nombres.
*/

var nbRandom = [];
var premierNb;
var deuxiemeNb;

for(var i=0; i<12; i++){
	nbRandom[i] = Math.floor(Math.random()*12+1);
	document.write(nbRandom[i] + "<br>")
}

for(var j=0; j<12; j++){
	for(var k=0; k<12; k++){
		if(nbRandom[j] + nbRandom[k] === 15){
			premierNb = nbRandom[j];
			deuxiemeNb = nbRandom[k];
		}	
	}
}
document.write("Voici les deux nombres: " + premierNb + " et " + deuxiemeNb);




/*
for(var j=0; j<12; j++){
	for(var k=0; k<12; k++){
		if(nbRandom[j] + nbRandom[k] === 15){
			document.write("voici un résultat: " + nbRandom[j] + "+" + nbRandom[k] + "= 15");
		}	
	}
}	
*/

		
/*
for(var j=0; j<12; j++){
	if(nbRandom[j] + nbRandom[i] === 15){
		document.write("voici un résultat: " + nbRandom[j] + "+" + nbRandom[i] + "= 15");
	}
}
*/