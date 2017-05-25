<!DOCTYPE html>
<html lang="es">
	<head>
		<meta http-equiv="Content-Type" content="text/html;charset=UTF-8" />
		<title>Grupo Octano - Evaluación de Personal</title>
		<meta name="viewport" content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0" />
		<meta name="apple-mobile-web-app-capable" content="yes" />
		<link rel="stylesheet" href="css/bootstrap.min.css">
		<link rel="stylesheet" type="text/css" href="css/style.css">
		<script src="js/jquery-2.1.4.min.js"></script>
		<script src="js/bootstrap.min.js"></script>
		<script src="js/index.js"></script>
	</head>

	<body>

		<header>
			<div class="container encabezado">
				<div class="row text-center logo">
					<div class="col-xs-12">
						
					</div>
					<div class="col-xs-12">
						<h1><img src="img/logo.png" height="50px" class=""><strong>Evaluación de Personal</strong></h1>
					</div>
				</div>
			</div>
		</header>

		<div class="clearfix"></div>

		<section id="formAcceso" class="container jumbotron">
				<div class="row">
					
						<div class="col-xs-12 text-center margenEspecial">
							<h3><span class="glyphicon glyphicon-user"></span> <strong>Acceso a Evaluadores</strong></h3>
						</div>
						<div class="col-xs-12 col-sm-10 col-sm-offset-1">
							<div class="input-group input-group margenEspecial">
								<span class="input-group-addon" id="basic-addon1">Usuario</span>
								<input id="usuario" type="text" class="form-control" placeholder="Usuario" aria-describedby="basic-addon1" />
							</div>
						</div>
						<div class="col-xs-12 col-sm-10 col-sm-offset-1">
							<div class="input-group input-group margenEspecial">
								<span class="input-group-addon" id="basic-addon1">Contraseña</span>
								<input id="password" type="password" class="form-control" placeholder="●●●●●●●●" aria-describedby="basic-addon1" />
							</div>
						</div>
						<div class="col-xs-12 col-sm-10 col-sm-offset-1">
							<button id="btnIngresar" type="submit" class="btn btn-primary btn btn-block"><span class="glyphicon glyphicon-ok"></span> Ingresar</button>
						</div>
					
				</div>
			</div>
		</section>

		<div class="modal" id="aviso" tabindex="-1" role="dialog" aria-labelledby="avisoEtiqueta" aria-hidden="true">
			<div class="modal-dialog modal-sm">
				<div class="modal-content">
					<div class="modal-header">
				        <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
						<h4 class="modal-title" id="avisoEtiqueta">Aviso!</h4>
					</div>
					<div class="modal-body">
						<p id="mensajeAviso"></p>
					</div>
					<div class="modal-footer">
						<button type="button" class="btn">Aceptar</button>
					</div>
				</div>
			</div>
		</div>
	</body>
</html>