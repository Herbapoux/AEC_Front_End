/**
 * Created by Yannick on 06-12-2019.
 */

/* 
QUESTION 2 (4 points)

Faire le code qui permet de lire au clavier la valeur de la variable âge et afficher tranche d'âge en fonction de l'âge. Pour faire ce choix, utiliser la table suivante :

tranche à afficher	             age
				
enfant			          0  <=  age  <= 12
adolescent		         13  <=  age  <= 17
adulte			         18  <=  age  <= 54
senior			         55 et plus

Si note ne contient aucune de ces valeurs, alors affichez ″Pas encore né.″
*/

var age;
var trancheAge;
var erreur;

age = Number(prompt("Inscrivez l'âge d'un individu pour afficher la tranche d'âge associée."));


if(age >= 0 && age <= 12){
	trancheAge = "enfant";
}
else if(age >= 13 && age <= 17){
	trancheAge = "adolescent";
}
else if(age >= 18 && age <= 54){
	trancheAge = "adulte";
}
else if(age >= 55){
	trancheAge = "senior";
}
else{
	erreur = true;
}

//Erreurs et réponses
if(erreur === true){
	alert("Pas encore né.");
}
else{
	document.write("Pour un individu âgé de " + age + " année (s), il ou elle appartient à la tranche d'âge suivante: " + trancheAge);
}


