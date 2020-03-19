/**
 * Created by Yannick on 17-02-2020.
 */

/* 
QUESTION 2
*/


let nb = 1000;


for (let nbLignes = 0; nbLignes<10; nbLignes++){
	for(let nbColonnes=0; nbColonnes<20; nbColonnes++){
		document.write(nb + " ");
		nb -= 5;
	}
	document.write("<br>");
}
