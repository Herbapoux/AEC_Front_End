/**
 * Created by Yannick on 16-12-2019. Chapitre 6.
 */

/* 
Question 02:
Créez un tableau qui contient les 12 mois de l’année en assignant chaque cellule manuellement et affichez-le à l’aide d’une boucle Pour.
Ex : tabMois[0] = “janvier”;
*/

var tableMois=[];

tableMois[0] = "Janvier";
tableMois[1] = "Février";
tableMois[2] = "Mars";
tableMois[3] = "Avril";
tableMois[4] = "Mai";
tableMois[5] = "Juin";
tableMois[6] = "Juillet";
tableMois[7] = "Août";
tableMois[8] = "Septembre";
tableMois[9] = "Octobre";
tableMois[10] = "Novembre";
tableMois[11] = "Décembre";

for(var i=0; i<tableMois.length; i++){
	document.write(tableMois[i] + "<br>")
}






