/**
 * Created by Yannick on 13-01-2020.
 */

/* 
Question 20:
Faites afficher 10 8 6 4 2 0 sur 12 lignes.
*/

for(var ligne=1; ligne<=12; ligne++){
	
	for(var i=10; i>=0; i-=2){
		document.write(i + " ");
	}
	document.write("<br>");
}