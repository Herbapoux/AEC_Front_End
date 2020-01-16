/**
 * Created by Yannick on 15-01-2020.
 */

/* 
Question 27:
Lire une string, écrire le mot à l'envers. Patate devient etataP
 */

var nb = prompt("Entrez un mot");

for (var i=0; i<nb.length; i++){
	document.write(nb[i] + "<br>");
}

document.write("----------------<br>");

for (var i=nb.length-1; i>=0; i--){
	document.write(nb[i] + "<br>");
}