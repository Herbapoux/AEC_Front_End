/**
 * Created by Yannick on 13-01-2020.
 */

/* 
Question 23:
Créez un programme qui lit un nombre et affiche tous les chiffres de ce nombre séparément dans les deux sens.
indice : lisez le nombre en string.
var nb = “Shany”;
nb[0] vaut la lettre S
nb[2] vaut la lettre a

Exemple :  
123 =
1
2
3
-------
3
2
1
*/

var nb = prompt("Entrez un nombre");

for (var i=0; i<nb.length; i++){
	document.write(nb[i] + "<br>");
}

document.write("-----------------<br>");

for (var i=nb.length-1; i>=0; i--){
		document.write(nb[i] + "<br>");
}



