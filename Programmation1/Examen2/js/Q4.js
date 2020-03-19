/**
 * Created by Yannick on 17-02-2020.
 */

/* 
QUESTION 4
*/

//activité
class Activite{
	constructor(nom, cout){
		this.nom = nom;
		this.cout = cout;
	}
}

//voyage
class Voyage{
	constructor(destination, prix, tabActivite){
		this.destination = destination;
		this.prix = prix;
		this.tabActivite = tabActivite;
	}
	//cout total du voyage
	CoutTotal(){
		let coutTotal = 0;
		for(let i=0; i<tabActivite.length; i++){
			coutTotal += tabActivite[i].cout;
		}
		return (coutTotal + this.prix);
	}
}
//personne
class Personne{
	constructor(nom, voyage){
		this.nom = nom;
		this.voyage = voyage;
	}
}

//variable activités
let GoldenKnightsHockey = new Activite ("Golden Knighs hockey", 125);
let RaidersFootball = new Activite ("Raiders football", 200);
let TournoiPoker = new Activite ("Tournoi de poker", 500);

//tableau de toutes les activités
let tabActivite = [GoldenKnightsHockey, RaidersFootball, TournoiPoker];

//variable du voyage
let LasVegas = new Voyage ("Las Vegas", 400, tabActivite);

//variable personne
let ShanyCarle = new Personne("Shany Carle", LasVegas);

//diminutif pour l'écriture dans le document.write
let Shany = ShanyCarle.nom;
let destinationVoyage = ShanyCarle.voyage.destination;
let activite1 = ShanyCarle.voyage.tabActivite[0].nom;
let activite2 = ShanyCarle.voyage.tabActivite[1].nom;
let activite3 = ShanyCarle.voyage.tabActivite[2].nom;
let coutActivite1 = ShanyCarle.voyage.tabActivite[0].cout;
let coutActivite2 = ShanyCarle.voyage.tabActivite[1].cout;
let coutActivite3 = ShanyCarle.voyage.tabActivite[2].cout;
let billetAvion = ShanyCarle.voyage.prix;
let CoutTotalVoyage = ShanyCarle.voyage.CoutTotal();

//visuel 
document.write(Shany + "<br>Voyage à " + destinationVoyage + "<br>" + "<br>Activité:<br>" + activite1 +": " + coutActivite1  + "$<br>" + activite2 +": " + coutActivite2  + "$<br>" + activite3 +": " + coutActivite3  + "$<br>" + "<br>Billet d'avion: " + billetAvion + "$" + "<br>Cout total du voyage: " + CoutTotalVoyage + "$");
