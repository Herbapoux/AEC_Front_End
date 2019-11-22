/**
 * Created by Yannick on 2019-20-04.
 */

//14. Lire 3 nombres A, B et C différents. Trouver et afficher le plus petit et le plus grand.

    //Déclaration des variables
var nombreA;
var nombreB;
var nombreC;

	//Lecture au clavier
nombreA = Number(prompt("Entrez le nombre A"));
nombreB = Number(prompt("Entrez le nombre B qui doit être différent au nombre A"));
nombreC = Number(prompt("Entrez un nombre C qui doit être différent des nombre A et B"));
  
	//Les calculs
 
	//Les affichages  
if(nombreA === nombreB || nombreA === nombreC || nombreB === nombreC){
	alert("Erreur: Vous devez entrer 3 nombres différents");
}

else if(nombreA < nombreB && nombreA < nombreC){
	if(nombreB < nombreC){
		alert("Le plus petit des nombres est " + nombreA + "\nLe plus grand des nombres est " + nombreC);
	}
	else if(nombreC < nombreB){
		alert("Le plus petit des nombres est " + nombreA + "\nLe plus grand des nombres est " + nombreB);
	}
}

else if(nombreB < nombreC){
	if(nombreA < nombreC){
		alert("Le plus petit des nombres est " + nombreB + "\nLe plus grand des nombres est " + nombreC);
	}
	else if(nombreC > nombreA){
		alert("Le plus petit des nombres est " + nombreB + "\nLe plus grand des nombres est " + nombreC);
	}
}

else if(nombreC < nombreB){
	if(nombreA < nombreB){
		alert("Le plus petit des nombres est " + nombreC + "\nLe plus grand des nombres est " + nombreB);
	}
	else if(nombreA > nombreB){
		alert("Le plus petit des nombres est " + nombreC + "\nLe plus grand des nombres est " + nombreA);
	}
}

else{
	alert("Il y a une erreur sur l'entré de vos nombres");
}