/**
 * Created by Yannick on 2019-11-05.
 */

/**Lire les quatre éléments d’information suivants : 
le nom de l’étudiant, 
la note de laboratoire, (compte pour 20%)
la note de l’examen de mi-session  (compte pour 30%)
la note de l’examen de fin de session. (compte pour 50%)

Toutes les notes lues sont sur 100. 

Affiche le nom suivi des trois notes lues qui ont été ramenées sur le pourcentage demandé ci-dessus, et de la note finale. Le tout sur des lignes différentes accompagné de messages clairs.
*/

    //Déclaration des variables
var nom;
var miSession;
var finSession;
var laboratoire;

	//Lecture au clavier (l'usager entre une valeur)
nom = prompt("Veillez entrer votre nom svp");
miSession = Number(prompt("Entrez votre note de l'examen de mi-session sur le maximum de 30 points svp"));
finSession = Number(prompt("Entrez votre note de votre examen de fin de session sur le maximum de 50 points svp"));
laboratoire = Number(prompt("Entrez votre note de laboratoire sur le maximum de 20 points svp"));

	//Les calculs
miSession = miSession * 100 / 30;
finSession = finSession * 100 / 50;
laboratoire = laboratoire * 100 / 20;

	//Les affichages
alert(nom + "\nNotes" + "\nLaboratoire: " + laboratoire + "\nExamen de mi-session: " + miSession + "\nExamen de fin de session: " + finSession);