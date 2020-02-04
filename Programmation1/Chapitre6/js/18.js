/**
 * Created by Yannick on 04-02-2020. Chapitre 6.
 */

/* 
Question 18:
Lire 10 noms et afficher en ordre alphabétique selon la 1ere lettre uniquement.
Indices :
var texte1 = “Shany”
var texte2 = “Carle”
console.log(texte1[0] < texte2[0]);
Va afficher false car ‘S’ n’est pas plus petit que ‘C’

tabMots[0] = "shany";
           console.log(tabMots[0][1]); //Affiche le caractère h

*/

let tabNom = [];
let temp;

for(let i=0; i<10; i++){
	tabNom[i] = prompt("Entrez un nom");
	document.write(tabNom[i] + " "+ "<br>")

	for(let j=0; j<tabNom.length; j++){
		if(tabNom[i][0] <= tabNom[j][0]){
			temp = tabNom[j];
			tabNom[j] = tabNom[i];
			tabNom[i] = temp;
		}
	}
}

document.write("voici les nom dans l'ordre alphabétique: <br>" + tabNom + "<br>")

