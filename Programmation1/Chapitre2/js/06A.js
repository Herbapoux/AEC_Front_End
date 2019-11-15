/**
 * Created by Yannick on 2019-15-04.
 */

/*Lire une note au clavier et afficher la lettre correspondante.
90 et plus : A
Entre 80 et 90 : B
Entre 70 et 80 : C
Entre 60 et 70 : D
Moins de 60 : E

Codez l’exercice #6 2 fois, une fois en débutant le IF par la cote A et une fois par la cote E 
(en sens inverse)
*/


    //Déclaration des variables
var note;

	//Lecture au clavier (l'usager entre une valeur
	note = Number(prompt("Indiquez votre note en % pour connaitre son équivalent en note littérale"));
	
	//Les calculs

	//Les affichages
		if(note >= 0 && note < 60){
			alert("Vous avez un E");
		}
		else if(note >= 60 && note < 70){
			alert("Vous avez un D");
			}	
		else if(note >=70 && note < 80){
			alert("Vous avez un C");
			}
		else if(note >= 80 && note < 90){
		alert("Vous avez un B");
			}	
		else if(note >= 90 && note <= 100){
			alert("Vous avez un A");
			}
		else{
			alert("Erreur sur votre note, veillez recommencer");
		}