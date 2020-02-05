/**
 * Created by Yannick on 04-02-2020. 
 Chapitre 7.
 */

/* 
Question 0.1:
Créez un objet nommé personne3 à l'aide de la méthode 1 et entrez vos informations personnelles.
Affichez personne 3 à l'aide de document.write sur le site Web.

Créez un objet nommé personne4 à l'aide de la méthode 2 et entrez les informations de votre voisin de classe.
Affichez personne4 à l'aide de document.write sur le site Web.

À l'aide de la méthode 1, créez un objet nommé cartePokemon1 qui contient : nom, type, hp, nomAttaque1, nomAttaque2, degatsAttaque1 et degatsAttaque2.

Donnez les valeurs de la carte de Pikachu.


À l'aide de la méthode 2, créez un objet nommé cartePokemon2 qui contient : nom, type, hp, nomAttaque1, nomAttaque2, degatsAttaque1 et degatsAttaque2.
*/

//Méthode 1
let personne3 = {
	prenom: "Yannick",
	nom: "Poulin",
	age: 42
};

document.write(personne3.prenom + " " + personne3.nom + ", " + personne3.age + " ans<br>");

//Méthode 2
let personne4 = {};
personne4.prenom = "Mireille";
personne4.nom = "Legault";
personne4.age = 38;

document.write(personne4.prenom + " " + personne4.nom + ", " + personne4.age + " ans<br><br>");

// Pokemon - Méthode 1
let cartePokemon1 = {
	nom: "Pikachu",
	type: "Éclair",
	hp: 50,
	nomAttaque1: "Agileté",
	nomAttaque2: "Thundershock",
	dgtAttaque1: 0,
	dgtAttaque2: 20
};

document.write(cartePokemon1.nom + "<br>Type: " + cartePokemon1.type + "<br>HP: " + cartePokemon1.hp + "<br>Nom attaque1: " + cartePokemon1.nomAttaque1 + "<br>Nom attaque 2: " + cartePokemon1.nomAttaque2 + "<br>Dégâts attaque 1: " + cartePokemon1.dgtAttaque1 + "<br>Dégâts attaque 2: " + cartePokemon1.dgtAttaque2 + "<br><br>");

//Greninja - Méthode 2
let greninja = {};
greninja.nom = "Greninja";
greninja.type = "Ombre";
greninja.hp = 230;
greninja.nomAttaque1 = "Haze Slash";
greninja.nomAttaque2 = "Shadowry Hunter GX";
greninja.dgtAttaque1 = 110;
greninja.dgtAttaque2 = 130;

document.write(greninja.nom + "<br>Type: " + greninja.type + "<br>HP: " + greninja.hp + "<br>Nom attaque1: " + greninja.nomAttaque1 + "<br>Nom attaque 2: " + greninja.nomAttaque2 + "<br>Dégâts attaque 1: " + greninja.dgtAttaque1 + "<br>Dégâts attaque 2: " + greninja.dgtAttaque2 + "<br>");
	