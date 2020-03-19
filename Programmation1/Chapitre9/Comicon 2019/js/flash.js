//Déplacer Gauche
$( "#boutonGauche" ).click(function() {
	$('#flashID').css("left", "-=100");
});

//Déplacer Droite
$( "#boutonDroite" ).click(function() {
	$('#flashID').css("left", "+=100");
});

//Changer Image
$( "#boutonChangerImage" ).click(function() {
	if($('#flashID').attr("src") === "img/Flash1.png"){
		$('#flashID').attr("src", "img/Flash2.png");
	}
	else if($('#flashID').attr("src") === "img/Flash2.png"){
		$('#flashID').attr("src", "img/Flash1.png");
	}
});

//Enlever l'image
$( "#boutonEnleverImage" ).click(function() {
	$('#flashID').hide();
});

//Ajouter l'image
$( "#boutonAjouterImage" ).click(function() {
	$('#flashID').show();
});

//Ajouter attribut
$( "#boutonAjouterAttribut" ).click(function() {
	$('#flashID').attr("alt", "photo de Flash");
});

//Ajouter titre (Ajoutez un titre en H1 'Justice League' dans le haut de cette page avant la photo (before))
$('#boutonAjouterTitre').one('click', function(){
	$('#sousTitre').append("<h1>Justice League</h1>");
});

//Dupliquer (Flash est tellement rapide, ajoutez une autre image à côté de Flash à tous les cliques sur ce bouton!)
$( "#boutonDupliquer" ).click(function() {
	$('.flashClass:first').clone().appendTo('#imageTitre');
});

//Ralentir (Flash ralentit, enlevez une image!)
$( "#boutonRalentir" ).click(function() {
	$('.flashClass:last').remove();
});

//Téléportation (Flash se téléporte sous ces boutons et retourne en haut lorsque l'on clique de nouveau.)
$( "#boutonTeleport" ).click(function() {
	$('#imageTitre').toggle();
	$('#FlashBas').toggle();
});

//Vitesse suprême (Flash doit apparaître et disparaître toutes les 500MS)
let BoutonActif;

$("#boutonVitesseSupreme").click(function(){
	let FlashVisible;
	let nb = 0;
    let cntDwn = setInterval(function(){
		$("#boutonFinVitesseSupreme").click(function(){
			if(BoutonActif === true){
				BoutonActif = false;
				clearInterval(cntDwn);
			}
		});
		BoutonActif = true;
        if(FlashVisible === true) {
            $("#flashID").hide();
            FlashVisible = false;
        }
        else {
            //fonction blink flash
            $('#flashID').show();
            FlashVisible = true;
			nb++;
        }
		if(nb > 5 ){
			BoutonActif = false;
		}
		if(BoutonActif === false){
			clearInterval(cntDwn);
		}
    },500);
	
	//Vitesse normale (Arrêtez la vitesse suprême)
	$("#boutonFinVitesseSupreme").click(function(){
		clearInterval(cntDwn);
		$("#flashID").show();
	});
});

//Nuke (Ce bouton fait afficher une image d'explosion à la place du fond de Central City et enlève tout le reste (boutons images, etc))
$("#boutonNuke").click(function(){
	$("#centralCity").hide();
	$("#nuke").show();
})

//Bouton personnel (Codez la fonctionnalité de votre choix)

//Bouton personnel 2 (Codez la fonctionnalité de votre choix)


