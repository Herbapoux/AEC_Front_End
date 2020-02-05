/**
 * Created by Yannick on 05-02-2020. 
 Chapitre 7.
 */

//PAGE 2

/* :
Créez une classe Cylindre qui contient deux propriétés : 
une hauteur et un rayon.

La classe Cylindre doit contenir une méthode GetVolume() qui retourne son volume.

Créez 2 cylindres avec les valeurs de votre choix et testez votre méthode GetVolume(). 

Créez une classe Boite qui contient un tableau de Cylindres.

Remplissez la boîte de 5 cylindres de votre choix. 

Créez une méthode GetVolumeBoite() qui permet d’afficher le volume total des 5 cylindres.  

*/

class Cylindre{
	
	constructor(hauteur, rayon){
		this.hauteur = hauteur;
		this.rayon = rayon;
	}
	
	GetVolume(){
		return(Math.PI * (this.rayon*this.rayon) * this.hauteur); 
	}
}

class Boite{
	
	constructor(nom, cyl1, cyl2, cyl3, cyl4, cyl5){
		this.nom = nom;
		this.cyl1 = cyl1;
		this.cyl2 = cyl2;
		this.cyl3 = cyl3;
		this.cyl4 = cyl4;
		this.cyl5 = cyl5;
	}
	
	VolumeTotal(){
		return(this.cyl1.GetVolume() + this.cyl2.GetVolume() + this.cyl3.GetVolume() + this.cyl4.GetVolume() + this.cyl5.GetVolume());
	}
}

let cylindre1 = new Cylindre(1,2);
let cylindre2 = new Cylindre(4,3);
let cylindre3 = new Cylindre(1,5);
let cylindre4 = new Cylindre(2,2);
let cylindre5 = new Cylindre(3,1);

let boiteDeCylindre = new Boite("Boîte de cylindres", cylindre1, cylindre2, cylindre3, cylindre4, cylindre5);

document.write(cylindre1.GetVolume() + " " + cylindre2.GetVolume() + "<br>");
document.write("Voici la sommes des volumes de tous les cylindres: " + boiteDeCylindre.VolumeTotal())
