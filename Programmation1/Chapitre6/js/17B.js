/**
 * Created by Yannick on 3-2-2020. Chapitre 6.
 */

/* 
Question 17B:
Lire 5 valeurs dans un tableau. Trier ce tableau en ordre décroissant.
B. Avec la méthode sort()
*/

let tableau = [];

//B. AVEC sort() 
for(var i=0; i<5; i++){
	tableau[i] = Math.floor(Math.random() * 100);
}
document.write("Lecture du tableau aléatoire: " + tableau + "<br>");

tableau.sort((a,b) => b - a);

document.write("Nouveau tableau: " + tableau);

//Mettre ses nombres dans l'ordre décroissant dans le tableau.


