
let nomLettres = [];

$("#userName").keydown(function(event){ 
	if(event.keyCode === 13){
		event.preventDefault();
		$("#boutonGo").click();
	}
}); 

$( "#boutonGo" ).click(function() {
	
	$(".removeClass").remove();
	
	nomLettres = $("#userName").val();
	let nbCol = Math.floor(12/nomLettres.length);
	
	if(nomLettres.length<3 || nomLettres.length>12){
		alert("Vous devez entrer un nom entre 3 et 12 lettres");
		$('#monFormulaire').trigger("reset");
		{return;}
	}


	for(let i=0; i<nomLettres.length; i++){
		
		let nbAleatoire = Math.floor(Math.random() * 5+1);

		if(nomLettres[i] === "*"){
			nomLettres[i] = "CS";
			alert(nomLettres[i]);
		}

		let image = $("<img />",{
			id:"lettreImage"+i,
			src: "img/Letters/"+nomLettres[i]+"/"+nomLettres[i]+nbAleatoire+".jpg",
			class:"img-fluid"
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
