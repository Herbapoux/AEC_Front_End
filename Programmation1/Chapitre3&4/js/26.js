/**
 * Created by Yannick on 15-01-2020.
 */

/* 
Question 26:
Le jeu de carte Yablon révisé. 

Dans ce jeu, le croupier retourne d’abord deux cartes sur la table. Le joueur doit ensuite parier si la valeur de la prochaine carte (la troisième) sera ou non classée entre les deux premières cartes. S’il remporte son pari, il gagne la partie, sinon il perd.

Nous proposerons ici une version quelque peu modifiée du jeu. Pour rendre les paris plus intéressants, le joueur devra parier tant qu’il gagne (tant que ses prédictions sont correctes). 

Votre algorithme doit donc générer et afficher deux nombres aléatoires de 1 à 13. Il doit ensuite demander à l’utilisateur de faire ses paris. Lorsque l’utilisateur perd, le nombre de prédictions remportées est affiché.  
 */


var carte1;
var carte2;
var carte3;
var nbPrediction = 0;
var gagner = true;
var prediction;

while (gagner){
	carte1 = Math.floor(Math.random()*13 + 1);
	carte2 = Math.floor(Math.random()*13 + 1);

	prediction = prompt("La carte 1 veut: " + carte1 + "\nLa carte 2 vaut: " + carte2 + ". " + "\nCroyez-vous que votre carte est sera entre les deux? \nO (Oui) \nN (Non)");
	
	carte3 = Math.floor(Math.random()*13+1);
	prediction = prediction.toUpperCase();
	alert("votre carte est de " + carte3);
	
	if((carte3<carte1 && carte3>carte2) || (carte3>carte1 && carte3<carte2)){
		if(prediction === "O"){
			alert(" Bravo!");
			nbPrediction ++
		}
		else if(prediction === "N"){
			alert(" Perdu!");
			gagner = false;
		}
		else{
			document.write("Erreur 1");
			gagner = false;
		}
	}
	else if((carte3<carte1 && carte3<carte2) || (carte3>carte1 && carte3>carte2)){
		if(prediction === "N"){
			alert(" Bravo!");
			nbPrediction ++
		}
		else if(prediction === "O"){
			alert(" Perdu!");
			gagner = false;
		}
		else{
			alert("Erreur 2");
			gagner = false;
		}
	}
	else{
			alert("Erreur 3");
			gagner = false;
	}
}
document.write("Vous avez eu " + nbPrediction + " bonnes prédictions.");

