var hayEvaluacion = true;
var hayEvaluacionPersonal = false;

var estacion, turno;

var max_e = 64;
var no_veh = 3;
var noEvaluacionPersonal = 0;
var nombre = new Array();
var puesto = new Array();

var p1_saludo = new Array(max_e);
var p2_gascard = new Array(max_e);
var p3_ratificacion = new Array(max_e);
var p4_formaPago = new Array(max_e);
var p5_aditivo = new Array(max_e);
var p6_ceros = new Array(max_e);
var p7_niveles = new Array(max_e);
var p8_cristales = new Array(max_e);
var p9_llantas = new Array(max_e);
var p10_cobro = new Array(max_e);
var p11_factura = new Array(max_e);
var p12_despedida = new Array(max_e);
var p13_evlPersonal = new Array(max_e);

for(var arraYi = 0; arraYi < max_e; arraYi++){

	p1_saludo[arraYi] = new Array(no_veh);
	p2_gascard[arraYi] = new Array(no_veh);
	p3_ratificacion[arraYi] = new Array(no_veh);
	p4_formaPago[arraYi] = new Array(no_veh);
	p5_aditivo[arraYi] = new Array(no_veh);
	p6_ceros[arraYi] = new Array(no_veh);
	p7_niveles[arraYi] = new Array(no_veh);
	p8_cristales[arraYi] = new Array(no_veh);
	p9_llantas[arraYi] = new Array(no_veh);
	p10_cobro[arraYi] = new Array(no_veh);
	p11_factura[arraYi] = new Array(no_veh);
	p12_despedida[arraYi] = new Array(no_veh);
	p13_evlPersonal[arraYi] = new Array(7);

	for(var arraYk = 0; arraYk < 7; arraYk++) p13_evlPersonal[arraYi][arraYk] = 0;

	for(var arraYj = 0; arraYj < no_veh; arraYj++){

		p1_saludo[arraYi][arraYj] = new Array(5);
		p2_gascard[arraYi][arraYj] = new Array(5);
		p3_ratificacion[arraYi][arraYj] = 0;
		p4_formaPago[arraYi][arraYj] = 0;
		p5_aditivo[arraYi][arraYj] = new Array(3);
		p6_ceros[arraYi][arraYj] = new Array(2);
		p7_niveles[arraYi][arraYj] = new Array(2);
		p8_cristales[arraYi][arraYj] = new Array(2);
		p9_llantas[arraYi][arraYj] = new Array(2);
		p10_cobro[arraYi][arraYj] = new Array(8);
		p11_factura[arraYi][arraYj] = new Array(2);
		p12_despedida[arraYi][arraYj] = new Array(2);

		for(var arraYk = 0; arraYk < 5; arraYk++) p1_saludo[arraYi][arraYj][arraYk] = 0;
		for(var arraYk = 0; arraYk < 5; arraYk++) p2_gascard[arraYi][arraYj][arraYk] = 0;
		for(var arraYk = 0; arraYk < 3; arraYk++) p5_aditivo[arraYi][arraYj][arraYk] = 0;
		for(var arraYk = 0; arraYk < 2; arraYk++) p6_ceros[arraYi][arraYj][arraYk] = 0;
		for(var arraYk = 0; arraYk < 2; arraYk++) p7_niveles[arraYi][arraYj][arraYk] = 0;
		for(var arraYk = 0; arraYk < 2; arraYk++) p8_cristales[arraYi][arraYj][arraYk] = 0;	
		for(var arraYk = 0; arraYk < 2; arraYk++) p9_llantas[arraYi][arraYj][arraYk] = 0;
		for(var arraYk = 0; arraYk < 8; arraYk++) p10_cobro[arraYi][arraYj][arraYk] = 0;
		for(var arraYk = 0; arraYk < 2; arraYk++) p11_factura[arraYi][arraYj][arraYk] = 0;
		for(var arraYk = 0; arraYk < 2; arraYk++) p12_despedida[arraYi][arraYj][arraYk] = 0;

	}
}

var selector = 0;
var selectorVehiculo = 0;

var p1Calif = new Array(max_e);
var p2Calif = new Array(max_e);
var p3Calif = new Array(max_e);
var p4Calif = new Array(max_e);
var p5Calif = new Array(max_e);
var p6Calif = new Array(max_e);
var p7Calif = new Array(max_e);
var p8Calif = new Array(max_e);
var p9Calif = new Array(max_e);
var p10Calif = new Array(max_e);
var p11Calif = new Array(max_e);
var p12Calif = new Array(max_e);
var p13Calif = new Array(max_e);
var psuma = new Array(max_e);

var promedioVehiculo = new Array(max_e);
var promedioPersonal = new Array(max_e);

for(var caliFi = 0; caliFi < max_e; caliFi++){
	p1Calif[caliFi] = new Array(3);
	p2Calif[caliFi] = new Array(3);
	p3Calif[caliFi] = new Array(3);
	p4Calif[caliFi] = new Array(3);
	p5Calif[caliFi] = new Array(3);
	p6Calif[caliFi] = new Array(3);
	p7Calif[caliFi] = new Array(3);
	p8Calif[caliFi] = new Array(3);
	p9Calif[caliFi] = new Array(3);
	p10Calif[caliFi] = new Array(3);
	p11Calif[caliFi] = new Array(3);
	p12Calif[caliFi] = new Array(3);
	p13Calif[caliFi] = 0;
	psuma[caliFi] = new Array(3);

	for(var caliFj = 0; caliFj < 3; caliFj++){
		p1Calif[caliFi][caliFj] = 0;
		p2Calif[caliFi][caliFj] = 0;
		p3Calif[caliFi][caliFj] = 0;
		p4Calif[caliFi][caliFj] = 0;
		p5Calif[caliFi][caliFj] = 0;
		p6Calif[caliFi][caliFj] = 0;
		p7Calif[caliFi][caliFj] = 0;
		p8Calif[caliFi][caliFj] = 0;
		p9Calif[caliFi][caliFj] = 0;
		p10Calif[caliFi][caliFj] = 0;
		p11Calif[caliFi][caliFj] = 0;
		p12Calif[caliFi][caliFj] = 0;
		psuma[caliFi][caliFj] = 0;
	}
}

var califVehGral = 0, califPerGral = 0;
var califFinal;

var idConfirmacion = 0;

$(document).ready(function(){
	//$(".seccion2").hide();
	$(".seccion3").hide();

	$("#btnNuevaEvaluacion").click(function(evento){
		if(hayEvaluacion == false){
			$(".seccion1").css("padding-bottom", "0");
			$(".seccion2").show();
			//$(".seccion3").show();
			$("#btnGuardarEvaluacion").removeClass("disabled");
			hayEvaluacion = true;
		}
		else{
			confirmacion("¿Desea comenzar una nueva evaluación", 1);
		}
	});

	$("#btnGuardarEvaluacion").click(function(evento){
		comprobarCampos();
	});

	jQuery.fn.estaVacio = function(mensaje){
		if($(this).val() == null || $(this).val() == ""){
			alerta(mensaje);
			return true;
		}
		return false;
	}

	$("#dropdownEstacion > li").click(function(evento){
		evento.preventDefault();
		if($("a", this).hasClass("disabled") == false){
			estacion = $("span", this).text();
			$("#btnEstacion").html(' ' + $("a", this).text() + ' <span class="caret"></span>');
		}
	});

	$("#dropdownTurno > li").click(function(evento){
		evento.preventDefault();
		if($("a", this).hasClass("disabled") == false){
			turno = $("a", this).text();
			$("#btnTurno").html(' ' + $("a", this).text() + ' <span class="caret"></span>');
		}
	});

	$("#btnNuevaEvaluacionPersonal").click(function(evento){
		evento.preventDefault();

		if(hayEvaluacionPersonal == false){
			$(".seccion3").show();
			$(".botonesPersona").removeClass("margenEspecial");
			hayEvaluacionPersonal = true;
		}
		noEvaluacionPersonal++;
		//selector++;

		nombre[noEvaluacionPersonal] = "Busca al Personal-" + noEvaluacionPersonal;
		$("#dropdownNombre").append('<li data-selector="' + noEvaluacionPersonal + '" id="nombre-'+ noEvaluacionPersonal + '"><a href="#">' + nombre[noEvaluacionPersonal] + '</a></li>');
		$("#btnNombre").html(' ' + nombre[noEvaluacionPersonal] + ' <span class="caret"></span>');
		$("#dropdownNombre > li").each(function(i){
			//$(this).removeClass("bg-info");
			if($(this).attr("id") == "nombre-" + noEvaluacionPersonal){
				$(this).addClass("bg-info");
			}
			else{
				$(this).removeClass("bg-info");
			}
		});
		selector = noEvaluacionPersonal;
		cambiarSelector();
	});

	$("#btnEliminarEvaluacionPersonal").click(function(evento){
		evento.preventDefault();
		confirmacion("¿Desea eliminar esta evaluación?", 2);
	});

	$(document).on('click', '#dropdownNombre > li', function(evento) {
		evento.preventDefault();
		if($("a", this).hasClass("disabled") == false){
			$("#nombre-" + selector).removeClass("bg-info");
			selector = $(this).attr("data-selector");
			cambiarSelector();
		}
	});

	function cambiarSelector(){
		selector = selector;
		$("#btnNombre").html(' ' + nombre[selector] + ' <span class="caret"></span>');
			$("#nombre-" + selector).addClass("bg-info");
		$("#btnVeh1").removeClass("active");
		$("#btnVeh2").removeClass("active");
		$("#btnVeh3").removeClass("active");
		$("#btnVeh1").addClass("active");
		selectorVehiculo = 0;
		cambiarVehiculo();
	}

	$("#btnVeh1").click(function(evento){
		evento.preventDefault();
		if($("#btnVeh1").hasClass("active") == false){
			$("#btnVeh1").removeClass("active");
			$("#btnVeh2").removeClass("active");
			$("#btnVeh3").removeClass("active");
			$(this).addClass("active");
			selectorVehiculo = 0;
			cambiarVehiculo();
		}		
	});

	$("#btnVeh2").click(function(evento){
		evento.preventDefault();
		if($("#btnVeh2").hasClass("active") == false){
			$("#btnVeh1").removeClass("active");
			$("#btnVeh2").removeClass("active");
			$("#btnVeh3").removeClass("active");
			$(this).addClass("active");
			selectorVehiculo = 1;
			cambiarVehiculo();
		}		
	});

	$("#btnVeh3").click(function(evento){
		evento.preventDefault();
		if($("#btnVeh3").hasClass("active") == false){
			$("#btnVeh1").removeClass("active");
			$("#btnVeh2").removeClass("active");
			$("#btnVeh3").removeClass("active");
			$(this).addClass("active");
			selectorVehiculo = 2;
			cambiarVehiculo();
		}		
	});

	// Click checkbox & radiobuttons

	$(".formularioVehiculos input").click(function(evento){
		reporteEvaluacion();

		var dataVeh = $(this).attr("data-formVeh");

		// saludo y bienvenida

		if(dataVeh == "orientveh"){
			if($(this).prop("checked") == true) p1_saludo[selector][selectorVehiculo][0] = 1;
			else if($(this).prop("checked") == false) p1_saludo[selector][selectorVehiculo][0] = 0;
		}
		else if(dataVeh == "bienv"){
			if($(this).prop("checked") == true) p1_saludo[selector][selectorVehiculo][1] = 1;
			else if($(this).prop("checked") == false) p1_saludo[selector][selectorVehiculo][1] = 0;
		}
		else if(dataVeh == "buend"){
			if($(this).prop("checked") == true) p1_saludo[selector][selectorVehiculo][2] = 1;
			else if($(this).prop("checked") == false) p1_saludo[selector][selectorVehiculo][2] = 0;
		}
		else if(dataVeh == "leatien"){
			if($(this).prop("checked") == true) p1_saludo[selector][selectorVehiculo][3] = 1;
			else if($(this).prop("checked") == false) p1_saludo[selector][selectorVehiculo][3] = 0;
		}
		else if(dataVeh == "asusord"){
			if($(this).prop("checked") == true) p1_saludo[selector][selectorVehiculo][4] = 1;
			else if($(this).prop("checked") == false) p1_saludo[selector][selectorVehiculo][4] = 0;
		}

		// tarjeta gascard
		
		else if(dataVeh == "soldgascd"){
			if($(this).prop("checked") == true){
				p2_gascard[selector][selectorVehiculo][0] = 1;
				$("input[name='opcGascard']").prop("disabled", false);
			}
			else if($(this).prop("checked") == false){
				p2_gascard[selector][selectorVehiculo][0] = 0;
				$("input[name='opcGascard']").prop("disabled", true);
				$("input[name='opcGascard']").prop("checked", false);
				$("input[data-formVeh='mencsr']").prop("disabled", true);
				$("input[data-formVeh='mencsr']").prop("checked", false);
				$("input[data-formVeh='ofrafl']").prop("disabled", true);
				$("input[data-formVeh='ofrafl']").prop("checked", false);
				p2_gascard[selector][selectorVehiculo][1] = 0;
				p2_gascard[selector][selectorVehiculo][2] = 0;
				p2_gascard[selector][selectorVehiculo][3] = 0;
				p2_gascard[selector][selectorVehiculo][4] = 0;
			}
		}
		else if(dataVeh == "nogascd"){
			if($(this).prop("checked") == true){
				p2_gascard[selector][selectorVehiculo][1] = 1;
				$("input[data-formVeh='ofrafl']").prop("disabled", false);
				$("input[data-formVeh='mencsr']").prop("disabled", true);
				$("input[data-formVeh='mencsr']").prop("checked", false);
				p2_gascard[selector][selectorVehiculo][3] = 0;
				p2_gascard[selector][selectorVehiculo][4] = 0;
			}
		}
		else if(dataVeh == "sigascd"){
			if($(this).prop("checked") == true){
				p2_gascard[selector][selectorVehiculo][3] = 1;
				$("input[data-formVeh='mencsr']").prop("disabled", false);
				$("input[data-formVeh='ofrafl']").prop("disabled", true);
				$("input[data-formVeh='ofrafl']").prop("checked", false);
				p2_gascard[selector][selectorVehiculo][1] = 0
				p2_gascard[selector][selectorVehiculo][2] = 0;
			}
		}
		else if(dataVeh == "ofrafl"){
			if($(this).prop("checked") == true) p2_gascard[selector][selectorVehiculo][2] = 1;
			else if($(this).prop("checked") == false) p2_gascard[selector][selectorVehiculo][2] = 0;
		}
		else if(dataVeh == "mencsr"){
			if($(this).prop("checked") == true) p2_gascard[selector][selectorVehiculo][4] = 1;
			else if($(this).prop("checked") == false) p2_gascard[selector][selectorVehiculo][4] = 0;
		}

		// ratificacion de datos

		else if(dataVeh == "ratdat"){
			if($(this).prop("checked") == true) p3_ratificacion[selector][selectorVehiculo] = 1;
			else if($(this).prop("checked") == false) p3_ratificacion[selector][selectorVehiculo] = 0;
		}

		// ratificacion de datos

		else if(dataVeh == "forpag"){
			if($(this).prop("checked") == true) p4_formaPago[selector][selectorVehiculo] = 1;
			else if($(this).prop("checked") == false) p4_formaPago[selector][selectorVehiculo] = 0;
		}

		// ofrecimiento de aditivos

		else if(dataVeh == "postfis"){
			if($(this).prop("checked") == true) p5_aditivo[selector][selectorVehiculo][0] = 1;
			else if($(this).prop("checked") == false) p5_aditivo[selector][selectorVehiculo][0] = 0;
		}
		else if(dataVeh == "ofradit"){
			if($(this).prop("checked") == true) p5_aditivo[selector][selectorVehiculo][1] = 1;
			else if($(this).prop("checked") == false) p5_aditivo[selector][selectorVehiculo][1] = 0;
		}
		else if(dataVeh == "mencbenf"){
			if($(this).prop("checked") == true) p5_aditivo[selector][selectorVehiculo][2] = 1;
			else if($(this).prop("checked") == false) p5_aditivo[selector][selectorVehiculo][2] = 0;
		}

		// verificar ceros

		else if(dataVeh == "invaverf"){
			if($(this).prop("checked") == true) p6_ceros[selector][selectorVehiculo][0] = 1;
			else if($(this).prop("checked") == false) p6_ceros[selector][selectorVehiculo][0] = 0;
		}
		else if(dataVeh == "verfvend"){
			if($(this).prop("checked") == true) p6_ceros[selector][selectorVehiculo][1] = 1;
			else if($(this).prop("checked") == false) p6_ceros[selector][selectorVehiculo][1] = 0;
		}

		// revision de niveles

		else if(dataVeh == "servcofr"){
			if($(this).prop("checked") == true) p7_niveles[selector][selectorVehiculo][0] = 1;
			else if($(this).prop("checked") == false) p7_niveles[selector][selectorVehiculo][0] = 0;
		}
		else if(dataVeh == "dispserv"){
			if($(this).prop("checked") == true) p7_niveles[selector][selectorVehiculo][1] = 1;
			else if($(this).prop("checked") == false) p7_niveles[selector][selectorVehiculo][1] = 0;
		}

		// limpieza de cristales

		else if(dataVeh == "limpparb"){
			if($(this).prop("checked") == true) p8_cristales[selector][selectorVehiculo][0] = 1;
			else if($(this).prop("checked") == false) p8_cristales[selector][selectorVehiculo][0] = 0;
		}
		else if(dataVeh == "retresjab"){
			if($(this).prop("checked") == true) p8_cristales[selector][selectorVehiculo][1] = 1;
			else if($(this).prop("checked") == false) p8_cristales[selector][selectorVehiculo][1] = 0;
		}

		// revision de llantas

		else if(dataVeh == "infllant"){
			if($(this).prop("checked") == true) p9_llantas[selector][selectorVehiculo][0] = 1;
			else if($(this).prop("checked") == false) p9_llantas[selector][selectorVehiculo][0] = 0;
		}
		else if(dataVeh == "usomang"){
			if($(this).prop("checked") == true) p9_llantas[selector][selectorVehiculo][1] = 1;
			else if($(this).prop("checked") == false) p9_llantas[selector][selectorVehiculo][1] = 0;
		}

		// cobro

		else if(dataVeh == "efect"){
			if($(this).prop("checked") == true){
				p10_cobro[selector][selectorVehiculo][0] = 1;
				$("input[data-formVeh='verfbill']").prop("disabled", false);
				$("input[data-formVeh='acerterm']").prop("disabled", true);
				$("input[data-formVeh='verfval']").prop("disabled", true);
				$("input[data-formVeh='solicine']").prop("disabled", true);
				$("input[data-formVeh='anotplc']").prop("disabled", true);
				p10_cobro[selector][selectorVehiculo][2] = 0;
				p10_cobro[selector][selectorVehiculo][3] = 0;
				p10_cobro[selector][selectorVehiculo][4] = 0;
				p10_cobro[selector][selectorVehiculo][5] = 0;
				p10_cobro[selector][selectorVehiculo][6] = 0;
				p10_cobro[selector][selectorVehiculo][7] = 0;
				$("input[data-formVeh='acerterm']").prop("checked", false);
				$("input[data-formVeh='verfval']").prop("checked", false);
				$("input[data-formVeh='solicine']").prop("checked", false);
				$("input[data-formVeh='anotplc']").prop("checked", false);
			}
		}
		else if(dataVeh == "tarjbanc"){
			if($(this).prop("checked") == true){
				p10_cobro[selector][selectorVehiculo][2] = 1;
				$("input[data-formVeh='verfbill']").prop("disabled", true);
				$("input[data-formVeh='acerterm']").prop("disabled", false);
				$("input[data-formVeh='verfval']").prop("disabled", true);
				$("input[data-formVeh='solicine']").prop("disabled", false);
				$("input[data-formVeh='anotplc']").prop("disabled", true);
				p10_cobro[selector][selectorVehiculo][0] = 0;
				p10_cobro[selector][selectorVehiculo][1] = 0;
				p10_cobro[selector][selectorVehiculo][5] = 0;
				p10_cobro[selector][selectorVehiculo][6] = 0;
				p10_cobro[selector][selectorVehiculo][7] = 0;
				$("input[data-formVeh='verfbill']").prop("checked", false);
				$("input[data-formVeh='verfval']").prop("checked", false);
				$("input[data-formVeh='anotplc']").prop("checked", false);
			}
		}
		else if(dataVeh == "vales"){
			if($(this).prop("checked") == true){
				p10_cobro[selector][selectorVehiculo][5] = 1;
				$("input[data-formVeh='verfbill']").prop("disabled", true);
				$("input[data-formVeh='acerterm']").prop("disabled", true);
				$("input[data-formVeh='verfval']").prop("disabled", false);
				$("input[data-formVeh='solicine']").prop("disabled", true);
				$("input[data-formVeh='anotplc']").prop("disabled", false);
				p10_cobro[selector][selectorVehiculo][0] = 0;
				p10_cobro[selector][selectorVehiculo][1] = 0;
				p10_cobro[selector][selectorVehiculo][2] = 0;
				p10_cobro[selector][selectorVehiculo][3] = 0;
				p10_cobro[selector][selectorVehiculo][4] = 0;
				$("input[data-formVeh='verfbill']").prop("checked", false);
				$("input[data-formVeh='acerterm']").prop("checked", false);
				$("input[data-formVeh='solicine']").prop("checked", false);
			}
		}
		else if(dataVeh == "verfbill"){
			if($(this).prop("checked") == true) p10_cobro[selector][selectorVehiculo][1] = 1;
			else if($(this).prop("checked") == false) p10_cobro[selector][selectorVehiculo][1] = 0;
		}
		else if(dataVeh == "acerterm"){
			if($(this).prop("checked") == true) p10_cobro[selector][selectorVehiculo][3] = 1;
			else if($(this).prop("checked") == false) p10_cobro[selector][selectorVehiculo][3] = 0;
		}
		else if(dataVeh == "verfval"){
			if($(this).prop("checked") == true) p10_cobro[selector][selectorVehiculo][6] = 1;
			else if($(this).prop("checked") == false) p10_cobro[selector][selectorVehiculo][6] = 0;
		}
		else if(dataVeh == "solicine"){
			if($(this).prop("checked") == true) p10_cobro[selector][selectorVehiculo][4] = 1;
			else if($(this).prop("checked") == false) p10_cobro[selector][selectorVehiculo][4] = 0;
		}
		else if(dataVeh == "anotplc"){
			if($(this).prop("checked") == true) p10_cobro[selector][selectorVehiculo][7] = 1;
			else if($(this).prop("checked") == false) p10_cobro[selector][selectorVehiculo][7] = 0;
		}

		// factura

		else if(dataVeh == "ofrcfact"){
			if($(this).prop("checked") == true) p11_factura[selector][selectorVehiculo][0] = 1;
			else if($(this).prop("checked") == false) p11_factura[selector][selectorVehiculo][0] = 0;
		}
		else if(dataVeh == "invitverdat"){
			if($(this).prop("checked") == true) p11_factura[selector][selectorVehiculo][1] = 1;
			else if($(this).prop("checked") == false) p11_factura[selector][selectorVehiculo][1] = 0;
		}

		// despedida

		else if(dataVeh == "agrdvisit"){
			if($(this).prop("checked") == true) p12_despedida[selector][selectorVehiculo][0] = 1;
			else if($(this).prop("checked") == false) p12_despedida[selector][selectorVehiculo][0] = 0;
		}
		else if(dataVeh == "invitreg"){
			if($(this).prop("checked") == true) p12_despedida[selector][selectorVehiculo][1] = 1;
			else if($(this).prop("checked") == false) p12_despedida[selector][selectorVehiculo][1] = 0;
		}

		// evaluacion personal

		if($(this).attr("name") == "presentacionPersonal"){
			p13_evlPersonal[selector][0] = $(this).attr("value");
		}
		else if($(this).attr("name") == "limpiezaPersonal"){
			p13_evlPersonal[selector][1] = $(this).attr("value");
		}
		else if($(this).attr("name") == "amabilidad"){
			p13_evlPersonal[selector][2] = $(this).attr("value");
		}
		else if($(this).attr("name") == "atencion"){
			p13_evlPersonal[selector][3] = $(this).attr("value");
		}
		else if($(this).attr("name") == "disposicion"){
			p13_evlPersonal[selector][4] = $(this).attr("value");
		}
		else if($(this).attr("name") == "contactoVisualLocucion"){
			p13_evlPersonal[selector][5] = $(this).attr("value");
		}
		else if($(this).attr("name") == "rapidez"){
			p13_evlPersonal[selector][6] = $(this).attr("value");
		}

	});

	function cambiarVehiculo(){
		borrarCampos();
		actualizarCampos();
	}

	function borrarCampos(){
		$(".formularioVehiculos input").each(function(i){
			$(this).prop("checked", false);
		});
		$("input[name='opcGascard']").prop("disabled", true);
		$("input[data-formVeh='ofrafl']").prop("disabled", true);
		$("input[data-formVeh='mencsr']").prop("disabled", true);
		$("input[data-formVeh='verfbill']").prop("disabled", true);
		$("input[data-formVeh='acerterm']").prop("disabled", true);
		$("input[data-formVeh='verfval']").prop("disabled", true);
		$("input[data-formVeh='solicine']").prop("disabled", true);
		$("input[data-formVeh='anotplc']").prop("disabled", true);
	}

	function actualizarCampos(){
		reporteEvaluacion();

		// saludo y bienvenida

		if(p1_saludo[selector][selectorVehiculo][0] == 1) $("input[data-formVeh='orientveh']").prop("checked", true);
		else if(p1_saludo[selector][selectorVehiculo][0] == 0) $("input[data-formVeh='orientveh']").prop("checked", false);

		if(p1_saludo[selector][selectorVehiculo][1] == 1) $("input[data-formVeh='bienv']").prop("checked", true);
		else if(p1_saludo[selector][selectorVehiculo][1] == 0) $("input[data-formVeh='bienv']").prop("checked", false);

		if(p1_saludo[selector][selectorVehiculo][2] == 1) $("input[data-formVeh='buend']").prop("checked", true);
		else if(p1_saludo[selector][selectorVehiculo][2] == 0) $("input[data-formVeh='buend']").prop("checked", false);

		if(p1_saludo[selector][selectorVehiculo][3] == 1) $("input[data-formVeh='leatien']").prop("checked", true);
		else if(p1_saludo[selector][selectorVehiculo][3] == 0) $("input[data-formVeh='leatien']").prop("checked", false);

		if(p1_saludo[selector][selectorVehiculo][4] == 1) $("input[data-formVeh='asusord']").prop("checked", true);
		else if(p1_saludo[selector][selectorVehiculo][4] == 0) $("input[data-formVeh='asusord']").prop("checked", false);

		// tarjeta gascard

		if(p2_gascard[selector][selectorVehiculo][0] == 1){
			$("input[data-formVeh='soldgascd']").prop("checked", true);
			$("input[data-formVeh='nogascd']").prop("disabled", false);
			$("input[data-formVeh='sigascd']").prop("disabled", false);
			if(p2_gascard[selector][selectorVehiculo][1] == 1){
				$("input[data-formVeh='nogascd']").prop("checked", true);
				$("input[data-formVeh='ofrafl']").prop("disabled", false);
				if(p2_gascard[selector][selectorVehiculo][2] == 1){
					$("input[data-formVeh='ofrafl']").prop("checked", true);
				}
			}
			if(p2_gascard[selector][selectorVehiculo][3] == 1){
				$("input[data-formVeh='sigascd']").prop("checked", true);
				$("input[data-formVeh='mencsr']").prop("disabled", false);
				if(p2_gascard[selector][selectorVehiculo][4] == 1){
					$("input[data-formVeh='mencsr']").prop("checked", true);
				}
			}
		}
		else if(p2_gascard[selector][selectorVehiculo][0] == 0){
			$("input[data-formVeh='soldgascd']").prop("checked", false);
		}

		// ratificación de datos

		if(p3_ratificacion[selector][selectorVehiculo] == 1) $("input[data-formVeh='ratdat']").prop("checked", true);
		else if(p3_ratificacion[selector][selectorVehiculo] == 0) $("input[data-formVeh='ratdat']").prop("checked", false);

		// forma de pago

		if(p4_formaPago[selector][selectorVehiculo] == 1) $("input[data-formVeh='forpag']").prop("checked", true);
		else if(p4_formaPago[selector][selectorVehiculo] == 0) $("input[data-formVeh='forpag']").prop("checked", false);

		// ofrecimiento de aditivo

		if(p5_aditivo[selector][selectorVehiculo][0] == 1) $("input[data-formVeh='postfis']").prop("checked", true);
		else if(p5_aditivo[selector][selectorVehiculo][0] == 0) $("input[data-formVeh='postfis']").prop("checked", false);

		if(p5_aditivo[selector][selectorVehiculo][1] == 1) $("input[data-formVeh='ofradit']").prop("checked", true);
		else if(p5_aditivo[selector][selectorVehiculo][1] == 0) $("input[data-formVeh='ofradit']").prop("checked", false);

		if(p5_aditivo[selector][selectorVehiculo][2] == 1) $("input[data-formVeh='mencbenf']").prop("checked", true);
		else if(p5_aditivo[selector][selectorVehiculo][2] == 0) $("input[data-formVeh='mencbenf']").prop("checked", false);

		// verificar ceros

		if(p6_ceros[selector][selectorVehiculo][0] == 1) $("input[data-formVeh='invaverf']").prop("checked", true);
		else if(p6_ceros[selector][selectorVehiculo][0] == 0) $("input[data-formVeh='invaverf']").prop("checked", false);

		if(p6_ceros[selector][selectorVehiculo][1] == 1) $("input[data-formVeh='verfvend']").prop("checked", true);
		else if(p6_ceros[selector][selectorVehiculo][1] == 0) $("input[data-formVeh='verfvend']").prop("checked", false);

		// revision de niveles

		if(p7_niveles[selector][selectorVehiculo][0] == 1) $("input[data-formVeh='servcofr']").prop("checked", true);
		else if(p7_niveles[selector][selectorVehiculo][0] == 0) $("input[data-formVeh='servcofr']").prop("checked", false);

		if(p7_niveles[selector][selectorVehiculo][1] == 1) $("input[data-formVeh='dispserv']").prop("checked", true);
		else if(p7_niveles[selector][selectorVehiculo][1] == 0) $("input[data-formVeh='dispserv']").prop("checked", false);

		// limpieza de cristales

		if(p8_cristales[selector][selectorVehiculo][0] == 1) $("input[data-formVeh='limpparb']").prop("checked", true);
		else if(p8_cristales[selector][selectorVehiculo][0] == 0) $("input[data-formVeh='limpparb']").prop("checked", false);

		if(p8_cristales[selector][selectorVehiculo][1] == 1) $("input[data-formVeh='retresjab']").prop("checked", true);
		else if(p8_cristales[selector][selectorVehiculo][1] == 0) $("input[data-formVeh='retresjab']").prop("checked", false);

		// revision de llantas

		if(p9_llantas[selector][selectorVehiculo][0] == 1) $("input[data-formVeh='infllant']").prop("checked", true);
		else if(p9_llantas[selector][selectorVehiculo][0] == 0) $("input[data-formVeh='infllant']").prop("checked", false);

		if(p9_llantas[selector][selectorVehiculo][1] == 1) $("input[data-formVeh='usomang']").prop("checked", true);
		else if(p9_llantas[selector][selectorVehiculo][1] == 0) $("input[data-formVeh='usomang']").prop("checked", false);

		// cobro

		if(p9_llantas[selector][selectorVehiculo][0] == 1) $("input[data-formVeh='infllant']").prop("checked", true);
		else if(p9_llantas[selector][selectorVehiculo][0] == 0) $("input[data-formVeh='infllant']").prop("checked", false);

		if(p10_cobro[selector][selectorVehiculo][0] == 1){
			$("input[data-formVeh='efect']").prop("checked", true);
			$("input[data-formVeh='verfbill']").prop("disabled", false);
			if(p10_cobro[selector][selectorVehiculo][1] == 1){
				$("input[data-formVeh='verfbill']").prop("checked", true);
			}
		}
		if(p10_cobro[selector][selectorVehiculo][2] == 1){
			$("input[data-formVeh='tarjbanc']").prop("checked", true);
			$("input[data-formVeh='acerterm']").prop("disabled", false);
			$("input[data-formVeh='solicine']").prop("disabled", false);
			if(p10_cobro[selector][selectorVehiculo][3] == 1){
				$("input[data-formVeh='acerterm']").prop("checked", true);
			}
			if(p10_cobro[selector][selectorVehiculo][4] == 1){
				$("input[data-formVeh='solicine']").prop("checked", true);
			}
		}
		if(p10_cobro[selector][selectorVehiculo][5] == 1){
			$("input[data-formVeh='vales']").prop("checked", true);
			$("input[data-formVeh='verfval']").prop("disabled", false);
			$("input[data-formVeh='anotplc']").prop("disabled", false);
			if(p10_cobro[selector][selectorVehiculo][6] == 1){
				$("input[data-formVeh='verfval']").prop("checked", true);
			}
			if(p10_cobro[selector][selectorVehiculo][7] == 1){
				$("input[data-formVeh='anotplc']").prop("checked", true);
			}
		}

		// factura

		if(p11_factura[selector][selectorVehiculo][0] == 1) $("input[data-formVeh='ofrcfact']").prop("checked", true);
		else if(p11_factura[selector][selectorVehiculo][0] == 0) $("input[data-formVeh='ofrcfact']").prop("checked", false);

		if(p11_factura[selector][selectorVehiculo][1] == 1) $("input[data-formVeh='invitverdat']").prop("checked", true);
		else if(p11_factura[selector][selectorVehiculo][1] == 0) $("input[data-formVeh='invitverdat']").prop("checked", false);

		// despedida

		if(p12_despedida[selector][selectorVehiculo][0] == 1) $("input[data-formVeh='agrdvisit']").prop("checked", true);
		else if(p12_despedida[selector][selectorVehiculo][0] == 0) $("input[data-formVeh='agrdvisit']").prop("checked", false);

		if(p12_despedida[selector][selectorVehiculo][1] == 1) $("input[data-formVeh='invitreg']").prop("checked", true);
		else if(p12_despedida[selector][selectorVehiculo][1] == 0) $("input[data-formVeh='invitreg']").prop("checked", false);

		// evaluacion personal

		if(p13_evlPersonal[selector][selectorVehiculo][0] != 0){
			$("input[name='presentacionPersonal']").each(function(i){
				if($(this).attr("value") == p13_evlPersonal[selector][0]){
					$(this).prop("checked", true);
				}
			});
		}

		if(p13_evlPersonal[selector][selectorVehiculo][1] != 0){
			$("input[name='limpiezaPersonal']").each(function(i){
				if($(this).attr("value") == p13_evlPersonal[selector][1]){
					$(this).prop("checked", true);
				}
			});
		}

		if(p13_evlPersonal[selector][selectorVehiculo][2] != 0){
			$("input[name='amabilidad']").each(function(i){
				if($(this).attr("value") == p13_evlPersonal[selector][2]){
					$(this).prop("checked", true);
				}
			});
		}

		if(p13_evlPersonal[selector][selectorVehiculo][3] != 0){
			$("input[name='atencion']").each(function(i){
				if($(this).attr("value") == p13_evlPersonal[selector][3]){
					$(this).prop("checked", true);
				}
			});
		}

		if(p13_evlPersonal[selector][selectorVehiculo][4] != 0){
			$("input[name='disposicion']").each(function(i){
				if($(this).attr("value") == p13_evlPersonal[selector][4]){
					$(this).prop("checked", true);
				}
			});
		}

		if(p13_evlPersonal[selector][selectorVehiculo][5] != 0){
			$("input[name='contactoVisualLocucion']").each(function(i){
				if($(this).attr("value") == p13_evlPersonal[selector][5]){
					$(this).prop("checked", true);
				}
			});
		}

		if(p13_evlPersonal[selector][selectorVehiculo][6] != 0){
			$("input[name='rapidez']").each(function(i){
				if($(this).attr("value") == p13_evlPersonal[selector][6]){
					$(this).prop("checked", true);
				}
			});
		}
	}

	function comprobarCampos(){
		if(estacion == null){
			aviso("Falta elegir estación");
		}
		if(turno == null){
			aviso("Falta elegir turno.");
		}
		for(var i = 0; i < noEvaluacionPersonal; i++){
			for(var j = 0; j < 7; j++){
				if(p13_evlPersonal[i][j] == null){
					return aviso("Hay un campo vacío dentro de la evaluacion.");
				}
			}
		}
	}

	function reporteEvaluacion(){

		var promedioVeh = 0;
		var califPers = 0;

		p13Calif[selector] = 0;
		
		var p1Count = new Array(3);
		var p2Count = new Array(3);
		var p3Count = new Array(3);
		var p4Count = new Array(3);
		var p5Count = new Array(3);
		var p6Count = new Array(3);
		var p7Count = new Array(3);
		var p8Count = new Array(3);
		var p9Count = new Array(3);
		var p10Count = new Array(3);
		var p11Count = new Array(3);
		var p12Count = new Array(3);
		var p13Count = 0;

		for(var i = 0; i < no_veh; i++){

			p1Count[i] = 0;
			p2Count[i] = 0;
			p3Count[i] = 0;
			p4Count[i] = 0;
			p5Count[i] = 0;
			p6Count[i] = 0;
			p7Count[i] = 0;
			p8Count[i] = 0;
			p9Count[i] = 0;
			p10Count[i] = 0;
			p11Count[i] = 0;
			p12Count[i] = 0;

			// saludo y bienvenida
			
			for(var j = 0; j < p1_saludo[selector][i].length; j++){
				if(p1_saludo[selector][i][j] == 1){
					p1Count[i]++;
				}
			}

			if(p1Count[i] >= 3) {
				p1Calif[selector][i] = 1;
			}

			// tarjeta gascard


			for(var j = 0; j < p2_gascard[selector][i].length; j++){
				if(p2_gascard[selector][i][j] == 1){
					p2Count[i]++;
				}
			}

			if(p2Count[i] >= 2) {
				p2Calif[selector][i] = 1;
			}

			// ratificacion de datos

			if(p3_ratificacion[selector][i] == 1){
				p3Count[i]++;
			}

			if(p3Count[i] >= 1) {
				p3Calif[selector][i] = 1;
			}

			// forma pago

			if(p4_formaPago[selector][i] == 1){
				p4Count[i]++;
			}

			if(p4Count[i] >= 1) {
				p4Calif[selector][i] = 1;
			}

			// ofrecimiento de aditivo

			for(var j = 0; j < p5_aditivo[selector][i].length; j++){
				if(p5_aditivo[selector][i][j] == 1){
					p5Count[i]++;
				}
			}

			if(p5Count[i] >= 2) {
				p5Calif[selector][i] = 1;
			}

			// verificar ceros

			for(var j = 0; j < p6_ceros[selector][i].length; j++){
				if(p6_ceros[selector][i][j] == 1){
					p6Count[i]++;
				}
			}

			if(p6Count[i] >= 1) {
				p6Calif[selector][i] = 1;
			}

			// revision de niveles

			for(var j = 0; j < p7_niveles[selector][i].length; j++){
				if(p7_niveles[selector][i][j] == 1){
					p7Count[i]++;
				}
			}

			if(p7Count[i] >= 1) {
				p7Calif[selector][i] = 1;
			}

			// limpieza de cristales

			for(var j = 0; j < p8_cristales[selector][i].length; j++){
				if(p8_cristales[selector][i][j] == 1){
					p8Count[i]++;
				}
			}

			if(p8Count[i] >= 1) {
				p8Calif[selector][i] = 1;
			}

			// revision de llantas

			for(var j = 0; j < p9_llantas[selector][i].length; j++){
				if(p9_llantas[selector][i][j] == 1){
					p9Count[i]++;
				}
			}

			if(p9Count[i] >= 1) {
				p9Calif[selector][i] = 1;
			}

			// cobro

			if(p10_cobro[selector][i][0] == 1){
				if(p10_cobro[selector][i][1] == 1){
					p10Calif[selector][i] = 1;
				}
			}
			if(p10_cobro[selector][i][2] == 1){
				if(p10_cobro[selector][i][3] == 1){
					if(p10_cobro[selector][i][4] == 1){
						p10Calif[selector][i] = 1;
					}
				}
			}
			if(p10_cobro[selector][i][5] == 1){
				if(p10_cobro[selector][i][6] == 1){
					if(p10_cobro[selector][i][7] == 1){
						p10Calif[selector][i] = 1;
					}
				}
			}

			// factura

			for(var j = 0; j < p11_factura[selector][i].length; j++){
				if(p11_factura[selector][i][j] == 1){
					p11Count[i]++;
				}
			}

			if(p11Count[i] >= 1) {
				p11Calif[selector][i] = 1;
			}

			// despedida

			for(var j = 0; j < p12_despedida[selector][i].length; j++){
				if(p12_despedida[selector][i][j] == 1){
					p12Count[i]++;
				}
			}

			if(p12Count[i] >= 1) {
				p12Calif[selector][i] = 1;
			}

			// suma

			psuma[selector][i] = p1Calif[selector][i] + p2Calif[selector][i] + p3Calif[selector][i] + p4Calif[selector][i] +
									p5Calif[selector][i] + p6Calif[selector][i] + p7Calif[selector][i] + p8Calif[selector][i] +
									p9Calif[selector][i] + p10Calif[selector][i] + p11Calif[selector][i] + p12Calif[selector][i];

			if(i == 0){
				$("#califVeh1 strong").text(psuma[selector][i]);
			}
			else if(i == 1){
				$("#califVeh2 strong").text(psuma[selector][i]);
			}
			else if(i == 2){
				$("#califVeh3 strong").text(psuma[selector][i]);
			}

			if(!isNaN(psuma[selector][i])){
				promedioVeh = (promedioVeh + psuma[selector][i]);
			}			

		}

		for(var j = 0; j < p13_evlPersonal[selector].length; j++){
			if(p13_evlPersonal[selector][j] == 1){
				p13Calif[selector] += 1;
			}
			else if(p13_evlPersonal[selector][j] == 2){
				p13Calif[selector] += 2;
			}
			else if(p13_evlPersonal[selector][j] == 3){
				p13Calif[selector] += 3;
			}
			else if(p13_evlPersonal[selector][j] == 4){
				p13Calif[selector] += 4;
			}
		}

		promedioVeh = promedioVeh/9;
		promedioVehiculo[selector] = promedioVeh;
		$("#promVeh  strong").text(promedioVeh.toFixed(2));
		if(promedioVeh <= 1){
			$("#promVeh").css("background-color", "#f7464a");
		}
		else if(promedioVeh > 1 && promedioVeh <= 2){
			$("#promVeh").css("background-color", "#f7f745");
		}
		else if(promedioVeh > 2 && promedioVeh <= 3){
			$("#promVeh").css("background-color", "#45a4f7");
		}
		else if(promedioVeh > 3){
			$("#promVeh").css("background-color", "#45f745");
		}

		$("#promPersonal strong").text((p13Calif[selector]/7).toFixed(2));
		promedioPersonal[selector] = p13Calif[selector]/7;
		if((p13Calif[selector]/7).toFixed(0) <= 1){
			$("#promPersonal").css("background-color", "#f7464a");
		}
		else if((p13Calif[selector]/7) > 1 && (p13Calif[selector]/7) <= 2){
			$("#promPersonal").css("background-color", "#f7f745");
		}
		else if((p13Calif[selector]/7) > 2 && (p13Calif[selector]/7) <= 3){
			$("#promPersonal").css("background-color", "#45a4f7");
		}
		else if((p13Calif[selector]/7) > 3){
			$("#promPersonal").css("background-color", "#45f745");
		}

		califPers = ((promedioVeh*7)/4) + (((p13Calif[selector]/7)*3)/4);
		$("#califPers strong").text(califPers.toFixed(2));
		if(califPers < 7){
			$("#califPers").css("background-color", "#f7464a");
		}
		else if(califPers >= 7 && califPers < 8){
			$("#califPers").css("background-color", "#f7f745");
		}
		else if(califPers >= 8 && califPers < 9){
			$("#califPers").css("background-color", "#45a4f7");
		}
		else if(califPers >= 9 && califPers <= 10){
			$("#califPers").css("background-color", "#45f745");
		}

		calificacionesGenerales();
	}

	function calificacionesGenerales(){
		var cont1 = 0, cont2 = 0;
		var sumPromV = 0, sumPromP = 0;
		for(var i = 0; i < max_e; i++){
			if(promedioVehiculo[i] != 0 && promedioVehiculo[i] != null){
				cont1++;
				sumPromV = sumPromV + promedioVehiculo[i];
			}
			if(promedioPersonal[i] != 0 && promedioPersonal[i] != null){
				cont2++;
				sumPromP = sumPromP + promedioPersonal[i];
			}
		}
		califVehGral = 0;
		califPerGral = 0;
		califVehGral = ((7*(sumPromV/cont1))/4);
		califPerGral = ((3*(sumPromP/cont2))/4);

		if(isNaN(califVehGral)){
			califVehGral = 0;
		}
		if(isNaN(califPerGral)){
			califPerGral = 0;
		}

		$("#califVehGral").text(califVehGral.toFixed(2));
		$("#califPerGral").text(califPerGral.toFixed(2));
		if($("#califVehGral").text() == "NaN"){
			$("#califVehGral").text("0.00");
		}
		if($("#califPerGral").text() == "NaN"){
			$("#califPerGral").text("0.00");
		}

		califFinal = 0;
		califFinal = califVehGral + califPerGral;
		$("#califFinal strong").text(califFinal.toFixed(2));
		if($("#califFinal strong").text() == "NaN"){
			$("#califFinal strong").text("0.00");
		}
		if(califFinal < 7){
			$("#califFinal").css("background-color", "#f7464a");
		}
		else if(califFinal >= 7 && califFinal < 8){
			$("#califFinal").css("background-color", "#f7f745");
		}
		else if(califFinal >= 8 && califFinal < 9){
			$("#califFinal").css("background-color", "#45a4f7");
		}
		else if(califFinal >= 9 && califFinal <= 10){
			$("#califFinal").css("background-color ", "#45f745");
		}
	}

	//calificacionesGenerales();

	$("#btnAddEstZona").click(function(evento){
		$("#addEstZona").modal('show');
		var addEstZonaCanClose = 0;
        $("#addEstZona").on('hidden.bs.modal', function(e) {
            if(addEstZonaCanClose == 0){
                $("#addEstZona").modal('show');
            }
        });
        $("#btnCerrarEstZona").click(function(evento){
            evento.preventDefault();
            addEstZonaCanClose = 1;
            $("#addEstZona").modal('hide');
        });
	});

	$('.dropdownZonas').on('show.bs.dropdown', function () {
  		$("#addEstZona").modal('show');
	});
	$('.dropdownZonas').on('hide.bs.dropdown', function () {
  		$("#addEstZona").modal('show');
	});

//

	$("#btnBuscarPersonal").click(function(evento){
		$("#personal").modal('show');
		var personalCanClose = 0;
        $("#personal").on('hidden.bs.modal', function(e) {
            if(personalCanClose == 0){
                $("#personal").modal('show');
                $("#addEstZona").modal('show');
            }
        });
        $("#btnCerrarPersonal").click(function(evento){
            evento.preventDefault();
            personalCanClose = 1;
            $("#personal").modal('hide');
        });
	});

	$('.dropdownPersonal').on('show.bs.dropdown', function () {
  		$("#personal").modal('show');
	});
	$('.dropdownPersonal').on('hide.bs.dropdown', function () {
  		$("#personal").modal('show');
	});

	function aviso(mensaje){
        $("#mensajeAviso").text(mensaje);
        $("#aviso").modal('show');
        var alertCanClose = 0;
        $("#aviso").on('hidden.bs.modal', function(e) {
            if(alertCanClose == 0){
                $("#aviso").modal('show');
            }
        });
        $("#aviso button").click(function(evento){
            evento.preventDefault();
            alertCanClose = 1;
            $("#aviso").modal('hide');
        });
    }

    function confirmacion(mensaje, id){
        $("#mensajeConfirmacion").text(mensaje);
        $("#confirmacion").modal('show');
        idConfirmacion = id;
        $("#confirmacion button").click(function(evento){
            evento.preventDefault();
            $("#confirmacion").modal('hide');
            if($(this).attr("id") == "btnAceptarConfirmacion"){
            	return 1;
            }
        });
    }

    $("#btnAceptarConfirmacion").click(function(evento){
    	if(idConfirmacion == 1){
    		aviso("Se comenzara una nueva evaluación.");
			idConfirmacion = 0;
		}
		else if(idConfirmacion == 2){
			aviso("Se ha eliminado la evaluación.");
			if(selector != 0){
				eliminarElemento();
			}
			idConfirmacion = 0;
		}
	});

	function eliminarElemento(){
		$("#dropdownNombre > li").each(function(i){
			if($(this).attr("data-selector") == selector){
				$("#nombre-" + String(selector)).remove();
				$(this).prop("data-selector", max_e+1);
				selector--;
				//noEvaluacionPersonal--;
				cambiarSelector();
			}
		});
	}

	setInterval(reporteEvaluacion, 100);

	estaciones();
	function estaciones(){
		var posting = $.post("http://localhost/go-evaluacion/php/conexionEstaciones.php", {enviar: "estaciones"});
		posting.done(function(data) {
			var contador = data.substring(data.lastIndexOf("{")+1, data.lastIndexOf("}"));
			var filas = data.split("|");
			var datosFilas = new Array(filas.length);
			for(var i = 0; i < filas.length; i++){
				datosFilas[i] = filas[i].split('/');
			}
			for(var i = 0; i < filas.length; i++){
				var hayZona = false;
				$("#dropdownEstacion > li").each(function(j){
					if($(this).attr("data-zona") == datosFilas[i][0]){
						hayZona = true;
					}
				});
				if(hayZona == false){
					$("#dropdownEstacion").append('<li data-zona="' + datosFilas[i][0] + '" data-zonanombre="' + datosFilas[i][1] + '" id="zona-'+ datosFilas[i][0] + '"><a class="text-center disabled"><strong>' + datosFilas[i][1] + '</strong></a></li>');

					$("#dropdownDelZona").append('<li data-zona="' + datosFilas[i][0] + '" data-zonanombre="' + datosFilas[i][1] + '" id="DelZonazona-'+ datosFilas[i][0] + '"><a href="#">' + datosFilas[i][1] + '</a></li>');

					$("#dropdownAddEstacion").append('<li data-zona="' + datosFilas[i][0] + '" data-zonanombre="' + datosFilas[i][1] + '" id="AddEstacionzona-'+ datosFilas[i][0] + '"><a href="#"">' + datosFilas[i][1] + '</a></li>');

					$("#dropdownDelEstacion").append('<li data-zona="' + datosFilas[i][0] + '" data-zonanombre="' + datosFilas[i][1] + '" id="DelEstacionzona-'+ datosFilas[i][0] + '"><a class="text-center disabled"><strong>' + datosFilas[i][1] + '</strong></a></li>');
				}
				$("#dropdownEstacion > li").each(function(j){
					if($(this).attr("data-zona") == datosFilas[i][0]){
						$("#zona-" + datosFilas[i][0]).after('<li data-estacion="' + datosFilas[i][2] + '" data-estacionnombre="' + datosFilas[i][3] + '" id="estacion-'+ datosFilas[i][2] + '"><a href="#"><span class="badge">' + datosFilas[i][2] + '</span> ' + datosFilas[i][3] + '</a></li>');
						$("#DelEstacionzona-" + datosFilas[i][0]).after('<li data-estacion="' + datosFilas[i][2] + '" data-estacionnombre="' + datosFilas[i][3] + '" id="estacion-'+ datosFilas[i][2] + '"><a href="#"><span class="badge">' + datosFilas[i][2] + '</span> ' + datosFilas[i][3] + '</a></li>');
					}
				});
			}
		});
	}

	$(document).on('click', '#dropdownEstacion > li', function(evento) {
		evento.preventDefault();
		if($("a", this).hasClass("disabled") == false){
			$("#dropdownEstacion > li").each(function(i){
				$(this).removeClass("bg-info");
			});
			estacion = $(this).attr("data-estacion");
			cambiarEstacion();
		}
	});

	function cambiarEstacion(){
		estacion = estacion;
		console.log($("#estacion-" + estacion).attr("data-estacionnombre-" + estacion));
		$("#btnEstacion").html('<span class="badge">' + estacion + '</span> ' + $("#estacion-" + estacion).attr("data-estacionNombre") + ' <span class="caret"></span>');
		$("#estacion-" + estacion).addClass("bg-info");
	}

	$("#btnAceptarConfirmacion").click(function(evento){
		evento.preventDefault();
		var posting = $.post("http://localhost/go-evaluacion/php/conexionEstaciones.php", {enviar: "agregarZona"});
		posting.done(function(data){

    	});
	});
	
	function eliminarDuplicadosArr(arr){
		var i, len = arr.length, out = [], obj = {};
		for(i = 0; i < len; i++){
			obj[arr[i]] = 0;
		}
		for(i in obj){
			out.push(i);
		}
		return out;
	}
});

var grafica1;
function crearGrafica1(){
	var grafData = {
		labels : ["Bienvenida", "Gascard", "Ratificación", "Pago", "Aditivo", "Ceros",
				  "Niveles", "Cristales", "Llantas", "Cobro", "Factura", "Despedida"],
		datasets : [
			{
				label: "Evaluacion Personal",
				fillColor: "rgba(151,187,205,0.2)",
				strokeColor: "rgba(151,187,205,1)",
				pointColor: "rgba(151,187,205,1)",
				pointStrokeColor: "#fff",
				pointHighlightFill: "#fff",
				pointHighlightStroke: "rgba(151,187,205,1)",
				data: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
			},
			{
				label: "Limites",
				fillColor: "rgba(0, 0, 0, 0)",
				strokeColor: "rgba(0, 0, 0, 0)",
				pointColor: "rgba(0, 0, 0, 0)",
				pointStrokeColor: "rgba(0, 0, 0, 0)",
				pointHighlightFill: "rgba(0, 0, 0, 0)",
				pointHighlightStroke: "rgba(0, 0, 0, 0)",
				data: [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2]
			}
		]
	};
	var graficaEvlc1 = document.getElementById('evlcGraf1').getContext('2d');
	grafica1 = new Chart(graficaEvlc1).Radar(grafData, {
		showTooltips: false,
		scaleShowLabels : true,
		responsive: true,
		onAnimationComplete: function(){
			actualizarGrafica1();
		}
	});
}
function actualizarGrafica1(){
	var valoresGraf = new Array(12);
	for(var i = 0; i < valoresGraf.length; i++){
		valoresGraf[i] = 0;
	}
	for(var i = 0; i < no_veh; i++){
		valoresGraf[0] += p1Calif[selector][i];
		valoresGraf[1] += p2Calif[selector][i];
		valoresGraf[2] += p3Calif[selector][i];
		valoresGraf[3] += p4Calif[selector][i];
		valoresGraf[4] += p5Calif[selector][i];
		valoresGraf[5] += p6Calif[selector][i];
		valoresGraf[6] += p7Calif[selector][i];
		valoresGraf[7] += p8Calif[selector][i];
		valoresGraf[8] += p9Calif[selector][i];
		valoresGraf[9] += p10Calif[selector][i];
		valoresGraf[10] += p11Calif[selector][i];
		valoresGraf[11] += p12Calif[selector][i];
	}
	for(var i = 0; i < 12; i++){
		grafica1.datasets[0].points[i].value = valoresGraf[i];
	}
	grafica1.update();
}

var grafica2;
function crearGrafica2(){
	var grafData = {
		labels : ["Presentación", "Limpieza", "Amabilidad", "Atención", "Disposición", "Locución", "Rápidez"],
		datasets : [
			{
				label: "Evaluacion Personal",
				fillColor: "rgba(151,187,205,0.2)",
				strokeColor: "rgba(151,187,205,1)",
				pointColor: "rgba(151,187,205,1)",
				pointStrokeColor: "#fff",
				pointHighlightFill: "#fff",
				pointHighlightStroke: "rgba(151,187,205,1)",
				data: [0, 0, 0, 0, 0, 0, 0]
			},
			{
				label: "Evaluacion Personal76yyyyyyyyyyyyyyyyyyyyyyyyyyttttttttttttttfd",
				fillColor: "rgba(0, 0, 0, 0)",
				strokeColor: "rgba(0, 0, 0, 0)",
				pointColor: "rgba(0, 0, 0, 0)",
				pointStrokeColor: "rgba(0, 0, 0, 0)",
				pointHighlightFill: "rgba(0, 0, 0, 0)",
				pointHighlightStroke: "rgba(0, 0, 0, 0)",
				data: [3, 3, 3, 3, 3, 3, 3]
			}
		]
	};
	var graficaEvlc2 = document.getElementById('evlcGraf2').getContext('2d');
	grafica2 = new Chart(graficaEvlc2).Radar(grafData, {
		showTooltips: false,
		scaleShowLabels : true,
		responsive: true,
		onAnimationComplete: function(){
			actualizarGrafica2();
		}
	});
}
function actualizarGrafica2(){
	var valoresGraf = new Array(7);
	for(var i = 0; i < valoresGraf.length; i++){
		valoresGraf[i] = 0;
	}
	for(var i = 0; i < p13_evlPersonal[selector].length; i++){
		valoresGraf[i] += p13_evlPersonal[selector][i];
		grafica2.datasets[0].points[i].value = valoresGraf[i];
	}
	grafica2.update();
}

var grafica3;
function crearGrafica3(){
	var grafData = [
			{
				value: 0,
				color:"#46f75f",
				highlight: "#59ff6f",
				label: "Calificacion Final: ",
			},
			{
				value: 10,
				color: "#bfbfbf",
				highlight: "#b8b8b8",
				label: " ",
			}
		];
	var graficaGral1 = document.getElementById('gralGraf1').getContext('2d');
	grafica3 = new Chart(graficaGral1).Doughnut(grafData, {
		segmentStrokeWidth : 10,
		percentageInnerCutout : 40,
		onAnimationComplete: function(){
			responsive: true,
			actualizarGrafica3();
		}
	});
}
function actualizarGrafica3(){
	grafica3.segments[0].value = (califVehGral/7)*10;
	//grafica3.segments[0].label = "Calificacion Final: " + ((califVehGral/7)*10).toFixed(1) + " / 10";
	grafica3.segments[1].value = 10-((califVehGral/7)*10);
	//grafica3.segments[1].label = ((califVehGral/7)*10).toFixed(1) + " / 10";
	grafica3.update();
}

var grafica4;
function crearGrafica4(){
	var grafData = [
			{
				value: 0,
				color:"#46f75f",
				highlight: "#59ff6f",
				label: "Calificacion Final: 0.0 / 10",
			},
			{
				value: 10,
				color: "#bfbfbf",
				highlight: "#b8b8b8",
				label: "0.0 / 10",
			}
		];
	var graficaGral2 = document.getElementById('gralGraf2').getContext('2d');
	grafica4 = new Chart(graficaGral2).Doughnut(grafData, {
		segmentStrokeWidth : 10,
		percentageInnerCutout : 40,
		onAnimationComplete: function(){
			responsive: true,
			actualizarGrafica4();
		}
	});
}
function actualizarGrafica4(){
	grafica4.segments[0].value = (califPerGral/3)*10;
	grafica4.segments[1].value = 10-((califPerGral/3)*10);
	grafica4.update();
}

crearGrafica1();
crearGrafica2();
crearGrafica3();
crearGrafica4();

window.addEventListener("load", function() { setTimeout(hideURLbar, 0); }, false);
function hideURLbar(){
	window.scrollTo(0, 1);
}

// mysql