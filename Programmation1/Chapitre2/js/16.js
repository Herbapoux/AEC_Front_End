/**
 * Created by Yannick on 2019-22-04.
 */

/**16. Lire 2 nombres au clavier.
        Si ces 2 nombres sont :
            supérieurs ou égaux à 10, affichez leur somme 
            inférieurs à 10, affichez leur produit 
        Si l'un des deux nombres est supérieur ou égal à 10 et l'autre inférieur à 10, affichez la différence entre les deux nombres.

*/


    //Déclaration des variables
var nombre1;
var nombre2;
var resultat;

	//Lecture au clavier
nombre1 = Number(prompt("Veillez entrer le premier nombre"));
nombre2 = Number(prompt("Veillez entrer le deuxième nombre"));
  
	//Les calculs

	//Les affichages  
if(nombre1 >= 10){
	if(nombre2 >= 10){
		resultat = nombre1 + nombre2;
		alert("Les deux nombres sont supérieurs à 10 donc on fait une sommes et le résultat est de: " + resultat);
	}
	else if(nombre2 < 10){
		resultat = nombre1 - nombre2;
		alert("Le premier nombre est supérieur ou égal à 10 et le deuxième est inférieur à 10 donc on fait leur différence et le résultat est de: " + resultat);
	}
	else{
		alert("Il y a une erreur dans l'entrée de vos nombre");
	}
}

else if(nombre1 < 10){
	if(nombre2 < 10){
		resultat = nombre1 * nombre2;
			alert("Les deux nombres sont inférieurs à 10 donc on fait leur produit et le résultat est de: " + resultat);
	}
	else if(nombre2 >= 10){
		resultat = nombre2 - nombre1;
		alert("Le deuxième nombre est supérieur ou égal à 10 et le premier est inférieur à 10 donc on fait leur différence et le résultat est de: " + resultat);
	}
	else{
		alert("Il y a une erreur dans l'entrée de vos nombre");
	}
}

else{
	alert("Il y a une erreur dans l'entrée de vos nombre");
}
