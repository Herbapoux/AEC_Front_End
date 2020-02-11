/**
 * Created by Yannick on 06-02-2020. 
 Chapitre 7.
 */

//PAGE 4

/* :
Créez un objet Guerrier qui possède 5 propriétés. 
Les points de vie, la force, l’agilité, la chance et la précision.
La chance du guerrier est un nombre aléatoire de 0 à 1 qui doit être recalculée après chaque attaque.
Le guerrier possède la fonction Attaquer() qui retourne un nombre de points de dégâts = (force*précision+agilité)*chance
*/

let Guerrier ={
	pv :5,
	force : 3,
	agilete : 8,
	precision : 2,
	chance : Math.floor(Math.random()+.5)	
}

for(let attaque in Guerrier){
	
}

document.write(Guerrier.chance);
