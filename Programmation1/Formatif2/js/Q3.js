/**
 * Created by Yannick on 07-02-2020. 
 Examen Formatif.
 */

//Question 3

/* :
Créez un tableau nommé tabChance qui contient 100 nombres aléatoires entre 1 et 200. (4 points)
Demandez un nombre à l’usager entre 1 et 200. (1 point)
Parcourez le tableau pour savoir si le nombre se trouve dans le tableau et confirmez la réponse à l’usager. (5 points)
*/

let tabChance = [];
let usager;
let trouver = false;

for(let i=0; i<100; i++){
	tabChance[i] = Math.floor(Math.random() * 200 +1);
	document.write(tabChance[i] + ", ");
}

usager = Number(prompt("Écrivez un nombre entre 1 et 200"));

for(let recherche=0; recherche<tabChance.length; recherche++){
	if(usager === tabChance[recherche]){
		trouver = true;
	}
}

if(trouver){
	document.write("<br>Vous l'avez trouvé: " + usager);
}

else{
	document.write("<br>Vous ne l'avez pas trouvé. Vous recherchiez le " + usager);
}
