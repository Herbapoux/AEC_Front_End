/**
 * Created by Yannick on 2019-11-04.
 */

//Lire un nombre et afficher le carré et le cube de ce nombre.

    //Déclaration des variables
var nombre;
var carre;
var cube;

//Lecture au clavier (l'usager entre une valeur)
nombre = Number(prompt("Veuillez entrer un nombre svp : "));

//Les calculs
carre = nombre * nombre;
cube = nombre * nombre * nombre;

//Les affichages
alert("Le carre du nombre est : " + carre);
console.log("Le cube du nombre est " + cube);