/**
 * Created by Yannick on 13-01-2020.
 */

/* 
Question 21:
Faites afficher 1 3 5 7 9 11 sur 13 lignes.
*/

for(var ligne=1; ligne<=13; ligne++){
	
	for(var i=1; i<=11; i+=2){
		document.write(i + " ");
	}
	document.write("<br>");
}