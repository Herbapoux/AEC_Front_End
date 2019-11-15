/**
 * Created by Yannick on 2019-15-04.
 */

//Lire deux nombres, si les deux nombres sont plus grands que 9 écrire le mot « BONJOUR » et si tel n’est pas le cas écrire « BONSOIR ».

    //Déclaration des variables
var nb1;
var nb2;

	//Lecture au clavier (l'usager entre une valeur)
nb1 = Number(prompt("Veillez entrer un nombre"));
nb2 = Number(prompt("Veillez entrer un deuxième nombre"));

	
	//Les calculs

	//Les affichages

if(nb1 > 9 && nb2 > 9){
	alert("BONJOUR");
}
	
else{
	alert("BONSOIR")
}