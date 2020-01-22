/**
 * Created by Yannick on 22-12-2019. Chapitre 6.
 */

/* 
Question 12:
Mettre dans un tableau les 10 bonnes réponses à un test objectif (vrai ou faux). Par la suite, faire la correction du test d’un étudiant en lisant ses 10 réponses et afficher sa note sur 10.
*/

var bonneRéponses = ["vrai", "faux", "vrai", "faux", "vrai", "faux", "vrai", "faux", "vrai", "faux",];
var reponsesEtudiants = [];
var pointage = 0;

reponsesEtudiants[0] = prompt("Question 1");
reponsesEtudiants[1] = prompt("Question 2");
reponsesEtudiants[2] = prompt("Question 3");
reponsesEtudiants[3] = prompt("Question 4");
reponsesEtudiants[4] = prompt("Question 5");
reponsesEtudiants[5] = prompt("Question 6");
reponsesEtudiants[6] = prompt("Question 7");
reponsesEtudiants[7] = prompt("Question 8");
reponsesEtudiants[8] = prompt("Question 9");
reponsesEtudiants[9] = prompt("Question 10");

for(var i=0; i<10; i++){
	if(bonneRéponses[i] === reponsesEtudiants[i]){
		reponsesEtudiants[i] = "bon"; 
		pointage++
	}
	else{
		reponsesEtudiants[i] = "mauvais";
	}
}

document.write(reponsesEtudiants + "<br>Votre pointage est de: " + pointage + "/10");