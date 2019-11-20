/**
 * Created by Yannick on 2019-20-04.
 */

//Lire 2 nombres A et B différents. Trouver et afficher le plus petit et le plus grand. Si les deux nombres sont identiques, affichez un message d'erreur à l'utilisateur.

    //Déclaration des variables
var nombreA;
var nombreB;

	//Lecture au clavier
nombreA = Number(prompt("Entrez le nombre A"));
nombreB = Number(prompt("Entrez le nombre B qui doit être différent au nombre A"));

	//Les calculs

	//Les affichages

if(nombreA < nombreB){
	alert("Le plus petit des nombres est " + nombreA + "\nLe plus grand des nombres est " + nombreB);
}
else if(nombreA > nombreB){
	alert("Le plus petit des nombres est " + nombreB + "\nLe plus grand des nombres est " + nombreA);
}
else if(nombreA === nombreB){
	alert("Il y a une erreur car les deux nombres sont identiques");
}
else{
	alert("Il y une erreur dans l'inscription de vos nombres");
}
