/**
 * Created by Yannick on 3-2-2020. Chapitre 6.
 */

/* 
Question 17A:
Lire 5 valeurs dans un tableau. Trier ce tableau en ordre décroissant.
A. Essayez SANS la méthode sort()
*/

let tableau = [];
let temp;

//A. SANS sort(); 
for(var i=0; i<5; i++){
	tableau[i] = Math.floor(Math.random() * 100);
	document.write(tableau[i] + " ")
	for(var j=0; j<=tableau.length; j++){
		if(tableau[i]>tableau[j]){
			temp = tableau[j];
			tableau[j] = tableau[i];
			tableau[i] = temp
		}
	}
}
document.write("<br>Nouveau tableau"+ tableau + "<br>");


