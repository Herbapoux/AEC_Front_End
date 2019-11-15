/**
 * Created by Yannick on 2019-15-04.
 */

//9.    Faire un programme qui lit un nom d’utilisateur et un mot de passe. Si le nom d’utilisateur est “admin” et le mot de passe “12345”, affichez le message suivant : « Bonjour [nom de l’utilisateur] ». Si les informations ne sont pas correctes, affichez le message suivant : « Votre nom d’utilisateur ou votre mot de passe est invalide ».


    //Déclaration des variables
var nomUtilisateur;
var motDePasse;

	//Lecture au clavier
	nomUtilisateur = prompt("Veuillez entrer votre nom d'utilisateur svp");
	motDePasse = Number(prompt("Veillez entrer votre mot de passe svp"));
	
	//Les calculs


	//Les affichages
		if(nomUtilisateur === "admin" && motDePasse === 12345){
			alert("Bonjour " + nomUtilisateur);
		}
		
		else{
			alert("Votre nom d’utilisateur ou votre mot de passe est invalide")
		}
	
