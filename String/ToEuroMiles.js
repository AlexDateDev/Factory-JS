ToEuroMiles:function( numero ){
	
	numero=parseFloat(numero);
	if(isNaN(numero)){
		return "Not a number";
	}

	separador_decimal = ",";
	separador_miles = ".";
	
	 // Redondeamos
	numero=numero.toFixed(2);

	// Convertimos el punto en separador_decimal
	numero=numero.toString().replace(".", separador_decimal!==undefined ? separador_decimal : ",");

	if(separador_miles){
		// Anadimos los separadores de miles
		var miles=new RegExp("(-?[0-9]+)([0-9]{3})");
		while(miles.test(numero)) {
			numero=numero.replace(miles, "$1" + separador_miles + "$2");
		}
	}
									   
	return numero + " €";
}