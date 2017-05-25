$(document).ready(function(){
	$("#btnIngresar").click(function (evento){
		if(!$("#usuario").estaVacio("El Campo Usuario esta Vacío.")&& !$("#password").estaVacio("El Campo Contraseña está Vacío.")){
			comprobarDatos();
		}
	});

	jQuery.fn.estaVacio = function(mensaje){
		if($(this).val() == null || $(this).val() == ""){
            aviso(mensaje);
			return true;
		}
		return false;
	}

    function aviso(mensaje){
        $("#mensajeAviso").text(mensaje);
        $("#aviso").modal('show');
        var alertCanClosed = 0;
        $("#aviso").on('hidden.bs.modal', function(e) {
            if(alertCanClosed == 0){
                $("#aviso").modal('show');
            }
        });
        $("#aviso button").click(function(evento){
            evento.preventDefault();
            alertCanClosed = 1;
            $("#aviso").modal('hide');
        });
    }

    function comprobarDatos(){
        var usuario = $("#usuario").val();
        var password = $("#password").val();
        if(usuario.toLowerCase() == "admin" && password.toLowerCase() == "admin"){
            $(location).attr("href", "evaluaciones.php");
        }
        else{
            aviso("Los datos introducidos son incorrectos.");
        }
    }
});