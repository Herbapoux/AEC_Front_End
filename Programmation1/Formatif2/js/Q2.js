/**
 * Created by Yannick on 07-02-2020. 
 Examen Formatif.
 */

//Question 2

/* :
Utilisez une variable nommée nb et 2 boucles for imbriquées pour produire le résultat suivant à l’aide  d’un document.write.
*/

let nb = 0;

for(let ligne=0; ligne<10; ligne++){
	for(let i=0; i<20; i++){
		document.write(nb + " ");
		nb += 5;
	}
	document.write("<br>");
}