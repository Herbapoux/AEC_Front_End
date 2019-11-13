/**
 * Created by Yannick on 2019-11-05.
 */

/**Fonction quadratique.
L'usager entre A,B,C,X, vous trouvez Y.
Rappel : Y = AX2 + BX + C 
*/

    //Déclaration des variables
var A;
var B;
var C;
var X;
var Y;

	//Lecture au clavier (l'usager entre une valeur)
A = Number(prompt("Veillez entrer la valeur de A svp"));
B = Number(prompt("Veillez entrer la valeur de B svp"));
C = Number(prompt("Veillez entrer la valeur de C svp"));
X = Number(prompt("Veillez entrer la valeur de X svp"));

	//Les calculs
Y = (A*(X*X)) + (B*X) + C;


	//Les affichages
alert("La valeur de Y est de " + Y);
