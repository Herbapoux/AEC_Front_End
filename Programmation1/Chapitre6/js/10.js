/**
 * Created by Yannick on 17-12-2019. Chapitre 6.
 */

/* 
Question 10:
Le collège offre 6 options aux étudiants. Ces options sont : 
a. INFORMATIQUE 
b. ADMINISTRATION
c. HISTOIRE 
d. GÉNIE
e. GEOGRAPHIE 
f. BUREAUTIQUE

Mettre ces options dans un tableau, puis demander à un étudiant d’entrer un nom d’option. Vous lui répondez si OUI ou NON le collège offre cette option.

*/

var option = ["INFORMATIQUE", "ADMINISTRATION", "HISTOIRE", "GÉNIE", "GÉOGRAPHIE", "BUREAUTIQUE"];
var nomOption = prompt("Entrez un nom d'option").toUpperCase();
var trouver = false;

for (var i=0; i<option.length; i++){
	if(nomOption === option[i]){
		trouver = true;
	}
}

if(trouver){
	document.write("Oui cette option est offerte: " + nomOption);
}

else{
	document.write("Non, cette option n'est pas offerte: " + nomOption);
}
