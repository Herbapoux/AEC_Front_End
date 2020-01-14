/**
* Created by Yannick on 14-01-2020.
*/

/* 
Question 24:
Trouvez TOUS les nombres de Armstrong de moins de 1000
On dénomme nombre de Armstrong un entier naturel qui est égal à la somme des cubes des chiffres qui le composent.  

Exemple :  
153 = = 13 + 53 + 33 = 1 + 125 + 27, est un nombre de Armstrong. 
*/

var unite;
var dizaine;
var centaine;



for(var i=1; i<1000; i++){
	if (i<10){
		unite = i;
		if ((unite*unite*unite) === i){
			document.write("Ceci est un nombre Armstrong " + i + "<br>");
		}
	}
	else if (i>=10 && i<=99){
		dizaine = Math.floor(i/10);
		unite = i%10;
		if ((unite*unite*unite)+(dizaine*dizaine*dizaine) === i){
			document.write("Ceci est un nombre Armstrong " + i + "<br>");
		}
	}
	else if (i>=100 && i<1000){
		centaine = Math.floor(i/100);
		dizaine = Math.floor((i-centaine*100)/10);
		unite = i%10;
		if( (unite*unite*unite)+(dizaine*dizaine*dizaine)+(centaine*centaine*centaine) === i){
			document.write("Ceci est un nombre Armstrong " + i + "<br>");
		}
	}	
}
	
	