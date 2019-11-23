/**
 * Created by Yannick on 2019-22-04.
 */

/**Créez un programme permettant de changer la couleur du texte de la console.  
Offrez trois choix de couleurs de fond et de texte à l'utilisateur
Affichez une ligne de texte de la couleur de fond et de texte choisis par l'utilisateur
*/


    //Déclaration des variables

var couleurTexte;
var couleurFond;

console.log("This is %cMy stylish message", "color: yellow; font-style: italic; background-color: blue;padding: 2px");

console.log("This is %cMy stylish message", "color: red; font-style: bold; background-color: blue;padding: 2px");

console.log("This is %cMy stylish message", "font: arial; color: green; font-style: black; background-color: blue;padding: 2px");

console.log("%cUser %s has %d points", "color:orange; background:blue; font-size: 16pt", 'User', 100);



	//Lecture au clavier
couleurTexte = prompt("Quelle couleur de texte voulez-vous? \n1. Vert? \n2. Bleu? \n3. Jaune?");
couleurFond = prompt("Quelle couleur de fond voulez-vous? \n1. Rouge? \n2. Noir? \n3. Violet?");
	//Les calculs

	//Les affichages  

if(couleurTexte.toUpperCase === "VERT" || )