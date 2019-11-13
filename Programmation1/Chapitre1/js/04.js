/**
 * Created by Yannick on 2019-11-04.
 */

//Calculer le salaire brut d’un employé. Il est payé à l’heure et les données concernant le taux horaire et le nombre d’heures travaillées sont fournies en entrée. 

    //Déclaration des variables
var heures;
var tauxHoraires;
var salaireBrute;

	//Lecture au clavier (l'usager entre une valeur)
heures = Number(prompt("Entrez le nombre d'heures travaillées svp: "));
tauxHoraires = Number(prompt("Entrez votre taux horaires svp: "));

	//Les calculs

salaireBrute = heures * tauxHoraires;

	//Les affichages

alert("Votre slaire brute est de: " + salaireBrute);
