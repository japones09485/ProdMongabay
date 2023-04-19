



function InicioMapa(){
	MapaInicio();//pinta Mapa principal
	ActivosObjetos();//pinta botones de los objetos
	ActivosPaises();//pinta botones de los paises
	pintarObjetos();//pinta objetos en los paises
}

//funcion inicia verifica color de los botones activos rojo activado - verde no
function ActivosObjetos(){

	// Obtener todos los elementos con la clase "mi-clase"
var ValPaises = document.getElementsByClassName("ValPaises");

// Recorrer la lista de elementos y mostrar su valor en la consola
for (var i = 0; i < ValPaises.length; i++) {
	if(ValPaises[i].value == 'true'){
		switch (ValPaises[i].id) {
			case 'ValPasivos':
				var boton = document.getElementById('Pasivos');
				boton.style.backgroundColor = "#042A2B";
				boton.classList.remove('text-dark');
				boton.classList.add('text-white');
				break;

				case 'ValTuberias':
					var boton = document.getElementById('Tuberias');
					boton.style.backgroundColor = "#FF4E00";
					boton.classList.remove('text-dark');
					boton.classList.add('text-white');
					break;

				case 'ValReservasIn':
					var boton = document.getElementById('ReservasIn');
					boton.style.backgroundColor = "#D87CAC";
					boton.classList.remove('text-dark');
					boton.classList.add('text-white');
					break;

				case 'ValReservasAmb':
					var boton = document.getElementById('ReservasAmb');
					boton.style.backgroundColor = "#53B175";
					boton.classList.remove('text-dark');
					boton.classList.add('text-white');
					break;
		
			default:
				break;
		}
		
		
		
	}else{

		switch (ValPaises[i].id) {
			case 'ValPasivos':
				var boton = document.getElementById('Pasivos');
				boton.style.backgroundColor = "#FFFFFF";
				boton.classList.remove('text-white');
				boton.classList.add('text-dark');
				break;

				case 'ValTuberias':
					var boton = document.getElementById('Tuberias');
					boton.style.backgroundColor = "#FFFFFF";
					boton.classList.remove('text-white');
				boton.classList.add('text-dark');
					break;

				case 'ValReservasIn':
					var boton = document.getElementById('ReservasIn');
					boton.style.backgroundColor = "#FFFFFF";
					boton.classList.remove('text-white');
			    	boton.classList.add('text-dark');
					break;

				case 'ValReservasAmb':
					var boton = document.getElementById('ReservasAmb');
					boton.style.backgroundColor = "#FFFFFF";
					boton.classList.remove('text-white');
					boton.classList.add('text-dark');
					break;
		
			default:
				break;
		}
		

	}
 
}

}

//function Activos paises

function ActivosPaises(){

	// Obtener todos los elementos con la clase "PaisesAc"
var ValPaises = document.getElementsByClassName("PaisesAc");

// Recorrer la lista de elementos y mostrar su valor en la consola
for (var i = 0; i < ValPaises.length; i++) {
		if(ValPaises[i].value == 'true'){
		switch (ValPaises[i].id) {
			case 'ValBolivia':
				var boton = document.getElementById('Bolivia');
				boton.style.backgroundColor = "#4F6D7A";
				boton.classList.remove('text-dark');
				boton.classList.add('text-white');
				break;

				case 'ValColombia':
					var boton = document.getElementById('Colombia');
					boton.style.backgroundColor = "#4F6D7A";
					boton.classList.remove('text-dark');
					boton.classList.add('text-white');
					break;

				case 'ValEcuador':
					var boton = document.getElementById('Ecuador');
					boton.style.backgroundColor = "#4F6D7A";
					boton.classList.remove('text-dark');
					boton.classList.add('text-white');
					break;

				case 'ValPeru':
					var boton = document.getElementById('Peru');
					boton.style.backgroundColor = "#4F6D7A";
					boton.classList.remove('text-dark');
					boton.classList.add('text-white');
					break;
		
			default:
				break;
		}
		
		
		
	}else{
	
		
		switch (ValPaises[i].id) {
			case 'ValBolivia':
				var boton = document.getElementById('Bolivia');
				boton.style.backgroundColor = "#FFFFFF";
				boton.classList.remove('text-white');
				boton.classList.add('text-dark');
				break;

				case 'ValColombia':
					var boton = document.getElementById('Colombia');
					boton.style.backgroundColor = "#FFFFFF";
					boton.classList.remove('text-white');
					boton.classList.add('text-dark');
					break;

				case 'ValEcuador':
					var boton = document.getElementById('Ecuador');
					boton.style.backgroundColor = "#FFFFFF";
					boton.classList.remove('text-white');
					boton.classList.add('text-dark');
					break;

				case 'ValPeru':
					var boton = document.getElementById('Peru');
					boton.style.backgroundColor = "#FFFFFF";
					boton.classList.remove('text-white');
					boton.classList.add('text-dark');
					break;
		
			default:
				break;
		}
		

	}
 
}

}

//Funcion color del pais

function ColorPais(pais){

	switch (pais) {

		case "Bolivia":
			var ColorF = '#4F6D7A';
			break;

		case "Colombia":
			var ColorF = '#FFD700';
			break;

		case "Ecuador":
			var ColorF = '#DAA520';
			break;

		case "Perú":
			var ColorF = '#CD5C5C';
			break;

		default:
			var ColorF = '#A52A2A';
			break;
	}

	return ColorF;
}

// inicia los mapas dependiendo lo seleccionado

function MapaInicio(){

	// Obtén una referencia al elemento de la pantalla de carga
var loader = document.getElementById('loader');

	const token = 'pk.eyJ1IjoiamhvbmxlYWwxMiIsImEiOiJjbGYwbDNlcjkwYTcyM3hwcGlxY2IzdXE3In0.wbfuqllEpRLeoTA272Vd9w';
mapboxgl.accessToken = token;
 map = new mapboxgl.Map({
	container: 'map', // container ID
	// Choose from Mapbox's core styles, or make your own style with Mapbox Studio
	style: 'mapbox://styles/mapbox/streets-v12', // style URL
	center: [-75.5, -10], // starting position [lng, lat]
	zoom: 3 // starting zoom
});

ActivosObjetos();//pinta botones de los objetos
	ActivosPaises();//pinta botones de los paises

	// Muestra el elemento de la pantalla de carga mientras se carga el mapa
	map.on("load", function () {
		// ocultar pantalla de carga
		document.getElementById("loader").style.display = "none";
	});

  // Maneja errores mientras se carga el mapa
map.on('error', function() {
	loader.style.display = 'none';
	alert('Error loading the map.');
  });
  
  // Muestra el elemento de la pantalla de carga hasta que se cargue el mapa o se produzca un error
  loader.style.display = 'block';

}

function ObtenerPaiseAct(){

	var ArrayPaises = [];
		// Obtener todos los elementos con la clase "PaisesAc"
	var ValPaises = document.getElementsByClassName("PaisesAc");

	// Recorrer la lista de elementos y mostrar su valor en la consola
	for (var i = 0; i < ValPaises.length; i++) {
		if(ValPaises[i].value == 'true'){
			ArrayPaises.push(ValPaises[i].name);
		}
		
	}

	return ArrayPaises;

}

function ObtenerObjetosAct(){

	var ArrayObjetos = [];
		// Obtener todos los elementos con la clase "PaisesAc"
	var ValObjetos = document.getElementsByClassName("ValPaises");

	// Recorrer la lista de elementos y mostrar su valor en la consola
	for (var i = 0; i < ValObjetos.length; i++) {
		if(ValObjetos[i].value == 'true'){
			ArrayObjetos.push(ValObjetos[i].name);
		}
		
	}

	return ArrayObjetos;

}

function fondoPais(paisColor){
	
	map.on('load', function() {

		// Cargar los datos del archivo JSON de todo el pais
		fetch('json/paises.json')
			.then(response => response.json())
			.then(data => {
				
				// Iterar sobre los polígonos en los datos
				data.features.forEach(polygon => {
					// Crear una capa de polígono para cada polígono en los datos
	
					var pais = polygon.properties.PAÍS;
					var colorPais = ColorPais(pais);
				
					if(pais == paisColor){
						
		

						//siya existe la capa la eliminamos
						var layerDel = map.getLayer('pais-' + polygon.properties.PAÍS);
						if (typeof layerDel !== 'undefined') {
							map.removeLayer('pais-' + polygon.properties.PAÍS);
						
						}
						//creamos la capa
						map.addLayer({
							'id': 'pais-' + polygon.properties.PAÍS,
							'type': 'fill',
							'source': {
								'type': 'geojson',
								'data': polygon
							},
							'paint': {
								'fill-color': colorPais,
								'fill-opacity': 0.5,
								'fill-outline-color': '#A52A2A'
							}
						});
					}
					
				});
			});
	});
  
}

function pintarObjetos(){

var CantObjetos = ObtenerObjetosAct();
var Cantpaises = ObtenerPaiseAct();

//recorremos los paises
if(Cantpaises.length > 0 && CantObjetos.length > 0){
	//recorremos los paises
	Cantpaises.forEach(element => {
		//recorremos por pais el objeto pintamos el fondo
		
		fondoPais(element);


		
		CantObjetos.forEach(objet => {
			var rutaArch = 'json/' + element + '/' + objet+'.json';

			console.log(rutaArch);
		
			switch (objet) {
				case 'Pasivos':
				PintarPasivos(rutaArch);	
				break;

				case 'Tuberias':
				PintarTuberias(rutaArch);	
				break;

				case 'ReservasIn':
				PintarReservasIndi(rutaArch);	
				break;

				case 'ReservasAmb':
				PintarReservasIndi(rutaArch);	
				break;
			
				default:
				break;
			}
	    })
	});
	
}else{
	MapaInicio();
}



}

function PintarPasivos(Ruta){
	//Funcion pinta los puntos del json
	
	fetch(Ruta)
	.then(response => response.json())
	.then(data => {
		for (const feature of data.features) { // bucle para cada característica (feature) en el archivo GeoJSON
			const el = document.createElement('div'); // crear un nuevo elemento HTML para el marcador
			el.className = 'marker'; // agregar una clase CSS al elemento
		
			new mapboxgl.Marker(el) // crear un nuevo marcador de Mapbox GL con el elemento HTML
			.setLngLat(new mapboxgl.LngLat(feature.geometry.coordinates[0], feature.geometry.coordinates[1]))
			// establecer las coordenadas del marcador utilizando la geometría de la característica
				.setPopup(new mapboxgl.Popup({ offset: 25 }) // crear un nuevo popup para el marcador
				.setHTML(
					`<h3>Empresa: ${feature.properties.empresa}</h3>
					<p>Departamento: ${feature.properties.Dpto}</p>
					<p>Lote pozo: ${feature.properties.Lote_Pozo}</p>
					<p>Lote pozo: ${feature.geometry.coordinates}</p>
`			
)
)
				.addTo(map); // agregar el marcador al mapa
		}

		
	});


	

}

function  PintarTuberias(Ruta){
	//Funcion pinta los puntos del json
	
	fetch(Ruta)
				.then(response => response.json())
				.then(data => {
				  
				  // Dibujar cada línea en los datos
				  data.features.forEach(line => {
				   
				
					var idTub = 'line-' + line.properties.OBJECTID;
						
						
					// Dibujar la línea
					map.on("load", function () {
						map.addLayer({
							'id': idTub
							,
							'type': 'line',
							'source': {
							  'type': 'geojson',
							  'data': line
							},
							'paint': {
							  'line-color': 'black',
							  'line-width': 3
							},
							'cursor': 'crosshair'
						  });
					})
					
			
					// Agregar el evento click a la capa de línea
					map.on('click', 'line-' + line.properties.OBJECTID, function(e) {
					  // Obtener la información de la línea
					 
					  // Mostrar información adicional de la línea en una alerta
			
					  Swal.fire(
						'PROYECTO: '+ line.properties.PROYECTO,
						'NOMBRE ENTIDAD: ' + line.properties.NOMBRE_ENT,
					  )
				  
					});
			
					
				  });
				});

}

function PintarReservasIndi(Ruta){
	    // Cargar los datos del archivo JSON de poligonos de los resguardos
		fetch(Ruta)
		.then(response => response.json())
		.then(data => {
		  // Iterar sobre los polígonos en los datos
		  data.features.forEach(polygon => {
			// Crear una capa de polígono para cada polígono en los datos
			map.on("load", function () {
			map.addLayer({
			  'id': 'polygon-' + polygon.properties.OBJECTID,
			  'type': 'fill',
			  'source': {
				'type': 'geojson',
				'data': polygon
			  },
			  'paint': {
				'fill-color': 'red',
				'fill-opacity': 0.5,
				'fill-outline-color': '#2F0E1F'
			  }
			});
		});
	
	
			// Agregar el evento click a la capa de polígono
			map.on('click', 'polygon-' + polygon.properties.objectid, function(e) {
			  // Mostrar información adicional del polígono en una alerta
			  Swal.fire('Nombre: '+ polygon.properties.nombre)
			  Swal.fire(
				'Nombre: '+ polygon.properties.nombre,
				'Categoria: '+ polygon.properties.categoria
			   
			  )
			});
		  });
		});
}	



 // eventos de click de los botones para la busqueda

Pasivos.addEventListener("click", function() {
	const valorPasivos = document.getElementById('ValPasivos');
	
	if(valorPasivos.value == 'true'){
		valorPasivos.value = 'false';
	}else{
		valorPasivos.value = 'true';
	}

	ActivosObjetos();
	ActivosPaises();
	//InicioMapa();

});




Tuberias.addEventListener("click", function() {
	const valorTuberia = document.getElementById('ValTuberias');

	if(valorTuberia.value == 'true'){
		valorTuberia.value = 'false';
	}else{
		valorTuberia.value = 'true';
	}
	ActivosObjetos();
	ActivosPaises();
	//InicioMapa();
});


ReservasIn.addEventListener("click", function() {
	const valorReservas  = document.getElementById('ValReservasIn');

	if(valorReservas.value == 'true'){
		valorReservas.value = 'false';
	}else{
		valorReservas.value = 'true';
	}
	ActivosObjetos();
	ActivosPaises();
	//InicioMapa();
});


ReservasAmb.addEventListener("click", function() {
	const valorAmbien = document.getElementById('ValReservasAmb');

	if(valorAmbien.value == 'true'){
		valorAmbien.value = 'false';
	}else{
		valorAmbien.value = 'true';
	}
	ActivosObjetos();
	ActivosPaises();
	//InicioMapa();
});


 // eventos de click de los botones para la busqueda

 Bolivia.addEventListener("click", function() {
	const valorBolivia = document.getElementById('ValBolivia');

	if(valorBolivia.value == 'true'){
		valorBolivia.value = 'false';
	}else{
		valorBolivia.value = 'true';
	}
	ActivosObjetos();
	ActivosPaises();
	//InicioMapa();

});




Colombia.addEventListener("click", function() {
	const valorColombia = document.getElementById('ValColombia');

	if(valorColombia.value == 'true'){
		valorColombia.value = 'false';
	}else{
		valorColombia.value = 'true';
	}
	ActivosObjetos();
	ActivosPaises();
	//InicioMapa();
});


Ecuador.addEventListener("click", function() {
	const valorEcuador  = document.getElementById('ValEcuador');

	if(valorEcuador.value == 'true'){
		valorEcuador.value = 'false';
	}else{
		valorEcuador.value = 'true';
	}
	ActivosObjetos();
	ActivosPaises();
	//InicioMapa();
});


Peru.addEventListener("click", function() {
	const valorPeru = document.getElementById('ValPeru');

	if(valorPeru.value == 'true'){
		valorPeru.value = 'false';
	}else{
		valorPeru.value = 'true';
	}

	ActivosObjetos();
	ActivosPaises();
	//InicioMapa();
});

