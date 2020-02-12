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
	constructor(noteQuestions){
		this.noteQuestions = noteQuestions
	}
	
	GetNote(){
		this.noteQuestion * 100 /20;
	}
	
	GetNoteExamen(){
		for(let j=0; j<noteQuestions.length; j++){
			noteQuestions[j] = Math.floor(Math.random() *20 +.5);
		}
	}
}

class Etudiant{
	constructor(nom, prenom, examen){
		this.nom = nom;
		this.prenom = prenom;
		this.examen = examen;
	}
}

let YannickPoulin = new Etudiant("Poulin", "Yannick", Examen);
let MireilleLegault = new Etudiant("Legault", "Mireille", Examen);
let PascalRousseau = new Etudiant("Rousseau", "Pascal", Examen);
let StephaneTrudeau = new Etudiant("Trudeau", "Stephane", Examen);
let RoxaneCharest = new Etudiant("Charest", "Roxane", Examen);
let BenoitGagnon = new Etudiant("Ganon", "Benoit", Examen);
let MartinDurette = new Etudiant("Durette", "Martin", Examen);
let DidierPLantard = new Etudiant("Plantard", "Didier", Examen);
let ArianeBeaulieu = new Etudiant("Beaulieu", "Ariane", Examen);
let AndreDesormeaux = new Etudiant("Desormeaux", "André", Examen);

document.write("La note de Yannick Poulin est de : " + YannickPoulin.GetNoteExamen())

let etudiants = [YannickPoulin, MireilleLegault, PascalRousseau, StephaneTrudeau, RoxaneCharest, BenoitGagnon, MartinDurette, DidierPLantard, ArianeBeaulieu, AndreDesormeaux];

let noteQuestions = [q1, q2, q3, q4, q5];

let monExamen = new Examen (noteQuestions);

