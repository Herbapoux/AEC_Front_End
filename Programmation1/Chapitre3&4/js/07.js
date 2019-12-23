/**
 * Created by Yannick on 13-12-2019.
 */

/* 
Question 07:
Demandez un mot à l’usager, bouclez tant que le mot n’est pas patate.
Comptez et affichez le nombre de mots entrés avant le mot patate.
*/

var motUsager;
var nbMots = 0;



motUsager = prompt("Une nouvelle étude fake mentionne qu'il y a un super légume qui guérit la bêtise humaine. Quel est ce super légume selon vous?");

while(motUsager.toUpperCase() != "PATATE"){
	nbMots++;
	motUsager = prompt("Entrez un autre mot");
}

document.write("Bravo! C'est bien la patate alors mangez autant de frites que vous voulez!<br>Vous avez tenté " + nbMots + " mots avant de trouver la patate");

