/**
 * Created by Yannick on 13-01-2020.
 */

/* 
Question 19:
Faites afficher 2 4 6 8 10 sur 30 lignes.
*/

for(var ligne=1; ligne<=30; ligne++){
	
	for(var i=2; i<=10; i+=2){
		document.write(i + " ");
	}
	document.write ("<br>")
}