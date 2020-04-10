let nomLettres;

//bouton GO & Press key enter
$("#userName").keydown(function(event){ 
	if(event.keyCode === 13){
		event.preventDefault();
		$("#boutonGo").click();
	}
}); 

//gestion des lettres avec prise aléatoire de la lettre entrée
$( "#boutonGo" ).click(function() {
	$("#conteneurLettres").removeClass("d-none");
	$(".removeClass").remove();
	
	
	nomLettres = $("#userName").val().split('');
	let nbCol = Math.floor(12/nomLettres.length);
	
	if(nomLettres.length<3 || nomLettres.length>12){
		alert("Vous devez entrer un nom entre 3 et 12 lettres");
		$('#monFormulaire').trigger("reset");
		$("#conteneurLettres").addClass("d-none");
		{return;}
	}

	for(let i=0; i<nomLettres.length; i++){
		//lettre aléatoire
		let nbAleatoire = Math.floor(Math.random() * 5+1);
		nomLettres[i] = nomLettres[i].toUpperCase();
		//gestion des caractères spéciaux
		if(nomLettres[i] === "*"){
			nomLettres[i] = "CS";
		}
		else if(nomLettres[i] === "É" || nomLettres[i] === "È" || nomLettres[i] === "Ê" || nomLettres[i] === "Ë"){
			nomLettres[i] = "E";
		}
		else if(nomLettres[i] === "À"){
			nomLettres[i] = "A";
		}
		else if(nomLettres[i] === "Ù"){
			nomLettres[i] = "U";
		}
		//code de gestion des lettres
		let image = $("<img />",{
			id:"lettreImage"+i,
			src: "img/Letters/"+nomLettres[i]+"/"+nomLettres[i]+nbAleatoire+".jpg",
			class:"img-fluid lettre",
			onclick: "fOuvreModal("+i+",'"+nomLettres[i]+"')"
			
		})
		
		let imageDiv = $("<div>",{
			id:"imageTitre"+i,
			class:"col-"+nbCol+" removeClass"
		});
		
		image.appendTo(imageDiv);
		imageDiv.appendTo("#conteneurLettres");
	}
	
	$('#monFormulaire').trigger("reset");
	
	//Hover
	$('.img-fluid').hover(function () {
		$('.img-fluid').css("cursor", "pointer");
	});
});


//ouvre modal - changement de lettre
function fOuvreModal(LettrePosition,Lettre){

	for(let j=1; j<6; j++){
		$("#image"+j).attr("src", "img/Letters/"+Lettre+"/"+Lettre+j+".jpg");
		$("#image"+j).attr("alt", LettrePosition);
	}
	$("#modalLettres").modal("show");
}

$('#carousel-example img').click(function(){
	let aInformation = this.alt;
	
	$("#lettreImage"+aInformation).attr("src", this.src);
	
	$("#modalLettres").modal("hide");
});

//choix background image
$( ".cercle" ).click(function() {
	let imageFond = $(this).css( "background-image" );
	$( ".backgroundConteneur" ).css("background-image", imageFond);
});

//Carousel
$('#carousel-example').on('slide.bs.carousel', function (e) {

    let $e = $(e.relatedTarget);
    let idx = $e.index();
    let itemsPerSlide = 4;
    let totalItems = $('.carousel-item').length;
 
    if (idx >= totalItems-(itemsPerSlide-1)) {
        let it = itemsPerSlide - (totalItems - idx);
        for (let i=0; i<it; i++) {
            // append slides to end
            if (e.direction === "left") {
                $('.carousel-item').eq(i).appendTo('.carousel-inner');
            }
            else {
                $('.carousel-item').eq(0).appendTo('.carousel-inner');
            }
        }
    }
});

