/**
 * Created by Yannick on 05-02-2020. 
 Chapitre 7.
 */

//PAGE 3

/* :
Créez une classe Examen qui contient 5 questions. Chaque question vaut de zéro à 20 points. Examen possède la fonction GetNote() qui retourne son score sur 100 
Créez une classe Etudiant qui contient les propriétés : nom, prénom et un Examen. 

Instanciez 10 étudiants avec chacun un examen dont chaque résultat de chaque question est choisi aléatoirement. 

Affichez les élèves qui réussissent l’examen et ceux qui échouent. 

*/


class Examen{
	constructor(q1, q2, q3, q4, q5){
		this.q1 = q1;
		this.q2 = q2;
		this.q3 = q3;
		this.q4 = q4;
		this.q5 = q5;
	}
	
	GetNote(){
		return this.q1 + this.q2 + this.q3 + this.q4 + this.q5;
	}
}

class Etudiant{
	constructor(nom, prenom, examen){
		this.nom = nom;
		this.prenom = prenom;
		this.examen = examen;
	}
}

let q1 = Math.floor(Math.random() * 20 + .5);
let q2 = Math.floor(Math.random() * 20 + .5);
let q3 = Math.floor(Math.random() * 20 + .5);
let q4 = Math.floor(Math.random() * 20 + .5);
let q5 = Math.floor(Math.random() * 20 + .5);

let examen = new Examen(q1, q2, q3, q4, q5);

let YannickPoulin = new Etudiant("Poulin", "Yannick", examen);
let MireilleLegault = new Etudiant("Legault", "Mireille", examen);
let PascalRousseau = new Etudiant("Rousseau", "Pascal", examen);
let StephaneTrudeau = new Etudiant("Trudeau", "Stephane", examen);
let RoxaneCharest = new Etudiant("Charest", "Roxane", examen);
let BenoitGagnon = new Etudiant("Ganon", "Benoit", examen);
let MartinDurette = new Etudiant("Durette", "Martin", examen);
let DidierPLantard = new Etudiant("Plantard", "Didier", examen);
let ArianeBeaulieu = new Etudiant("Beaulieu", "Ariane", examen);
let AndreDesormeaux = new Etudiant("Desormeaux", "André", examen);

//document.write("Voici l'examen de " + YannickPoulin.prenom + " " + YannickPoulin.nom + ": " + YannickPoulin.examen.GetNote())
//document.write(etudiantsEchec + "" + etudiantsReussit);


let tabEtudiant = [YannickPoulin, MireilleLegault, PascalRousseau, StephaneTrudeau, RoxaneCharest, BenoitGagnon, MartinDurette, DidierPLantard, ArianeBeaulieu, AndreDesormeaux];

for(let i=0; i<tabEtudiant.length; i++){
	document.write("Voici l'examen de " + tabEtudiant[i].prenom + tabEtudiant[i].nom + ": " + tabEtudiant[i].examen.GetNote() + "<br>");
}





let etudiantsEchec = [];
let etudiantsReussit= [];

/*for(let i=0; i<tabEtudiant.length; i++){
	if(tabEtudiant[i].examen.GetNote() < 60){
		document.write("<br>" + tabEtudiant[i].prenom + tabEtudiant[i].nom + tabEtudiant[i].examen.GetNote())
		etudiantsEchec.push = tabEtudiant[i]; 
	}
	else{
		etudiantsReussit.push = tabEtudiant[i];
	}
}

document.write("<br>" + etudiantsReussit)
*/