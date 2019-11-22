/**
 * Created by Yannick on 2019-22-04.
 */

/**Lire l’âge d’un individu et afficher le mot : 
« Adulte » si l’âge est >= 18 ans
« Adolescent » si l’âge est compris entre 12 et 17 ans inclusivement
« Enfant » si l’âge est < 12 ans.
*/


    //Déclaration des variables
var age;

	//Lecture au clavier
age = Number(prompt("Quel est l'âge de l'individu pour savoir si c'est un adulte, un adolescent ou un enfant"));
	
	//Les calculs

	//Les affichages  

if(age >= 18){
	alert("Cet individu est un adulte");
}

else if(age >= 12 && age <= 17){
	alert("Cet individu est un adolescent");
}

else if(age < 12 && age > 0){
	alert("Cet individu est un enfant");

}

else{
	alert("Il y a une erreur dans l'entrée de l'âge de l'individu");
}