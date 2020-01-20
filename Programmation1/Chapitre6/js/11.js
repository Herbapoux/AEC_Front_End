/**
 * Created by Yannick on 18-12-2019. Chapitre 6.
 */

/* 
Question 11:
C’est le temps du recensement. Nous aimerions connaître le nombre d’enfants que chaque famille possède et par la suite afficher un tableau de statistiques comme suit : Le nombre d’enfants est l’indice du tableau. 
Regrouper ensemble les 10 enfants et plus.

Truc : il faut utiliser l'indice du tableau pour représenter le nombre d'enfants.
Par exemple : tab[2] = 10; signifie qu'il y a 10 familles qui ont 2 enfants.
*/

var nbEnfants = [0|0|0|0|0|0|0|0|0|0];
var nb = Number(prompt("Combien d'enfant avez-vous? Écrire STOP pour afficher les stats."))
var stats = false;

while(nbEnfants != "STOP"){
	nbEnfants[nb] = Number(prompt("Combien d'enfant avez-vous? Écrire STOP pour afficher les stats."));
}
if(nbEnfants === "STOP"){			
		stats = true;
}

if(stats){
	document.write(nbEnfants[nb] + "<br>");
}

else{
	alert("erreur");
}






