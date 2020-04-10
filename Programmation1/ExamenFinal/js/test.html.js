<!DOCTYPE html>
<html lang="fr-ca">
<head>
    <meta charset="UTF-8">
    <title>Shawicon</title>
    <link rel="stylesheet" href="css/bootstrap.css">
</head>

<body>
	<div id="MesLettres" class="d-print-none">
		<div class="container">
			<div class="row">
				<div class="col-3">
					<img src="img/Letters/A/A1.jpg" class="img-fluid" alt="imgA" onClick="fImpression()">
				</div>
			</div>
		</div>
	</div>
	
	<div id="MonPrint" class="d-none d-print-block">
		<p>Impression</p>
	</div>
	
	<script src="js/jquery-3.4.1.js"></script>
	<script src="js/bootstrap.js"></script>
	<script>
		function fImpression()
		{
			$("#MonPrint").html($("#MesLettres").html());
		}
	</script>
</body>
</html>