/**
 * Created by Yannick on 2019-11-05.
 */

/**Créez un convertisseur d'unités de mesures.
L'usager entre les dimensions de son terrain en pi2.
Vous affichez les dimensions en m2, arpents2, hectares.
*/

    //Déclaration des variables
var pi2;
var m2;
var arpents2;
var hectares;

	//Lecture au clavier (l'usager entre une valeur)
pi2 = Number(prompt("Veillez entrer les dimensions de votre terrain en pi2 svp"));

	//Les calculs
m2 = pi2 / 10.764;
arpents2 = pi2 / 36799;
hectares = pi2 / 107639;

	//Les affichages
alert("Votre terrain de " + pi2 + " pi2 correspond à:" + "\nm2: " + m2 + "\narpents2: " + arpents2 + "\nhectares: " + hectares);

