/**
 * Created by Yannick on 2019-29-04.
 */

/* Vous devez calculer le nombre de points de dommages de l’attaque Mad Bull GX de Tauros. L’attaque fait :

100 points de dommages si l’adversaire a moins de 60 points de vie (hp).
150 points de dommages si l’adversaire a entre 60 et 79 hp.
200 points de dommages si l’adversaire a entre 80 et 99 hp.
250 points si l’adversaire a 100 hp et plus.
 
Écrire un algorithme le code qui permet de : 

Calculer et d’afficher les points de dommages de l’attaque Mad Bull GX à partir des points de vie d’un Pokémon adversaire. 
*/

var hp;

hp = Number(prompt("Combien votre Pokémon a de points de vie"));


if(hp <= 0){
	document.write("Votre Pokémon est mort! :(");
}

else if(hp < 60 && hp > 0){
	document.write("Mad Bull Gx de Tauros vous fait 100 points de dommages");
}

else if(hp >= 60 && hp <= 79){
	document.write("Mad Bull Gx de Tauros vous fait 150 points de dommages");
}

else if(hp >= 80 && hp <= 99){
	document.write("Mad Bull Gx de Tauros vous fait 200 points de dommages");
}

else if(hp >= 100){
	document.write("Mad Bull Gx de Tauros vous fait 250 points de dommages");
}

else{
	document.write("Erreur");

}