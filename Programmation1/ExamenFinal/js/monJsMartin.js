

let nomLettres;


$("#userName").keydown(function(event){ 
	if(event.keyCode === 13){
		event.preventDefault();
		$("#boutonGo").click();
	}
}); 

$( "#boutonGo" ).click(function() {
	
	$(".removeClass").remove();
	
	nomLettres = $("#userName").val().split('');
	let nbCol = Math.floor(12/nomLettres.length);
	
	if(nomLettres.length<3 || nomLettres.length>12){
		alert("Vous devez entrer un nom entre 3 et 12 lettres");
		$('#monFormulaire').trigger("reset");
		{return;}
	}

	for(let i=0; i<nomLettres.length; i++){
		
		let nbAleatoire = Math.floor(Math.random() * 5+1);
		nomLettres[i] = nomLettres[i].toUpperCase();

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

		let MaLettreDiv = "<div id='imageTitre"+i+"' class='col-"+nbCol+" removeClass'>"+
							"<a href=\"javascript:fOuvreModal("+i+",'"+nomLettres[i]+"','"+nbAleatoire+"')\">"+
							"<img src='img/Letters/"+nomLettres[i]+"/"+nomLettres[i]+nbAleatoire+".jpg' id='lettreImage"+i+"' class='img-fluid' />"+
							"</a>"+
						  "</div>"
		
		$("#conteneurLettres").append(MaLettreDiv);
//		
//		let image = $("<img />",{
//			id:"lettreImage"+i,
//			src: "img/Letters/"+nomLettres[i]+"/"+nomLettres[i]+nbAleatoire+".jpg",
//			class:"img-fluid lettre LettreActive_"+nomLettres[i]+" LettreSelectionne_"+nbAleatoire
//		})
//		
//		let imageDiv = $("<div>",{
//			id:"imageTitre"+i,
//			class:"col-"+nbCol+" removeClass"
//		});
		
//		image.appendTo(imageDiv);
//		imageDiv.appendTo("#conteneurLettres");
	}
	
	$('#monFormulaire').trigger("reset");
	
	//Hover
	
	$('.lettre').hover(function () {
		$('.lettre').css("cursor", "pointer");
	});
	
	//changement de lettre
    let premierClick = true;
    let idImage1;
    let idImage2;
    let srcImage1;
    let srcImage2;
	
//    $('.lettre').click(function() {
//		$("#modalLettres").modal("show");
//		
//		console.log()
//		
//		
//		//C'est ici que ça coin au niveau de la fontion. nomLettres doit être remplacé par la lettre en quesiton
////		for(let j=1; j<6; j++){
////			$("#image"+j).attr("src", "img/Letters/"+nomLettres[2]+"/"+nomLettres[2]+j+".jpg");
////		}
////		
////		if(premierClick){
////           idImage1 = $(this).attr("id");
////           srcImage1 = $(this).attr("src");
////           premierClick = false;
////       }
////       else{
////           idImage2 = $(this).attr("id");
////           srcImage2 = $(this).attr("src");
////
////           $("#" + idImage1).attr("src",srcImage2);
////           $("#" + idImage2).attr("src",srcImage1);
////           premierClick = true;
////       }
//
//    });
});



function fOuvreModal(LettrePosition,Lettre,LettreSelectionner)
{
	console.log(Lettre);
	console.log(LettreSelectionner);
	
	for(let j=1; j<6; j++){
		$("#image"+j).attr("src", "img/Letters/"+Lettre+"/"+Lettre+j+".jpg");
	}
	
	
	$("#modalLettres").modal("show");
}

$('#carousel-example img').click(function() {
	console.log(this.id);
});
	

//Hover images



/*
    Carousel
*/






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


/*
function OuvreModalInfo(TitreModal,LienFichierModal)
{
    $("#ModalInfo .modal-title").html(TitreModal);
    $("#ModalInfo .modal-body").load(LienFichierModal);
    $('#ModalInfo').modal('toggle')
}

function OuvreModalHoraire(TitreModal,LienFichierModal)
{
    $("#ModalHoraire .modal-title").html(TitreModal);
    $("#ModalHoraire .modal-body").load(LienFichierModal);
    $('#ModalHoraire').modal('toggle')
}

$("#natationShow").hover(function () {
    $('.containerFiltre').css("cursor", "pointer");

    $('#natationHide').show();
    $('#natationShow').hide();
});
*/

