/**
 * Created by Yannick on 17-02-2020.
 */

/* 
QUESTION 1 
*/


let typeJeep = prompt("Quel type de Jeep voulez-vous?\nA. Sport (33290$) \nB. SportS (37240$) \nC. Havane (39235$)");
let terme = Number(prompt("En combien de mois voulez-vous le payer? \n24 \n48 \n60 \n84"));
let couleur = prompt("Quel couleur désirez-vous?: \nRouge (+1399$) \nBlanc \nNoir \nJaune \nVert (+1399$) \nBleu \nGris \nOrange?");
let transmission = prompt("Quel transmission désirez-vous? \nA. Manuel, \nB. Automatique (+1500$) ou \nC. 8 vitesses (+2400$)");
let prix = 0;
let prixTaxes;
let mensuels;
let erreur = false;

//type de Jeep
if (typeJeep.toUpperCase() === "A" || typeJeep.toUpperCase() === "SPORT"){
	prix += 33290;
	typeJeep = "Sport"
}
else if (typeJeep.toUpperCase() === "B" || typeJeep.toUpperCase() === "SPORTS"){
	prix += 37240;
	typeJeep = "Sport S"
}
else if (typeJeep.toUpperCase() === "C" || typeJeep.toUpperCase() === "HAVANE"){
	prix += 37240;
	typeJeep = "Havane"
}
else{
	erreur = true;
}

//terme du contrat
if (terme === 24 || terme === 48 || terme === 60 || terme === 84){
	prix += 0;
}
else{
	erreur = true;
}

//couleurs du Jeep
if (couleur.toUpperCase() === "ROUGE" || couleur.toUpperCase() === "VERT"){
	prix += 1399;
}
else if (couleur.toUpperCase() === "ROUGE" || couleur.toUpperCase() === "BLANC" || couleur.toUpperCase() === "NOIR" || couleur.toUpperCase() === "JAUNE" || couleur.toUpperCase() === "BLEU" || couleur.toUpperCase() === "GRIS" || couleur.toUpperCase() === "ORANGE"){
	prix += 0;
}
else{
	erreur = true;
}
	
//transmission du Jeep
if (transmission.toUpperCase() === "A" || transmission.toUpperCase() === "MANUEL"){
	transmission = "manuel";
}
else if (transmission.toUpperCase() === "B" || transmission.toUpperCase() === "AUTOMATIQUE"){
	prix += 1500;
	transmission = "automatique";
}
else if (transmission.toUpperCase() === "C" || transmission.toUpperCase() === "8 VITESSES"){
	transmission = "8 vitesses";
	prix += 2400;
}
else{
	erreur = true;
}

//taxes
prixTaxes = (prix + prix*.15).toFixed(2);

//paiements mensuels
mensuels = (prixTaxes / terme).toFixed(2);

//resutlat
if(erreur){
	alert("Une erreur a glisser dans vos choix. Veuillez recommencer svp");
}

else{
	document.write("Voici le résumé de l'achat de votre véhicule:<br><br> Prix avant taxes: " + prix + "$<br>Prix avec taxes: " + prixTaxes + "$<br>Paiements mensuels: " + mensuels + "$<br>Mensualité: " + terme + " mois<br>Type: " + typeJeep + "<br>Couleur: " + couleur + "<br>Transmission: " + transmission);
}

