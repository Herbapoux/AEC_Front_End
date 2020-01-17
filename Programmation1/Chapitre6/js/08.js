/**
 * Created by Yannick on 17-12-2019. Chapitre 6.
 */

/* 
Question 08:
Lire les noms et notes d’examen d’une classe de 5 élèves. Afficher ceux (noms et notes) qui ont une note supérieure à la moyenne.
*/

var notesMoyenne;
var nom = [];
var note = [];


for(var i=0; i<5; i++){
	nom[i] = prompt("Quel est votre nom?");
	note[i] = Number(prompt("Quel est votre note?"));
	document.write(nom[i] + ": " + note[i] + "<br>");
	notesMoyenne = (note[0] + note[1] + note[2] + note[3] + note[4]) / 5;
}

for(var i=0; i<5; i++){
	if(note[i]>notesMoyenne){
		document.write("Ceux et celles qui ont une note supérieur à la moyenne sont:<br>" + nom[i] + ": " + note[i] + "<br>")
	}
}


	