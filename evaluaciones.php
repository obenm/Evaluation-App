<!DOCTYPE html>
<html lang="es">
	<head>
		<meta http-equiv="Content-Type" content="text/html;charset=UTF-8" />
		<title>Grupo Octano - Evaluación de Personal</title>
		<meta name="viewport" content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0" />
		<meta name="apple-mobile-web-app-capable" content="yes" />
		<link rel="stylesheet" href="css/bootstrap.min.css">
		<link rel="stylesheet" type="text/css" href="css/style.css">
	</head>

	<body>

		<header class="container encabezado">
			<div class="row text-center logo">
				<div class="col-xs-12">
					<h1><img src="img/logo.png" height="50px" class=""><strong>Evaluación de Personal</strong></h1>
				</div>
				<div class="col-xs-12 text-center menuBotones paddingEspecial">
					<a type="button" class="btn btn-link" href="evaluaciones.php"><strong>Evaluaciones</strong></a>
					<a type="button" class="btn btn-link" href="reportes.php"><strong>Reportes</strong></a>
					<a type="button" class="btn btn-link" href="index.php"><strong>Salir</strong></a>
				</div>
			</div>
		</header>

		<div class="clearfix"></div>

		<section class="container seccion1">
			<div class="row botonesEvaluacion">
				<div class="col-xs-12 col-md-5 col-md-offset-1">
					<button id="btnNuevaEvaluacion" type="button" class="btn btn-primary btn btn-block"><span class="glyphicon glyphicon-pencil"></span> Nueva Evaluación</button>
				</div>
				<div class="col-xs-12 col-md-5">
					<button id="btnGuardarEvaluacion" type="button" class="btn btn-primary btn btn-block"><span class="glyphicon glyphicon-floppy-saved"></span> Guardar Evaluación</button>
				</div>
			</div>
		</section>

		<div class="clearfix"></div>

		<section class="container seccion2">
			<div class="row estacion">
				<div class="col-xs-12 col-md-10 col-md-offset-1">
					<button id="btnEstacion" type="button" class="btn btn-default btn btn-block dropdown-toggle" data-toggle="dropdown"> Estación <span class="caret"></span></button>
					<ul id="dropdownEstacion" class="dropdown-menu btn-block" role="menu">
							<!--<li><a class="text-center disabled"><strong>Zona</strong></a>
					    		<li><a data="2000" href="#"><span class="badge">No.</span> Estación 1</a></li>
					    	</li>
					    	<li><a data="2001" href="#"><span class="badge">No.</span> Estación 2</a></li></li>
					    	<li><a href="#"><span class="badge">No.</span> Estación 3</a></li>
					    	<li><a href="#"><span class="badge">No.</span> Estación 4</a></li>-->
					</ul>
				</div>
				
			</div>

			<div class="row turno">
				<div class="col-xs-9 col-md-8 col-md-offset-1">
					<button id="btnTurno" type="button" class="btn btn-default btn btn-block dropdown-toggle" data-toggle="dropdown"> Turno <span class="caret"></span></button>
					<ul id="dropdownTurno" class="dropdown-menu btn-block" role="menu">
					    <li><a href="#">Matutino</a></li>
					    <li><a href="#">Vespertino</a></li>
					    <li><a href="#">Nocturno</a></li>
					</ul>
				</div>

				<div class="col-xs-3 col-md-2">
					<button id="btnAddEstZona" type="button" class="btn btn-default btn btn-block"><span class="glyphicon glyphicon-plus"></span></button>	
				</div>
			</div>


			<div class="row fechaHora">
				<div class="col-xs-12 col-sm-7"></div>
				<div class="col-xs-12 col-sm-5"></div>
			</div>

			<div class="row botonesPersona margenEspecial">
				<div class="col-xs-12 col-md-5 col-md-offset-1">
					<button id="btnNuevaEvaluacionPersonal" type="button" class="btn btn-primary btn btn-block"><span class="glyphicon glyphicon-plus"></span> Añadir Evaluacion Personal</button>
				</div>
				<div class="col-xs-12 col-md-5">
					<button id="btnEliminarEvaluacionPersonal" type="button" class="btn btn-primary btn btn-block"><span class="glyphicon glyphicon-remove"></span> Eliminar Evaluacion Personal</button>
				</div>
			</div>
		</section>

		<div class="clearfix"></div>

		<section class="container seccion3">
		
			<div class="row datos_persona">
				<div class="col-xs-12 col-md-10 col-md-offset-1">
					<button id="btnNombre" type="button" class="btn btn-default btn btn-block dropdown-toggle margenEspecial" data-toggle="dropdown"> Nombre <span class="caret"></span></button>
					<ul id="dropdownNombre" class="dropdown-menu btn-block" role="menu">
				    	  <!-- <li><a class="btn" href="#">Juan Perez Perez</a></li> -->
					</ul>
				</div>
				
				<div class="col-xs-9 col-md-8 col-md-offset-1">
					<input type="text" class="form-control input input-block margenEspecial" placeholder="Puesto" readonly>
				</div>
				<div class="col-xs-3 col-md-2">
					<button id="btnBuscarPersonal" type="button" class="btn btn-default btn btn-block"><span class="glyphicon glyphicon-search"></span></button>
				</div>
				<!--<div class="col-xs-12">
					<div class="btn-group btn-group-justified btn-group">
						<a href="#" class="btn btn-default"><span class="glyphicon glyphicon-plus"></span></a>
						<a href="#" class="btn btn-default"><span class="glyphicon glyphicon-pencil"></span></a>
						<a href="#" class="btn btn-default"><span class="glyphicon glyphicon-search"></span></a>
					</div>
				</div>-->
			</div>
			
			<div id="btnsVehiculos" class="row seleccionVehiculos">
				<div class="col-xs-12 col-md-10 col-md-offset-1">
					<div class="btn-group btn-group-justified btn-group">
						<a id="btnVeh1" data-btnVeh="1" href="#" class="btn btn-default active">Vehiculo 1</a>
						<a id="btnVeh2" data-btnVeh="2" href="#" class="btn btn-default">Vehiculo 2</a>
						<a id="btnVeh3" data-btnVeh="3" href="#" class="btn btn-default">Vehiculo 3</a>
					</div>
				</div>
				<!--<div class="visible-xs col-xs-12 col-md-10 col-md-offset-1">
					<div class="btn-group btn-group-justified btn-group">
						<a data-btnVeh="1" href="#" class="btn btn-default active"><span class="badge">1</span></a>
						<a data-btnVeh="2" href="#" class="btn btn-default"><span class="badge">2</span></a>
						<a data-btnVeh="3" href="#" class="btn btn-default"><span class="badge">3</span></a>
					</div>
				</div>-->
			</div>

			<div class="row formularioVehiculos">
				<div class="col-xs12 col-md-10 col-md-offset-1">
					<div class="panel panel-default margenEspecial">
						<div class="panel-body">
							<div class="col-xs-12 col-md-12 bg-info text-center">
								<h5><strong>Saludo y Bienvenida</strong></h5>
							</div>
							<div class="col-xs-4 col-md-2 col-md-offset-1"><h6><input data-formVeh="orientveh" type="checkbox" />Orientación de Vehículo</h6></div>
							<div class="col-xs-4 col-md-2"><h6><input data-formVeh="bienv" type="checkbox" />Bienvenid@</h6></div>
							<div class="col-xs-4 col-md-2"><h6><input data-formVeh="buend" type="checkbox" />Buenos días</h6></div>
							<div class="col-xs-4 col-md-2"><h6><input data-formVeh="leatien" type="checkbox" />Le atiende</h6></div>
							<div class="col-xs-4 col-md-2"><h6><input data-formVeh="asusord" type="checkbox" />A sús ordenes</h6></div>

							<div class="col-xs-12 bg-info text-center">
								<h5><strong>Tarjeta Gascard</strong></h5>
							</div>
							<div class="col-xs-4 col-md-4 col-md-offset-1"><h6><input data-formVeh="soldgascd" type="checkbox" />Solicitud de Tarjeta</h6></div>
							<div class="col-xs-4 col-md-4"><h6><input data-formVeh="nogascd" type="radio" id="opcGascard" name="opcGascard" disabled />No tiene</h6></div>
							<div class="col-xs-4 col-md-3"><h6><input data-formVeh="sigascd" type="radio" id="opcGascard" name="opcGascard" disabled />Si tiene</h6></div>
							<div class="clearfix"></div>
							<div class="col-xs-4 col-md-4 col-xs-offset-4 col-md-offset-5"><h6><input data-formVeh="ofrafl" type="checkbox" disabled />Ofrece Afiliación</h6></div>
							<div class="col-xs-4 col-md-3"><h6><input data-formVeh="mencsr" type="checkbox" disabled />Mención Sr(a)</h6></div>

							<div class="col-xs-12 bg-info text-center">
								<h5><strong>Ratificación de Datos</strong></h5>
							</div>
							<div class="col-xs-12 col-md-11 col-md-offset-1"><h6><input data-formVeh="ratdat" type="checkbox" />Ratificación de Datos</h6></div>

							<div class="col-xs-12 bg-info text-center">
								<h5><strong>Forma de Pago</strong></h5>
							</div>
							<div class="col-xs-12 col-md-11 col-md-offset-1"><h6><input data-formVeh="forpag" type="checkbox" />Mención de Forma de Pago</h6></div>

							<div class="col-xs-12 bg-info text-center">
								<h5><strong>Ofrecimiento de Aditivo</strong></h5>
							</div>
							<div class="col-xs-4 col-md-4 col-md-offset-1"><h6><input data-formVeh="postfis" type="checkbox" />Ofrecimiento de Aditivos</h6></div>
							<div class="col-xs-4 col-md-4"><h6><input data-formVeh="ofradit" type="checkbox" />Mención de 2 Beneficios</h6></div>
							<div class="col-xs-4 col-md-3"><h6><input data-formVeh="mencbenf" type="checkbox" />Postura</h6></div>

							<div class="col-xs-12 bg-info text-center">
								<h5><strong>Verificar Ceros</strong></h5>
							</div>
							<div class="col-xs-6 col-md-4 col-md-offset-1"><h6><input data-formVeh="invaverf" type="checkbox" />Invitar a Verificar Ceros</h6></div>
							<div class="col-xs-6 col-md-3"><h6><input data-formVeh="verfvend" type="checkbox" />Verificación del Vendedor</h6></div>

							<div class="col-xs-12 bg-info text-center">
								<h5><strong>Revision de Niveles</strong></h5>
							</div>
							<div class="col-xs-6 col-md-4 col-md-offset-1"><h6><input data-formVeh="servcofr" type="checkbox" />Como parte del Servicio me Abre su Cofre</h6></div>
							<div class="col-xs-6 col-md-3"><h6><input data-formVeh="dispserv" type="checkbox" />Disposición al Servicio</h6></div>

							<div class="col-xs-12 bg-info text-center">
								<h5><strong>Limpieza de Cristales</strong></h5>
							</div>
							<div class="col-xs-6 col-md-4 col-md-offset-1"><h6><input data-formVeh="limpparb" type="checkbox" />Limpieza Parabrisas</h6></div>
							<div class="col-xs-6 col-md-3"><h6><input data-formVeh="retresjab" type="checkbox" />Retiro de Residuos de Jabón</h6></div>

							<div class="col-xs-12 bg-info text-center">
								<h5><strong>Revision de Llantas</strong></h5>
							</div>
							<div class="col-xs-6 col-md-4 col-md-offset-1"><h6><input data-formVeh="infllant" type="checkbox" />Inflado de Llantas</h6></div>
							<div class="col-xs-6 col-md-3"><h6><input data-formVeh="usomang" type="checkbox" />Uso adecuado de Manguera</h6></div>

							<div class="col-xs-12 bg-info text-center">
								<h5><strong>Cobro</strong></h5>
							</div>
							<div class="col-xs-4 col-md-4 col-md-offset-1"><h6><input data-formVeh="efect" type="radio" name="opcCobro" />Efectivo</h6></div>
							<div class="col-xs-4 col-md-4"><h6><input data-formVeh="tarjbanc" type="radio" name="opcCobro" />Tarjeta Bancaria</h6></div>
							<div class="col-xs-4 col-md-3"><h6><input data-formVeh="vales" type="radio" name="opcCobro" />Vales</h6></div>
							<div class="clearfix"></div>
							<div class="col-xs-4 col-md-4 col-md-offset-1"><h6><input data-formVeh="verfbill" type="checkbox" disabled />Verificación de Billetes</h6></div>
							<div class="col-xs-4 col-md-4"><h6><input data-formVeh="acerterm" type="checkbox" disabled />Acercamiento terminal</h6></div>			
							<div class="col-xs-4 col-md-3 "><h6><input data-formVeh="verfval" type="checkbox" disabled />Verificar Vales</h6></div>
							<div class="clearfix"></div>
							<div class="col-xs-4 col-md-4 col-xs-offset-4 col-md-offset-5"><h6><input data-formVeh="solicine" type="checkbox" disabled />Solicitar INE</h6></div>
							<div class="col-xs-4 col-md-3"><h6><input data-formVeh="anotplc" type="checkbox" disabled />Anotar Placas</h6></div>

							<div class="col-xs-12 bg-info text-center">
								<h5><strong>Factura</strong></h5>
							</div>
							<div class="col-xs-6 col-md-4 col-md-offset-1"><h6><input data-formVeh="ofrcfact" type="checkbox" />Ofrecimiento de Factura</h6></div>
							<div class="col-xs-6 col-md-3"><h6><input data-formVeh="invitverdat" type="checkbox" />Invitación a Verificar Datos</h6></div>

							<div class="col-xs-12 bg-info text-center">
								<h5><strong>Despedida</strong></h5>
							</div>
							<div class="col-xs-6 col-md-4 col-md-offset-1"><h6><input data-formVeh="agrdvisit" type="checkbox" />Agradecimiento de Visita</h6></div>
							<div class="col-xs-6 col-md-3"><h6><input data-formVeh="invitreg" type="checkbox" />Invitación a Regresar</h6></div>

							<div class="col-xs-12 bg-info text-center">
								<h5><strong>Evaluación Personal</strong></h5>
							</div>
							<div class="col-xs-6 col-md-4 col-md-offset-1"><h6>Presentación Personal</h6></div>
							<div class="col-xs-1 col-md-1"><h6><input type="radio" value="1" name="presentacionPersonal" />1</h6></div>
							<div class="col-xs-1 col-md-1"><h6><input type="radio" value="2" name="presentacionPersonal" />2</h6></div>
							<div class="col-xs-1 col-md-1"><h6><input type="radio" value="3" name="presentacionPersonal" />3</h6></div>
							<div class="col-xs-1 col-md-1"><h6><input type="radio" value="4" name="presentacionPersonal" />4</h6></div>
							<div class="clearfix"></div>

							<div class="col-xs-6 col-md-4 col-md-offset-1"><h6>Limpieza Personal</h6></div>
							<div class="col-xs-1 col-md-1"><h6><input type="radio" value="1" name="limpiezaPersonal" />1</h6></div>
							<div class="col-xs-1 col-md-1"><h6><input type="radio" value="2" name="limpiezaPersonal" />2</h6></div>
							<div class="col-xs-1 col-md-1"><h6><input type="radio" value="3" name="limpiezaPersonal" />3</h6></div>
							<div class="col-xs-1 col-md-1"><h6><input type="radio" value="4" name="limpiezaPersonal" />4</h6></div>
							<div class="clearfix"></div>

							<div class="col-xs-6 col-md-4 col-md-offset-1"><h6>Amabilidad</h6></div>
							<div class="col-xs-1 col-md-1"><h6><input type="radio" value="1" name="amabilidad" />1</h6></div>
							<div class="col-xs-1 col-md-1"><h6><input type="radio" value="2" name="amabilidad" />2</h6></div>
							<div class="col-xs-1 col-md-1"><h6><input type="radio" value="3" name="amabilidad" />3</h6></div>
							<div class="col-xs-1 col-md-1"><h6><input type="radio" value="4" name="amabilidad" />4</h6></div>
							<div class="clearfix"></div>

							<div class="col-xs-6 col-md-4 col-md-offset-1"><h6>Atención</h6></div>
							<div class="col-xs-1 col-md-1"><h6><input type="radio" value="1" name="atencion" />1</h6></div>
							<div class="col-xs-1 col-md-1"><h6><input type="radio" value="2" name="atencion" />2</h6></div>
							<div class="col-xs-1 col-md-1"><h6><input type="radio" value="3" name="atencion" />3</h6></div>
							<div class="col-xs-1 col-md-1"><h6><input type="radio" value="4" name="atencion" />4</h6></div>
							<div class="clearfix"></div>

							<div class="col-xs-6 col-md-4 col-md-offset-1"><h6>Disposición</h6></div>
							<div class="col-xs-1 col-md-1"><h6><input type="radio" value="1" name="disposicion" />1</h6></div>
							<div class="col-xs-1 col-md-1"><h6><input type="radio" value="2" name="disposicion" />2</h6></div>
							<div class="col-xs-1 col-md-1"><h6><input type="radio" value="3" name="disposicion" />3</h6></div>
							<div class="col-xs-1 col-md-1"><h6><input type="radio" value="4" name="disposicion" />4</h6></div>
							<div class="clearfix"></div>

							<div class="col-xs-6 col-md-4 col-md-offset-1"><h6>Contacto Visual y Locución</h6></div>
							<div class="col-xs-1 col-md-1"><h6><input type="radio" value="1" name="contactoVisualLocucion" />1</h6></div>
							<div class="col-xs-1 col-md-1"><h6><input type="radio" value="2" name="contactoVisualLocucion" />2</h6></div>
							<div class="col-xs-1 col-md-1"><h6><input type="radio" value="3" name="contactoVisualLocucion" />3</h6></div>
							<div class="col-xs-1 col-md-1"><h6><input type="radio" value="4" name="contactoVisualLocucion" />4</h6></div>
							<div class="clearfix"></div>

							<div class="col-xs-6 col-md-4 col-md-offset-1"><h6>Rapidez</h6></div>
							<div class="col-xs-1 col-md-1"><h6><input type="radio" value="1" name="rapidez" />1</h6></div>
							<div class="col-xs-1 col-md-1"><h6><input type="radio" value="2" name="rapidez" />2</h6></div>
							<div class="col-xs-1 col-md-1"><h6><input type="radio" value="3" name="rapidez" />3</h6></div>
							<div class="col-xs-1 col-md-1"><h6><input type="radio" value="4" name="rapidez" />4</h6></div>
							<div class="clearfix"></div>
						</div>
						<div class="panel-footer col-xs-12">
							<table class="table table-bordered text-justified">
								<tr class="active">
									<td><strong>Puntuación por Vehículo</strong></td>
									<td id="califVeh1" class="text-center"><strong>0</strong></td>
									<td id="califVeh2" class="text-center"><strong>0</strong></td>
									<td id="califVeh3" class="text-center"><strong>0</strong></td>
								</tr>
								<tr class="active">
									<td><strong>Promedio por Vehículo</strong></td>
									<td id="promVeh" class="text-center" colspan="3"><strong>0.00</strong></td>
								</tr>
								<tr class="active">
									<td><strong>Promedio Personal</strong></td>
									<td id="promPersonal" class="text-center" colspan="3"><strong>0.00</strong></td>
								</tr>
								<tr class="active">
									<td><strong>Calificación Personal</strong></td>
									<td id="califPers" class="text-center" colspan="3"><strong>0.00</strong></td>
								</tr>
							</table>
							<div class="row">
								<div class="col-xs-12 col-md-6">
									<div class="panel panel-default">
										<div class="panel-heading">
											<h5><strong>Gráfica Individual de la Evaluación del Proceso</strong></h5>
										</div>
										<div class="panel-body">
											<canvas id="evlcGraf1" width="600" height="400"></canvas>
										</div>
									</div>

								</div>
								
								<div class="col-xs-12 col-md-6">
									<div class="panel panel-default">
										<div class="panel-heading">
											<h5><strong>Gráfica Individual de la Evaluación Personal</strong></h5>
										</div>
										<div class="panel-body">
											<canvas id="evlcGraf2" width="600" height="400"></canvas>
										</div>
									</div>
								</div>
							</div>
							<div class="row">
								<div class="col-xs-12">
									<textarea class="form-control margenEspecial" placeholder="Observaciones" rows="8"></textarea>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>

			<div class="row calificacionEvaluacion">
				<div class="col-xs-12 col-md-10 col-md-offset-1">
					<table class="table table-bordered text-justified">
						<tr class="active">
							<th rowspan="3">Calificación General</th>
							<th class="text-center">Puntos</th>
							<th class="text-center">Calificación</th>
						</tr>
						<tr class="active">
							<td class="text-center">7</td>
							<td id="califVehGral" class="text-center">0.00</td>
						</tr>
						<tr class="active">
							<td class="text-center">3</td>
							<td id="califPerGral" class="text-center">0.00</td>
						</tr>
						<tr class="active">
							<th rowspan="2">Calificación Final</th>
							<td rowspan="2" class="text-center">10</td>
							<td id="califFinal" rowspan="2" class="text-center"><h4><strong>0.00</strong></h4></td>
						</tr>
					</table>
				</div>

				<div class="col-xs-12 col-md-5 col-md-offset-1">
					<div class="panel panel-default">
						<div class="panel-heading">
							<h5><strong>Gráfica General de la Evaluación del Proceso</strong></h5>
						</div>
						<div class="panel-body">
							<canvas id="gralGraf1" width="600" height="400"></canvas>
						</div>
					</div>
				</div>

				<div class="col-xs-12 col-md-5">
					<div class="panel panel-default">
						<div class="panel-heading">
							<h5><strong>Gráfica General de la Evaluación Personal</strong></h5>
						</div>
						<div class="panel-body">
							<canvas id="gralGraf2" width="600" height="400"></canvas>
						</div>
					</div>
				</div>

				<div class="clearfix"></div>

				<div class="col-xs-12 col-md-5 col-md-offset-1">
					<table class="table table-bordered text-center">
						<tr>
							<td colspan="2"><h5><span class="glyphicon glyphicon-info-sign"></span> <strong>Escala de Evaluación para el Proceso General de Atención a Clientes</strong></h5></td>
						</tr>
						<tr>
							<td><strong>Muy Bien</strong></td>
							<td class="muybien"><strong>4</strong></td>
						</td>
							
						<tr>
							<td><strong>Bien</strong></td>
							<td class="bien"><strong>3</strong></td>
						</tr>
						<tr>
							<td><strong>Regular</strong></td>
							<td class="regular"><strong>2</strong></td>
						</tr>
						<tr>
							<td><strong>Mal</strong></td>
							<td class="mal"><strong>1</strong></td>
						</tr>
					</table>
				</div>

				<div class="col-xs-12 col-md-5">
					<textarea class="form-control margenEspecial" placeholder="Comentarios" rows="8"></textarea>
					<div class="input-group input-group">
						<span class="input-group-addon" id="basic-addon1">Evaluador</span>
						<input type="text" class="form-control" placeholder="Nombre del Evaluador" aria-describedby="basic-addon1">
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

		<div class="modal" id="confirmacion" tabindex="-1" role="dialog" aria-labelledby="confirmacionEtiqueta" aria-hidden="true">
			<div class="modal-dialog modal-sm">
				<div class="modal-content">
					<div class="modal-header">
				        <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
						<h4 class="modal-title" id="confirmacionEtiqueta">Confirmación</h4>
					</div>
					<div class="modal-body">
						<p id="mensajeConfirmacion"></p>
					</div>
					<div class="modal-footer">
						<button id="btnAceptarConfirmacion" type="button" class="btn btn-primary">Aceptar</button>
						<button id="btnCancelarConfirmacion" type="button" class="btn btn-default">Cancelar</button>
					</div>
				</div>
			</div>
		</div>

		<div class="modal" id="addEstZona" tabindex="-1" role="dialog" aria-labelledby="addEstZonaEtiqueta" aria-hidden="true">
			<div class="modal-dialog">
				<div class="modal-content">
					<div class="modal-header">
				        <button id="btnCerrarEstZona" type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
						<h4 class="modal-title" id="addEstZonaEtiqueta">Agregar Zona / Estación</h4>
					</div>
					<div class="modal-body">
						<div class="row margenEspecial paddingEspecial">
							<div class="col-xs-12">
								<h5><strong>Agregar Zona</strong></h5>
							</div>
							<div class="col-xs-12 margenEspecial">
								<div class="input-group">
									<span class="input-group-addon" id="basic-addon1">Nombre</span>
									<input id="nombreAddZona" type="text" class="form-control" placeholder="Nombre de la Zona" aria-describedby="basic-addon1">
								</div>
							</div>
							<div class="col-xs-12 col-sm-4 col-sm-offset-8">
								<button id="btnAddZona" class="btn btn-info btn-block pull-right" style="margin-top: 0" type="button">Agregar</button>
							</div>
						</div>

						<div class="row margenEspecial paddingEspecial">
							<div class="col-xs-12">
								<h5><strong>Eliminar Zona</strong></h5>
							</div>
							<div class="col-xs-12 margenEspecial dropdownZonas">
								<button id="btnDelZona" type="button" style="margin-top: 0px" class="btn btn-default btn-block dropdown-toggle" data-toggle="dropdown"> Zona <span class="caret"></span></button>
								<ul id="dropdownDelZona" class="dropdown-menu btn-block" role="menu">
							    	  <!--<li><a href="#">Zona 1</a></li>
							    	  <li><a href="#">Zona 1</a></li>
							    	  <li><a href="#">Zona 1</a></li>
							    	  <li><a href="#">Zona 1</a></li>-->
								</ul>
							</div>
							<div class="col-xs-12 col-sm-4 col-sm-offset-8">
								<button class="btn btn-danger btn-block pull-right" style="margin-top: 0" type="button">Eliminar</button>
							</div>
						</div>

						<div class="row margenEspecial paddingEspecial">
							<div class="col-xs-12">
								<h5><strong>Agregar Estación</strong></h5>
							</div>
							<div class="col-xs-12 margenEspecial dropdownZonas">
								<button id="btnAddEstacion" type="button" style="margin-top: 0px" class="btn btn-default btn-block dropdown-toggle" data-toggle="dropdown"> Zona <span class="caret"></span></button>
								<ul id="dropdownAddEstacion" class="dropdown-menu btn-block" role="menu">
							    	  <!--<li><a href="#">Zona 1</a></li>
							    	  <li><a href="#">Zona 2</a></li>
							    	  <li><a href="#">Zona 3</a></li>
							    	  <li><a href="#">Zona 4</a></li>-->
								</ul>
							</div>
							<div class="col-xs-12 margenEspecial">
								<div class="input-group">
									<span class="input-group-addon" id="basic-addon1">No.</span>
									<input id="numeroAddEstacion" type="text" class="form-control" placeholder="Número de Estación PEMEX" aria-describedby="basic-addon1">
								</div>
							</div>
							<div class="col-xs-12 margenEspecial">
								<div class="input-group">
									<span class="input-group-addon" id="basic-addon1">Nombre</span>
									<input id="nombreAddEstacion" type="text" class="form-control" placeholder="Nombre de la Estación" aria-describedby="basic-addon1">
								</div>
							</div>
							<div class="col-xs-12 col-sm-4 col-sm-offset-8">
								<button id="btnAddEstacion" class="btn btn-info btn-block pull-right" style="margin-top: 0" type="button">Agregar</button>
							</div>
						</div>

						<div class="row">
							<div class="col-xs-12">
								<h5><strong>Eliminar Estación</strong></h5>
							</div>
							<div class="col-xs-12 margenEspecial dropdownZonas">
								<button id="btnDelEstacion" type="button" style="margin-top: 0px" class="btn btn-default btn-block dropdown-toggle" data-toggle="dropdown"> Estación <span class="caret"></span></button>
								<ul id="dropdownDelEstacion" class="dropdown-menu btn-block" role="menu">
							    	  <!--<li><a href="#">Estación 1</a></li>
							    	  <li><a href="#">Estación 2</a></li>
							    	  <li><a href="#">Estación 3</a></li>
							    	  <li><a href="#">Estación 4</a></li>-->
								</ul>
							</div>
							<div class="col-xs-12 col-sm-4 col-sm-offset-8">
								<button class="btn btn-danger btn-block pull-right" style="margin-top: 0" type="button">Eliminar</button>
							</div>
						</div>
						
					</div>
				</div>
			</div>
		</div>

		<div class="modal" id="personal" tabindex="-1" role="dialog" aria-labelledby="personalEtiqueta" aria-hidden="true">
			<div class="modal-dialog">
				<div class="modal-content">
					<div class="modal-header">
				        <button id="btnCerrarPersonal" type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
						<h4 class="modal-title" id="personalEtiqueta">Buscar / Agregar personal</h4>
					</div>
					<div class="modal-body">

						<div class="row margenEspecial paddingEspecial">
							<div class="col-xs-12">
								<h5><strong>Agregar Personal</strong></h5>
							</div>
							<div class="col-xs-12 margenEspecial">
								<div class="input-group">
									<span class="input-group-addon" id="basic-addon1">Nombre</span>
									<input id="nombreAddPersonal" type="text" class="form-control" placeholder="Nombre del Personal" aria-describedby="basic-addon1">
								</div>
							</div>
							<div class="col-xs-12 margenEspecial">
								<div class="input-group">
									<span class="input-group-addon" id="basic-addon1">Puesto</span>
									<input id="puestoAddPersonal" type="text" class="form-control" placeholder="Puesto del Personal" aria-describedby="basic-addon1">
								</div>
							</div>
							<div class="col-xs-12 col-sm-4 col-sm-offset-8">
								<button id="btnAddPersonal" class="btn btn-info btn-block pull-right" style="margin-top: 0" type="button">Agregar</button>
							</div>
						</div>

						<div class="row">
							<div class="col-xs-12">
								<h5><strong>Buscar Personal</strong></h5>
							</div>
							<div class="col-xs-12 margenEspecial">
								<div class="input-group">
									<span class="input-group-addon" id="basic-addon1">Nombre</span>
									<input id="nombreBuscarPersonal" type="text" class="form-control" placeholder="Nombre del Personal" aria-describedby="basic-addon1">
								</div>
							</div>
							<div class="col-xs-12 col-sm-4 col-sm-offset-8">
								<button id="btnBuscarPersonal" class="btn btn-info btn-block pull-right" style="margin-top: 0" type="button">Seleccionar</button>
							</div>
						</div>
						
					</div>
				</div>
			</div>
		</div>

		<script src="js/jquery-2.1.4.min.js"></script>
		<script src="js/bootstrap.min.js"></script>
		<script src="js/Chart.min.js"></script>
		<script src="js/evaluaciones.js"></script>

	</body>
</html>