/**
 * Created by Yannick on 17-12-2019. Chapitre 6.
 */

/* 
Question 07:
À l’aide d’une boucle, créez un tableau de 1000 valeurs contenant vrai ou faux (boolean). Ces valeurs doivent être aléatoires. Ensuite, à l’aide d’une autre boucle, comptez le nombre de vrai et de faux et faites-les afficher.
*/

//Parti 1

var vraiouFaux = [];
var nbVrai = 0;
var nbFaux = 0;

for (var i=0; i<1000; i++){
	vraiouFaux[i] = Boolean(Math.floor(Math.random()*2));
	document.write(vraiouFaux[i] + "<br>");
	if(vraiouFaux[i] === true ){
		nbVrai++
	}
	else{
		nbFaux++;
	}
}

document.write("Nombre de vrai = " + nbVrai +"<br>" + "Nombre de faux = " + nbFaux);

	