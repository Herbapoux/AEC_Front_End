/**
 * Created by Yannick on 09-01-2020.
 */

/* 
Question 17:
Lire le code de sexe d’un individu (M ou F) et afficher le sexe de l’individu par le mot correspondant (Masculin ou Féminin). Traiter plusieurs codes de sexe jusqu’à temps que ce code soit autre chose que M ou F. De plus afficher le nombre de M qui ont été entrés ainsi que le nombre de F qui ont été entrés.
*/

var masculin = 0;
var feminim = 0;
var demande;

demande = prompt("Entrez le sexe d'un individu avec un M ou un F.");

while(demande.toUpperCase() === "M" || demande.toUpperCase() === "F"){
	if(demande.toUpperCase() === "M"){
		masculin++
		alert("Masculin");
	}
	else if(demande.toUpperCase() === "F"){
		feminim++
		alert("Féminin");
	}
	demande = prompt("Entrez le sexe d'un autre individu.");
}

document.write("Vous avez entré " + masculin + " individu masculin et vous avez entrez " + feminim + " individu féminin.")



