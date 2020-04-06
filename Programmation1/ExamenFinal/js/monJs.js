
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

		let image = $("<img />",{
			id:"lettreImage"+i,
			src: "img/Letters/"+nomLettres[i]+"/"+nomLettres[i]+nbAleatoire+".jpg",
			class:"img-fluid lettre"
		})
		
		let imageDiv = $("<div>",{
			id:"imageTitre"+i,
			class:"col-"+nbCol+" removeClass"
		});
		
		image.appendTo(imageDiv);
		imageDiv.appendTo("#conteneurImages");
	}
	
	$('#monFormulaire').trigger("reset");
});

// Instantiate the Bootstrap carousel
$('.multi-item-carousel').carousel({
  interval: false
});


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


