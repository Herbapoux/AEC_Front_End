/**
 * Created by Yannick on 23-12-2019.
 */

/* 
Question 11:
Afficher les nombres de 1 à 10 avec le carré et le cube de chacun de ces nombres.
*/

var carre;
var cube;

for(var i=1; i<=10; i++){
	carre = Math.pow(i,2);
	cube = Math.pow(i,3);
	document.write("Pour le nombre " + i + ", le carré est = " + carre + ", et son cube est = " + cube + "<br>");
}

/**
Prof

var carre, cube;
for(var i=1;i<=10;i++){
   carre = Math.pow(i,2);
   cube = Math.pow(i,3);
   document.write(i + " au carré =  " + carre + " au cube = " + cube + "<br>");
}
*/

