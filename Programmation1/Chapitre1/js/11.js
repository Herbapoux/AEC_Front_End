/**
 * Created by Yannick on 2019-11-04.
 */

//Le prix de vente d’une voiture neuve est la somme du prix de base, d’un montant de frais et d'un montant de profit du concessionnaire et des montants taxes de ventes. Les frais sont de 2% du prix de base et le pourcentage du concessionnaire est de 12% du prix de base. et le premier montant de taxe de vente est de 5% du sous-total du prix de base, des frais et du profit du concessionnaire et le deuxième montant de taxe est de 9,975% du prix de base, des frais et du profit du concessionnaire. Écrire l’algorithme qui lit le prix de base et qui imprime le montant de frais, le montant de commission, les deux montants de taxes et le prix de vente total, le tout sur des lignes différentes avec des messages explicites.



    //Déclaration des variables
var prixDeVente;
var prixDeBase;
var frais;
var profit;
var totalTPS;
var totalTVQ;

	//Lecture au clavier (l'usager entre une valeur)
prixDeBase = Number(prompt("Quel est le montant de base de la voiture acheté?"));

	//Les calculs

frais = prixDeBase * (2/100);
profit = prixDeBase * (12/100);
totalTPS = (prixDeBase + frais + profit) * (5/100);
totalTVQ = (prixDeBase + frais + profit) * (9.975/100);
prixDeVente = prixDeBase + frais + profit + totalTPS + totalTVQ;




	//Les affichages

alert("Prix de base: " + prixDeBase + "$" + "\nFrais: " + frais + "$" + "\nMontant de commission: " + profit + "$" + "\nTPS: " + totalTPS + "$" + "\nTVQ: " + totalTVQ + "$" + "\nPrix de vente total: " + prixDeVente + "$" );
