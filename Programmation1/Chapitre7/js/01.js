/**
 * Created by Yannick on 04-02-2020. 
 Chapitre 7.
 */

//PAGE 1

/* :
Créez une classe JoueurHockey.
nom
nbButs
nbPasses

Instanciez :
Sydney Crosy 454 buts 787 passes
Mario Lemieux 690 buts 1033 passes
Jaromir Jagr 766 buts 1155 passes

Créez une méthode nommée Total qui affiche le nombre de points (buts + passes)

Créez une classe Equipe qui contient 3 joueurs

Instanciez votre équipe avec vos 3 joueurs

Créez une méthode qui s’appelle AfficherAlignement() qui affiche tous les joueurs d’une équipe.

Créez une méthode qui s’appelle AfficherPointsTotaux() qui affiche le total de points des 3 joueurs de l’équipe (454+787+690+1033+766+1155).

*/

class JoueurHockey{
	
	constructor(nom, nbButs, nbPasses){
		this.nom = nom;
		this.nbButs = nbButs;
		this.nbPasses = nbPasses;
	}
	
	Total(){
		return(this.nbButs + this.nbPasses);
	}
}

class Equipe{
	
	constructor(nom, j1, j2, j3){
		this.nom = nom;
		this.joueur1 = j1;
		this.joueur2 = j2;
		this.joueur3 = j3;
	}
	
	AfficherAlignement(){
		return(this.joueur1.nom + " " + this.joueur2.nom + " " + this.joueur3.nom);
	}
	
	AfficherPointsTotaux(){
		return(this.joueur1.Total() + this.joueur2.Total() + this.joueur3.Total());
	}
}

let SydneyCrosby = new JoueurHockey("Sydney Crosby", 454, 787);
let MarioLemieux = new JoueurHockey("Mario Lemieux", 690, 1033);
let JaromirJagr = new JoueurHockey("Jaromir Jagr", 766, 1155);
let Pingouins = new Equipe("Pingouins de Pittsburg", SydneyCrosby, MarioLemieux, JaromirJagr);

document.write(SydneyCrosby.Total() + " points<br>");
document.write(Pingouins.AfficherPointsTotaux() + " points pour les " + Pingouins.nom + "<br>");
document.write(Pingouins.AfficherAlignement());


