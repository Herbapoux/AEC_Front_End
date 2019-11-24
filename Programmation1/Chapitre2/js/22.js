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


	//Lecture au clavier
couleurTexte = prompt("Quelle couleur de texte voulez-vous? \n1. Vert? \n2. Magenta? \n3. Jaune?");
couleurFond = prompt("Quelle couleur de fond voulez-vous? \nA. Rouge? \nB. Noir? \nC. Violet?");
	//Les calculs

	//Les affichages  

if(couleurTexte.toUpperCase() === "VERT" || couleurTexte.toUpperCase() === "V" || couleurTexte.toUpperCase() === "1"){
	if(couleurFond.toUpperCase() === "ROUGE" || couleurFond.toUpperCase() === "R" || couleurFond.toUpperCase() === "A"){
		document.write('<h1 class="vert rouge">Ceci est votre choix de couleurs</h1>');
	}
	else if(couleurFond.toUpperCase() === "NOIR" || couleurFond.toUpperCase() === "N" || couleurFond.toUpperCase() === "B"){
		document.write('<h1 class="vert noir">Ceci est votre choix de couleurs</h1>');
	}
	else if(couleurFond.toUpperCase() === "VIOLET" || couleurFond.toUpperCase() === "V" || couleurFond.toUpperCase() === "C"){
		document.write('<h1 class="vert violet">Ceci est votre choix de couleurs</h1>');
	}
	else{
		document.write("Erreur");
	}
}

else if(couleurTexte.toUpperCase() === "MAGENTA" || couleurTexte.toUpperCase() === "M" || couleurTexte.toUpperCase() === "2"){
	if(couleurFond.toUpperCase() === "ROUGE" || couleurFond.toUpperCase() === "R" || couleurFond.toUpperCase() === "A"){
		document.write('<h1 class="magenta rouge">Ceci est votre choix de couleurs</h1>');
	}
	else if(couleurFond.toUpperCase() === "NOIR" || couleurFond.toUpperCase() === "N" || couleurFond.toUpperCase() === "B"){
		document.write('<h1 class="magenta noir">Ceci est votre choix de couleurs</h1>');
	}
	else if(couleurFond.toUpperCase() === "VIOLET" || couleurFond.toUpperCase() === "V" || couleurFond.toUpperCase() === "C"){
		document.write('<h1 class="magenta violet">Ceci est votre choix de couleurs</h1>');
	}
	else{
		document.write("Erreur");
	}
}

else if(couleurTexte.toUpperCase() === "JAUNE" || couleurTexte.toUpperCase() === "J" || couleurTexte.toUpperCase() === "3"){
	if(couleurFond.toUpperCase() === "ROUGE" || couleurFond.toUpperCase() === "R" || couleurFond.toUpperCase() === "A"){
		document.write('<h1 class="jaune rouge">Ceci est votre choix de couleurs</h1>');
	}
	else if(couleurFond.toUpperCase() === "NOIR" || couleurFond.toUpperCase() === "N" || couleurFond.toUpperCase() === "B"){
		document.write('<h1 class="jaune noir">Ceci est votre choix de couleurs</h1>');
	}
	else if(couleurFond.toUpperCase() === "VIOLET" || couleurFond.toUpperCase() === "V" || couleurFond.toUpperCase() === "C"){
		document.write('<h1 class="jaune violet">Ceci est votre choix de couleurs</h1>');
	}
	else{
		document.write("Erreur");
	}
}

else{
	document.write("Il y a une erreur sur l'entrée de vos données");
}