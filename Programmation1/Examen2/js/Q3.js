/**
 * Created by Yannick on 17-02-2020.
 */

/* 
QUESTION 3
*/

let tabNombres = [];
let tabLettres = [];
let nbLettreE = 0;
let nbVoyelles = 0;
let nbMotDAD = 0;
let trouverDAD = false;


for (let i=0; i<10000; i++){
	tabNombres[i] = Math.floor(Math.random()*26+65);
	//Visualiser tous les nombres aléatoires
	document.write(tabNombres[i] + " ");
}

document.write("<br><br>");

//les lettres correspondants aux nombres
for (let j=0; j<tabNombres.length; j++){
	tabLettres[j] = String.fromCharCode(tabNombres[j]);
	//visualiser les lettres correspondants aux nombres
	document.write(tabLettres[j] + " ");
	if(tabLettres[j] === "E"){
		nbLettreE +=1;
	}
	if(tabLettres[j] === "A" || tabLettres[j] === "E" || tabLettres[j] === "I" || tabLettres[j] === "O" || tabLettres[j] === "U" || tabLettres[j] === "Y"){
		nbVoyelles +=1;
	}
	//trouver le mot DAD dans la séquence
	if(tabLettres[j] === "D" && tabLettres[j-1] === "A" && tabLettres[j-2] === "D"){
		trouverDAD = true;
		//visualiser l'endroit ou le mot DAD apparait 
		document.write("<br><br> ICI!! <br><br>")
		nbMotDAD +=1;
	}
}
document.write("<br><br>");

//visualiser le nombdre de fois que la lettre E sort
if(trouverDAD){
	document.write("Le mot DAD existe " + nbMotDAD + " fois<br>")
}

//visualiser le nombre de voyelles
document.write("Nombre de lettre de E: " + nbLettreE + "<br>Nombre de voyelles: " + nbVoyelles);