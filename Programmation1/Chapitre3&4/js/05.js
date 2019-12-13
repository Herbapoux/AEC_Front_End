/**
 * Created by Yannick on 13-12-2019.
 */

/* 
Question 05:
Faire un programme qui affiche 100 nombres aléatoires 0 ou 1 et compter le nombre de 0 et de 1.
*/

var nb0=0
var nb1=0

for (var i=1; i<=100; i++){
	var nb = Math.floor(Math.random() +0.5);

	if(nb === 0){
		nb = nb0++;
	}
	else if(nb === 1){
		nb = nb1++;
	}
	document.write(i + " chiffre aléatoire <br>");
}
document.write(nb0 + " fois pour le chiffre 0 <br>" + nb1 + " fois pour le chiffre 1");

