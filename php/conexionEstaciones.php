<?php
	if(isset($_POST['enviar']) && $_POST['enviar'] == "estaciones"){
		$con = mysqli_connect("localhost", "root", "root");
		if(!$con){
				
		}
		
		$database = mysqli_select_db($con, "bd_go-evaluacion");
		if(!$database){
			die('ERROR CONEXION CON BD:' . mysql_error());
		}

		$sql = "SELECT estaciones.no_pemex, estaciones.nombre_estacion, estaciones.id_zona, zonas.nombre_zona 
				FROM estaciones, zonas 
				WHERE estaciones.id_zona = zonas.id_zona
				ORDER BY estaciones.id_zona ASC;";

		$result = mysqli_query($con, $sql);
		if(!$result){
			die("La consulta SQL contiene errores." . mysql_error());
		}
		$contador = 0;
		while($row = mysqli_fetch_array($result)) {
			if($contador != 0) echo "|";
			echo $row['id_zona'] . "/" . $row['nombre_zona'] . "/" . $row['no_pemex'] . "/" . $row['nombre_estacion'];
			$contador++;
		}
		//echo "{" . $contador . "}";

		mysqli_close($con);
	}

	if(isset($_POST['enviar']) && $_POST['enviar'] == "agregarZona"){
		$con = mysqli_connect("localhost", "root", "root");
		if(!$con){
				
		}
		
		$database = mysqli_select_db($con, "bd_go-evaluacion");
		if(!$database){
			die('ERROR CONEXION CON BD:' . mysql_error());
		}

		$sql = "SELECT estaciones.no_pemex, estaciones.nombre_estacion, estaciones.id_zona, zonas.nombre_zona 
				FROM estaciones, zonas 
				WHERE estaciones.id_zona = zonas.id_zona
				ORDER BY estaciones.id_zona ASC;";

		$result = mysqli_query($con, $sql);
		if(!$result){
			die("La consulta SQL contiene errores." . mysql_error());
		}
		$contador = 0;
		while($row = mysqli_fetch_array($result)) {
			if($contador != 0) echo "|";
			echo $row['id_zona'] . "/" . $row['nombre_zona'] . "/" . $row['no_pemex'] . "/" . $row['nombre_estacion'];
			$contador++;
		}
		//echo "{" . $contador . "}";

		mysqli_close($con);
	}
?>