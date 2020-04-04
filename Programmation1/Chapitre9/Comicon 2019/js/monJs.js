document.getElementById("username").addEventListener("input", function() {
	if(this.value === "SLAY" || this.value === "Test"){
		$("#usernameid").html("Non disponible");
		$("#usernameid").css("color","red");
	}
	else{
		$("#usernameid").html("Disponible");
		$("#usernameid").css("color","green");
	}
});


document.getElementById("password").addEventListener("input", function() {
	let motPasse = $("#password").val();
	
	if(motPasse.length<6){
		$("#passwords").html("Faible");
		$("#passwords").css("color","red");
	}
	else if(motPasse.length>9 && contientMajuscule(motPasse) && contientChiffre(motPasse)){
		$("#passwords").html("Fort");
		$("#passwords").css("color","green");
	}
	else{
		$("#passwords").html("Moyen");
		$("#passwords").css("color","yellow");
	}
	
});

document.getElementById("passwordConfirm").addEventListener("input", function() {
	if(this.value != document.getElementById("password").value){
		$("#confirmPassword").html("Les mots de passes sont différents");
	}
	else{
		$("#confirmPassword").html("Identique");
	}
});

document.getElementById("mailId").addEventListener("input", function() {
	if(this.value != "@" && this.value === "."){
		$("#email").html("Non disponible");
		$("#email").css("color","red");
	}
	else{
		$("#email").html("Disponible");
		$("#email").css("color","green");
	}
});


	

function contientMajuscule(str) { 
	return (/[A-Z]/.test(str)); 
}

function contientChiffre(str) { 
	return (/[0-9]/.test(str)); 
}

/*$("#password").keyup(function(){
	let motPasse = $("#password").val();
	
	if(motPasse.length<6){
		$("#passwords").html("Faible");
		$("#passwords").css("color","red");
	}
	else if(motPasse.length>9 && contientMajuscule(motPasse) && contientChiffre(motPasse)){
		$("#passwords").html("Fort");
		$("#passwords").css("color","green");
	}
	else{
		$("#passwords").html("Moyen");
		$("#passwords").css("color","yellow");
	}
});

*/

/*
document.getElementById("password").addEventListener("input", function() {
	let motPasse = $("#password").val();
	if(this.value != document.getElementById("passwordConfirm").value()){
		$("#confirmPassword").html("Les mots de passes sont différents");
	}
	else if(motPasse.length<6){
		$("#confirmPassword").html("Faible");
		$("#confirmPassword").css("color","red");
	}
	else if(motPasse.length>9 && contientMajuscule(motPasse) && contientChiffre(motPasse)){
		$("#confirmPassword").html("Faible");
		$("#confirmPassword").css("color","red");
	}
	
});


function contientMajuscule(str) { 
	return (/[A-Z]/.test(str)); 
}

function contientChiffre(str) { 
	return (/[0-9]/.test(str)); 
}
*/


	
	/*let username = document.getElementById("username");
	let password = document.getElementById("password");
	let passwordConfirm = document.getElementById("passwordConfirm");
	let mailId = document.getElementById("mailId");
	
	if(!username.value){
		e.preventDefault();
		document.getElementById("usernameid").innerHTML = "Veuillez entrer votre nom d'usager";
		return false;
	}
	if(!password.value){
		e.preventDefault();
		document.getElementById("passwords").innerHTML = "Veuillez entrer votre mot de passe";
		return false;
	}
	if(!passwordConfirm.value){
		e.preventDefault();
		document.getElementById("confirmPassword").innerHTML = "Veuillez confirmer votre mot de passe";
		return false;
	}
	if(!mailId.value){
		e.preventDefault();
		document.getElementById("email").innerHTML = "Veuillez entrer votre courriel";
		return false;
	}
	
	else{
		alert("Formulaire envoyé!");
	}
})
*/




$('input[type="radio"]').click(function(){
    let inputValue = $(this).attr("value");
    let targetBox = $("." + inputValue);
    $(".box").not(targetBox).hide();
    $(targetBox).show();
});


$( "#swSelect" ).change(function() {
    let perso = $( "#swSelect option:selected" ).text();
    if(perso === "Obiwan"){
        $("#swPersonnage").attr("src","img/obiwan.jpg");
    }
	else if(perso === "Darth Vader"){
        $("#swPersonnage").attr("src","img/darthVader.jpg");
	}
	else if(perso === "Yoda"){
        $("#swPersonnage").attr("src","img/yoda.png");
	}
});

$( "#MarvelSelect" ).change(function() {
    let perso = $( "#MarvelSelect option:selected" ).text();
    if(perso === "Thor"){
        $("#marvelPersonnage").attr("src","img/thor.jpg");
    }
	else if(perso === "Hulk"){
        $("#marvelPersonnage").attr("src","img/hulk.jpg");
	}
	else if(perso === "Spiderman"){
        $("#marvelPersonnage").attr("src","img/spiderman.png");
	}
});

$( "#DcSelect" ).change(function() {
    let perso = $( "#DcSelect option:selected" ).text();
    if(perso === "Flash"){
        $("#dcPersonnage").attr("src","img/flash.png");
    }
	else if(perso === "Arrow"){
        $("#dcPersonnage").attr("src","img/arrow.jpg");
	}
	else if(perso === "Batman"){
        $("#dcPersonnage").attr("src","img/batman.png");
	}
});


