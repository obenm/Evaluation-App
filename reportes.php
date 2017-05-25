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
	</head>

	<body>

		<header class="container encabezado hidden-print">
			<div class="row text-center logo">
				<div class="col-xs-12">
					<h1><img src="img/logo.png" height="50px" class=""><strong>Evaluación de Personal</strong></h1>
				</div>
				<div class="hidden-xs col-xs-12 text-center menuBotones paddingEspecial">
					<a type="button" class="btn btn-link btn-lg" href="evaluaciones.php">Evaluaciones</a>
					<a type="button" class="btn btn-link btn-lg" href="reportes.php">Reportes</a>
					<a type="button" class="btn btn-link btn-lg" href="index.php">Salir</a>
				</div>
				<div class="visible-xs col-xs-12 text-center menuBotones paddingEspecial">
					<a type="button" class="btn btn-link" href="evaluaciones.php"><strong>Evaluaciones</strong></a>
					<a type="button" class="btn btn-link" href="reportes.php"><strong>Reportes</strong></a>
					<a type="button" class="btn btn-link" href="index.php"><strong>Salir</strong></a>
				</div>
			</div>
		</header>

		<div class="clearfix"></div>

		<section class="container seccion1 hidden-print">
			<div class="row">
				<div class="col-xs-12">
					<button type="button" class="btn btn-primary btn-lg btn-block dropdown-toggle" data-toggle="dropdown"> Consultar por <span class="caret"></span></button>
					<ul class="dropdown-menu btn-block" role="menu">
						<li><a href="#" class="btn-lg text-center">No. de Reporte</a></li>
						<li><a href="#" class="btn-lg text-center">Periodo de Tiempo</a></li>
					</ul>
				</div>
			</div>
		</section>

		<div class="clearfix"></div>

		<section class="container seccion1 sNoRep hidden-print">
			<div class="row">
				<div class="col-xs-12">
					<div class="input-group input-group-lg margenEspecial">
						<span class="input-group-addon" id="basic-addon1">No de Reporte.</span>
						<input type="text" class="form-control" placeholder="#" aria-describedby="basic-addon1">
					</div>
				</div>
			</div>
		</section>

		<section class="container seccion1 sPeriodo hidden-print">
			<div class="row">
				<div class="col-xs-12">
					<div class="input-group input-group-lg margenEspecial">
						<span class="input-group-addon" id="basic-addon1">Periodo de Tiempo</span>
						<button type="button" class="btn btn-default btn-lg btn-block dropdown-toggle quitarBtnMargen" aria-describedby="basic-addon1" data-toggle="dropdown"> Estación <span class="caret"></span></button>
							<ul class="dropdown-menu btn-block" role="menu">
								<li><a class="btn-lg text-center disabled"><strong>Zona</strong></a></li>
							    	<li><a class="btn-lg" href="#"><span class="badge">No.</span> Estación 1</a></li>
							    	<li><a class="btn-lg" href="#"><span class="badge">No.</span> Estación 2</a></li>
							    	<li><a class="btn-lg" href="#"><span class="badge">No.</span> Estación 3</a></li>
							    	<li><a class="btn-lg" href="#"><span class="badge">No.</span> Estación 4</a></li>
							    <li><a class="btn-lg text-center disabled"><strong>Zona</strong></a></li>
							    	<li><a class="btn-lg" href="#"><span class="badge">No.</span> Estación 1</a></li>
							    	<li><a class="btn-lg" href="#"><span class="badge">No.</span> Estación 2</a></li>
							    	<li><a class="btn-lg" href="#"><span class="badge">No.</span> Estación 3</a></li>
							    	<li><a class="btn-lg" href="#"><span class="badge">No.</span> Estación 4</a></li>
							    <li><a class="btn-lg text-center disabled"><strong>Zona</strong></a></li>
							    	<li><a class="btn-lg" href="#"><span class="badge">No.</span> Estación 1</a></li>
							    	<li><a class="btn-lg" href="#"><span class="badge">No.</span> Estación 2</a></li>
							    	<li><a class="btn-lg" href="#"><span class="badge">No.</span> Estación 3</a></li>
							    	<li><a class="btn-lg" href="#"><span class="badge">No.</span> Estación 4</a></li>
							    <li><a class="btn-lg text-center disabled"><strong>Zona</strong></a></li>
							    	<li><a class="btn-lg" href="#"><span class="badge">No.</span> Estación 1</a></li>
							    	<li><a class="btn-lg" href="#"><span class="badge">No.</span> Estación 2</a></li>
							    	<li><a class="btn-lg" href="#"><span class="badge">No.</span> Estación 3</a></li>
							    	<li><a class="btn-lg" href="#"><span class="badge">No.</span> Estación 4</a></li>
							    <li><a class="btn-lg text-center disabled"><strong>Zona</strong></a></li>
							    	<li><a class="btn-lg" href="#"><span class="badge">No.</span> Estación 1</a></li>
							    	<li><a class="btn-lg" href="#"><span class="badge">No.</span> Estación 2</a></li>
							    	<li><a class="btn-lg" href="#"><span class="badge">No.</span> Estación 3</a></li>
							    	<li><a class="btn-lg" href="#"><span class="badge">No.</span> Estación 4</a></li>
							    <li><a class="btn-lg text-center disabled"><strong>Zona</strong></a></li>
							    	<li><a class="btn-lg" href="#"><span class="badge">No.</span> Estación 1</a></li>
							    	<li><a class="btn-lg" href="#"><span class="badge">No.</span> Estación 2</a></li>
							    	<li><a class="btn-lg" href="#"><span class="badge">No.</span> Estación 3</a></li>
							    	<li><a class="btn-lg" href="#"><span class="badge">No.</span> Estación 4</a></li>
							    <li><a class="btn-lg text-center disabled"><strong>Zona</strong></a></li>
							    	<li><a class="btn-lg" href="#"><span class="badge">No.</span> Estación 1</a></li>
							    	<li><a class="btn-lg" href="#"><span class="badge">No.</span> Estación 2</a></li>
							    	<li><a class="btn-lg" href="#"><span class="badge">No.</span> Estación 3</a></li>
							    	<li><a class="btn-lg" href="#"><span class="badge">No.</span> Estación 4</a></li>
							    <li><a class="btn-lg text-center disabled"><strong>Zona</strong></a></li>
							    	<li><a class="btn-lg" href="#"><span class="badge">No.</span> Estación 1</a></li>
							    	<li><a class="btn-lg" href="#"><span class="badge">No.</span> Estación 2</a></li>
							    	<li><a class="btn-lg" href="#"><span class="badge">No.</span> Estación 3</a></li>
							    	<li><a class="btn-lg" href="#"><span class="badge">No.</span> Estación 4</a></li>
							</ul>
					</div>
				</div>
				<div class="col-xs-12 col-sm-6">
					<div class="input-group input-group-lg margenEspecial">
						<span class="input-group-addon" id="basic-addon1">Desde</span>
						<button type="button" class="btn btn-default btn-lg btn-block quitarBtnMargen" aria-describedby="basic-addon1"><span class=" glyphicon glyphicon-calendar"></span></button>
					</div>
				</div>
				<div class="col-xs-12 col-sm-6">
					<div class="input-group input-group-lg margenEspecial">
						<span class="input-group-addon" id="basic-addon1">Hasta</span>
						<button type="button" class="btn btn-default btn-lg btn-block quitarBtnMargen" aria-describedby="basic-addon1"><span class=" glyphicon glyphicon-calendar"></span></button>
					</div>
				</div>
			</div>
		</section>

		<div class="clearfix"></div>

		<section class="container seccion1 hidden-print">
			<div class="row">
				<div class="col-xs-12">
					<button type="button" class="btn btn-primary btn-lg btn-block"><span class="glyphicon glyphicon-pencil"></span> Generar Reporte</button>
				</div>
			</div>
		</section>

		<div class="clearfix"></div>

		<section class="container seccion2">
			<div class="row">
				<div class="col-xs-12 bg-info text-center margenEspecial">
					<h2><strong>Reporte de Evaluación de Servicio</strong></h2>
				</div>

				<div class="col-xs-12">
					<table class="table table-bordered table-hover table-condensed table-responsive text-center">
						<tr>
							<td><h5><strong>Estación</strong></h5></td>
							<td><h5><span class="badge">No.</span> Estación 1</h5></td>
						</tr>
						<tr>
							<td><h5><strong>Fecha:</strong></h5></td>
							<td></td>
						</tr>
					</table>
				</div>

				<div class="col-xs-12">
					<div class="table-responsive">
						<table class="table table-bordered table-hover table-condensed text-center">

							<tr>
								<td><h5><strong>Nombre</strong></h5></td>
								<td colspan="3">Nombre de Prueba Lopez Lopez</td>
								<td colspan="21"></td>
							</tr>
							<tr>
								<td><h5><strong>Puesto</strong></h5></td>
								<td colspan="3"></td>
								<td colspan="21"></td>
							</tr>

							<!-- -->
							<tr class="active">
								<td colspan="25"></td>
							</tr>
							<!-- -->

							<tr>
								<td><h5><strong>Vehículo</strong></h5></td>
								<td><h5><strong>A</strong></h5></td>
								<td><h5><strong>B</strong></h5></td>
								<td><h5><strong>C</strong></h5></td>
								<td><h5><strong>A</strong></h5></td>
								<td><h5><strong>B</strong></h5></td>
								<td><h5><strong>C</strong></h5></td>
								<td><h5><strong>A</strong></h5></td>
								<td><h5><strong>B</strong></h5></td>
								<td><h5><strong>C</strong></h5></td>
								<td><h5><strong>A</strong></h5></td>
								<td><h5><strong>B</strong></h5></td>
								<td><h5><strong>C</strong></h5></td>
								<td><h5><strong>A</strong></h5></td>
								<td><h5><strong>B</strong></h5></td>
								<td><h5><strong>C</strong></h5></td>
								<td><h5><strong>A</strong></h5></td>
								<td><h5><strong>B</strong></h5></td>
								<td><h5><strong>C</strong></h5></td>
								<td><h5><strong>A</strong></h5></td>
								<td><h5><strong>B</strong></h5></td>
								<td><h5><strong>C</strong></h5></td>
								<td><h5><strong>A</strong></h5></td>
								<td><h5><strong>B</strong></h5></td>
								<td><h5><strong>C</strong></h5></td>

								<td><h5><strong>A</strong></h5></td>
								<td><h5><strong>B</strong></h5></td>
								<td><h5><strong>C</strong></h5></td>
								<td><h5><strong>A</strong></h5></td>
								<td><h5><strong>B</strong></h5></td>
								<td><h5><strong>C</strong></h5></td>
								<td><h5><strong>A</strong></h5></td>
								<td><h5><strong>B</strong></h5></td>
								<td><h5><strong>C</strong></h5></td>
								<td><h5><strong>A</strong></h5></td>
								<td><h5><strong>B</strong></h5></td>
								<td><h5><strong>C</strong></h5></td>
								<td><h5><strong>A</strong></h5></td>
								<td><h5><strong>B</strong></h5></td>
								<td><h5><strong>C</strong></h5></td>
								<td><h5><strong>A</strong></h5></td>
								<td><h5><strong>B</strong></h5></td>
								<td><h5><strong>C</strong></h5></td>
								<td><h5><strong>A</strong></h5></td>
								<td><h5><strong>B</strong></h5></td>
								<td><h5><strong>C</strong></h5></td>
								<td><h5><strong>A</strong></h5></td>
								<td><h5><strong>B</strong></h5></td>
								<td><h5><strong>C</strong></h5></td>
								<td><h5><strong>A</strong></h5></td>
								<td><h5><strong>B</strong></h5></td>
								<td><h5><strong>C</strong></h5></td>
								<td><h5><strong>A</strong></h5></td>
								<td><h5><strong>B</strong></h5></td>
								<td><h5><strong>C</strong></h5></td>
								<td><h5><strong>A</strong></h5></td>
								<td><h5><strong>B</strong></h5></td>
								<td><h5><strong>C</strong></h5></td>
								<td><h5><strong>A</strong></h5></td>
								<td><h5><strong>B</strong></h5></td>
								<td><h5><strong>C</strong></h5></td>
								<td><h5><strong>A</strong></h5></td>
								<td><h5><strong>B</strong></h5></td>
								<td><h5><strong>C</strong></h5></td>
								<td><h5><strong>A</strong></h5></td>
								<td><h5><strong>B</strong></h5></td>
								<td><h5><strong>C</strong></h5></td>
								<td><h5><strong>A</strong></h5></td>
								<td><h5><strong>B</strong></h5></td>
								<td><h5><strong>C</strong></h5></td>
								<td><h5><strong>A</strong></h5></td>
								<td><h5><strong>B</strong></h5></td>
								<td><h5><strong>C</strong></h5></td>
								<td><h5><strong>A</strong></h5></td>
								<td><h5><strong>B</strong></h5></td>
								<td><h5><strong>C</strong></h5></td>
								<td><h5><strong>A</strong></h5></td>
								<td><h5><strong>B</strong></h5></td>
								<td><h5><strong>C</strong></h5></td>
								<td><h5><strong>A</strong></h5></td>
								<td><h5><strong>B</strong></h5></td>
								<td><h5><strong>C</strong></h5></td>
								<td><h5><strong>A</strong></h5></td>
								<td><h5><strong>B</strong></h5></td>
								<td><h5><strong>C</strong></h5></td>
								<td><h5><strong>A</strong></h5></td>
								<td><h5><strong>B</strong></h5></td>
								<td><h5><strong>C</strong></h5></td>
								<td><h5><strong>A</strong></h5></td>
								<td><h5><strong>B</strong></h5></td>
								<td><h5><strong>C</strong></h5></td>
								<td><h5><strong>A</strong></h5></td>
								<td><h5><strong>B</strong></h5></td>
								<td><h5><strong>C</strong></h5></td>
								<td><h5><strong>A</strong></h5></td>
								<td><h5><strong>B</strong></h5></td>
								<td><h5><strong>C</strong></h5></td>
								<td><h5><strong>A</strong></h5></td>
								<td><h5><strong>B</strong></h5></td>
								<td><h5><strong>C</strong></h5></td>
								<td><h5><strong>A</strong></h5></td>
								<td><h5><strong>B</strong></h5></td>
								<td><h5><strong>C</strong></h5></td>
								<td><h5><strong>A</strong></h5></td>
								<td><h5><strong>B</strong></h5></td>
								<td><h5><strong>C</strong></h5></td>
								<td><h5><strong>A</strong></h5></td>
								<td><h5><strong>B</strong></h5></td>
								<td><h5><strong>C</strong></h5></td>
								<td><h5><strong>A</strong></h5></td>
								<td><h5><strong>B</strong></h5></td>
								<td><h5><strong>C</strong></h5></td>
								<td><h5><strong>A</strong></h5></td>
								<td><h5><strong>B</strong></h5></td>
								<td><h5><strong>C</strong></h5></td>
								<td><h5><strong>A</strong></h5></td>
								<td><h5><strong>B</strong></h5></td>
								<td><h5><strong>C</strong></h5></td>
								<td><h5><strong>A</strong></h5></td>
								<td><h5><strong>B</strong></h5></td>
								<td><h5><strong>C</strong></h5></td>
							</tr>
							<tr>
								<td><h5><strong>Saludo y Bienvenida</strong></h5></td>
								<td></td>
								<td></td>
								<td></td>
								<td colspan="21"></td>
							</tr>
							<tr>
								<td><h5><strong>Tarjeta Gascard</strong></h5></td>
								<td></td>
								<td></td>
								<td></td>
								<td colspan="21"></td>
							</tr>
							<tr>
								<td><h5><strong>Ratificación de Datos</strong></h5></td>
								<td></td>
								<td></td>
								<td></td>
								<td colspan="21"></td>
							</tr>
							<tr>
								<td><h5><strong>Forma de Pago</strong></h5></td>
								<td></td>
								<td></td>
								<td></td>
								<td colspan="21"></td>
							</tr>
							<tr>
								<td><h5><strong>Ofrecimiento de Aditivo</strong></h5></td>
								<td></td>
								<td></td>
								<td></td>
								<td colspan="21"></td>
							</tr>
							<tr>
								<td><h5><strong>Verificar "Ceros"</strong></h5></td>
								<td></td>
								<td></td>
								<td></td>
								<td colspan="21"></td>
							</tr>
							<tr>
								<td><h5><strong>Saludo y Bienvenida</strong></h5></td>
								<td></td>
								<td></td>
								<td></td>
								<td colspan="21"></td>
							</tr>
							<tr>
								<td><h5><strong>Revisión de Niveles</strong></h5></td>
								<td></td>
								<td></td>
								<td></td>
								<td colspan="21"></td>
							</tr>
							<tr>
								<td><h5><strong>Limpieza de Cristales</strong></h5></td>
								<td></td>
								<td></td>
								<td></td>
								<td colspan="21"></td>
							</tr>
							<tr>
								<td><h5><strong>Revisión de Llantas</strong></h5></td>
								<td></td>
								<td></td>
								<td></td>
								<td colspan="21"></td>
							</tr>
							<tr>
								<td><h5><strong>Cobro</strong></h5></td>
								<td></td>
								<td></td>
								<td></td>
								<td colspan="21"></td>
							</tr>
							<tr>
								<td><h5><strong>Factura</strong></h5></td>
								<td></td>
								<td></td>
								<td></td>
								<td colspan="21"></td>
							</tr>
							<tr>
								<td><h5><strong>Despedida</strong></h5></td>
								<td></td>
								<td></td>
								<td></td>
								<td colspan="21"></td>
							</tr>
							<tr>
								<td><h5><strong>Puntuación</strong></h5></td>
								<td></td>
								<td></td>
								<td></td>
								<td colspan="21"></td>
							</tr>
							<tr>
								<td><h5><strong>Promedio por Vehículo</strong></h5></td>
								<td colspan="3"></td>
								<td colspan="21"></td>
							</tr>
							
							<!-- -->
							<tr class="active">
								<td colspan="25"></td>
							</tr>
							<!-- -->

							<tr>
								<td><h5><strong>Presentación Personal</strong></h5></td>
								<td colspan="3"></td>
								<td colspan="21"></td>
							</tr>
							<tr>
								<td><h5><strong>Limpieza Personal</strong></h5></td>
								<td colspan="3"></td>
								<td colspan="21"></td>
							</tr>
							<tr>
								<td><h5><strong>Amabilidad</strong></h5></td>
								<td colspan="3"></td>
								<td colspan="21"></td>
							</tr>
							<tr>
								<td><h5><strong>Atención</strong></h5></td>
								<td colspan="3"></td>
								<td colspan="21"></td>
							</tr>
							<tr>
								<td><h5><strong>Disposición</strong></h5></td>
								<td colspan="3"></td>
								<td colspan="21"></td>
							</tr>
							<tr>
								<td><h5><strong>Contacto Visual</strong></h5></td>
								<td colspan="3"></td>
								<td colspan="21"></td>
							</tr>
							<tr>
								<td><h5><strong>Rapidez</strong></h5></td>
								<td colspan="3"></td>
								<td colspan="21"></td>
							</tr>
							<tr>
								<td><h5><strong>Promedio</strong></h5></td>
								<td colspan="3"></td>
								<td colspan="21"></td>
							</tr>
							<tr>
								<td><h5><strong>Calificación Personal</strong></h5></td>
								<td colspan="3"></td>
								<td colspan="21"></td>
							</tr>

							<!-- -->
							<tr class="active">
								<td colspan="25"></td>
							</tr>
							<!-- -->

							<tr>
								<td><h5><strong>Observaciones</strong></h5></td>
								<td colspan="3"></td>
								<td colspan="21"></td>
							</tr>
						</table>
					</div>
				</div>


				

				<div class="col-xs-12">
					<table class="table table-bordered table-hover table-condensed table-responsive text-center">
						<tr>
							<td rowspan="3"><strong>Calificación General</strong></td>
							<td class="text-center"><strong>Puntos</strong></td>
							<td class="text-center"><strong>Calificación</strong></td>
						</tr>
						<tr>
							<td class="text-center">7</td>
							<td class="text-center">0.00</td>
						</tr>
						<tr>
							<td class="text-center">3</td>
							<td class="text-center">0.00</td>
						</tr>
						<tr>
							<td rowspan="2"><strong>Calificación Final</strong></td>
							<td rowspan="2" class="text-center">10</td>
							<td rowspan="2" class="text-center"><h4><strong>0.00</strong></h4></td>
						</tr>
					</table>
				</div>

				<div class="col-xs-12 col-sm-6">
					<div class="panel panel-default">
						<div class="panel-heading">
							<h3>Gráfica 1</h3>
						</div>
						<div class="panel-body">
							...
						</div>
					</div>
				</div>

				<div class="col-xs-12 col-sm-6">
					<div class="panel panel-default">
						<div class="panel-heading">
							<h3>Gráfica 2</h3>
						</div>
						<div class="panel-body">
							...
						</div>
					</div>
				</div>

				<div class="clearfix"></div>

				<div class="col-xs-12 col-sm-6">
					<table class="table table-bordered table-hover table-condensed table-responsive text-center">
						<tr>
							<td colspan="2"><h4><span class="glyphicon glyphicon-info-sign"></span> <strong>Escala de Evaluación para el Proceso General de Atención a Clientes</strong></h4></td>
						</tr>
						<tr>
							<td>Muy Bien</td>
							<td class="success"><strong>4</strong></td>
						</td>
							
						<tr>
							<td>Bien</td>
							<td class="info"><strong>3</strong></td>
						</tr>
						<tr>
							<td>Regular</td>
							<td class="warning"><strong>2</strong></td>
						</tr>
						<tr>
							<td>Mal</td>
							<td class="danger"><strong>1</strong></td>
						</tr>
					</table>
				</div>

				<div class="col-xs-12 col-sm-6">
					<table class="table table-bordered table-hover table-condensed table-responsive text-center">
						<tr>
							<td><h5><strong>Comentarios</strong></h5></td>
						</tr>
						<tr>
							<td>Aquí van los Comentarios</td>
						</tr>
					</table>
				</div>

				<div class="clearfix"></div>

				<div class="col-xs-12">
					<table class="table table-bordered table-hover table-condensed table-responsive text-center">
						<tr>
							<td><h5><strong>Evaluador</strong></h5></td>
							<td>Nombre de Evaluador Lopez Lopez</td>
						</tr>
					</table>
				</div>

			</div>
		</section>

	</body>
</html>