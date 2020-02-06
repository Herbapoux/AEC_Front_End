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

/*class Note{
	
	constructor(aleatoire){
		this.aleatoire = aleatoire;
	}
	
	Resultat(){
		return(Math.floor(Math.random)*20);
	}
}
*/



class Examen{
	
	constructor(q1,q2,q3,q4,q5){
		this.q1 = q1;
		this.q2 = q2;
		this.q3 = q3;
		this.q4 = q4;
		this.q5 = q5;
	}
	
	GetNote(){
		return(????*100/20);
	}
}

class Etudiant{
	
	constructor(nom, prenom, Examen){
		this.nom = nom;
		this.prenom = prenom;
		this.Examen = Examen;
	}
	
}

let examen = new Examen(question1, question2, question3, question4, question5);
let question1 = Math.floor(Math.random() *20);
let question2 = Math.floor(Math.random() *20);
let question3 = Math.floor(Math.random() *20);
let question4 = Math.floor(Math.random() *20);
let question5 = Math.floor(Math.random() *20);


let etudiant1 = new Etudiant("Éric" + "Fontaine" + examen);
let etudiant2 = new Etudiant("Patrice" + "Couture" + examen);
let etudiant3 = new Etudiant("Roxane" + "Charest" + examen);
let etudiant4 = new Etudiant("Henry" + "Letarte" + examen);
let etudiant5 = new Etudiant("Sophie" + "Bergeron" + examen);
let etudiant6 = new Etudiant("Benoit" + "Gagnon" + examen);
let etudiant7 = new Etudiant("Mireille" + "Legault" + examen);
let etudiant8 = new Etudiant("Marie" + "Lachance" + examen);
let etudiant9 = new Etudiant("Christian" + "Perrin" + examen);
let etudiant10 = new Etudiant("Martin" + "Durette" + examen);
