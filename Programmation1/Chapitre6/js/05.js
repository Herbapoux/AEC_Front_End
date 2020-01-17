/**
 * Created by Yannick on 16-12-2019. Chapitre 6.
 */

/* 
Question 05:
Modifiez le numéro précédent pour trouver le plus grand nombre possible en JavaScript.
*/

var tab2Exp = [];
var limite = 0;

while(limite != 5){
	for(var i=0; i<16; i++){
		tab2Exp= Math.pow(2,i);
		document.write("2 exposant " + i + " = " + tab2Exp + "<br>");
		limite++
	}	
}

	