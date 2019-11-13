/**
 * Created by Yannick on 2019-11-04.
 */

//Faire l’algorithme qui permet de calculer la facture d’un client. Cette facture contient la date, le montant de chacun des 3 articles achetés, les taxes de vente et le grand total de la facture. Vous demandez à l'usager la date et le montant de chacun des 3 articles achetés. Le montant de TPS est de 5% et la TVQ est de 9.975%. Vous affichez la date, les 2 montants de taxes et le grand total. 


    //Déclaration des variables
var date;
var article1;
var article2;
var article3;
var total;
var montantTaxes;
var grandTotal;

	//Lecture au clavier (l'usager entre une valeur)
date = prompt("Veillez entrer la date de vos achats svp");
article1 = Number(prompt("veillez entrer le prix de l'article 1"));
article2 = Number(prompt("veillez entrer le prix de l'article 2"));
article3 = Number(prompt("veillez entrer le prix de l'article 3"));



	//Les calculs

total = article1 + article2 + article3;
montantTaxes = (total * (5/100)) + (total * (9.98/100));
grandTotal = total + montantTaxes;

	//Les affichages

alert("En date du " + date + " vous avez payer en taxes " + montantTaxes + "$" + " pour un grand total de " + grandTotal + "$");