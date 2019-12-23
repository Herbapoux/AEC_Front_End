/**
 * Created by Yannick on 23-12-2019.
 */

/* 
Question 10:
Afficher le montant et la taxe de 9% pour les montants de $5.00 à $100.00 par tranche de $5.00.
*/

var montant;

for(var i=5; i<=100; i+=5){
	montant = i*1.09 ;
	document.write("Le montant est égale à = " + i + " $, le montant avec taxe = " + montant.toFixed(2) + " $<br>");
}

