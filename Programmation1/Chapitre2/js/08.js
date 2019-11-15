/**
 * Created by Yannick on 2019-15-04.
 */

//Faire un programme qui lit le taux horaire et le nombre d’heures travaillées d’un employé. Affichez son salaire. (Attention, il est payé le double de son taux horaire pour toutes les heures supplémentaires travaillées. Une semaine de travail normale est de 40 heures.


    //Déclaration des variables
var tauxHoraires;
var nbHeures;
var salaire;
var tempsDouble;

	//Lecture au clavier
	tauxHoraires = Number(prompt("Veillez entrer votre taux horaire"));
	nbHeures = Number(prompt("Veuillez entrer le nombre d'heures travaillées"));
	
	//Les calculs
	salaire = (tauxHoraires * nbHeures);
	tempsDouble = (nbHeures - 40) * (2 * tauxHoraires) + (tauxHoraires * 40);

	//Les affichages
		if(nbHeures <= 40){
			alert("Votre salaire est de " + salaire + "$");
		}
		else if(nbHeures > 40){
				alert("Votre salaire est de " + tempsDouble + "$"); 
			}
		else{
			alert("Erreur sur la transcription de vos données")
		}
