// ----------------------------------------------------------------------------
// Título:        IsNUmber
//
// Fecha:        03/02/2011
// Autor:        Alex Solé
// Versión:        1.0.0
// Dependencias:
// ----------------------------------------------------------------------------


var VAL ={
/**
    *        Comprobar si un string contiene solo numeros
    *        Separador decimal es el .
    *        No acepta numeros negativos
    *
    *        @param        {String} String a comprobar si sus valores son numericos
    *   @return        {Bool}   True si todos sus valores son numeros o False en otro caso
    *        @version        1.0        -  04-01-2008
    */
	IsAlphaNum:function(strNum )
    {
            var anum=/(^\d+$)|(^\d+\.\d+$)/;
        return anum.test( strNum );
	}
}

// ----------------------------------------------------------------------------
// Título:        IsNumber
//
// Fecha:        04/01/2008
// Autor:        Alex Solé
// Versión:        1.0.0
// Dependencias:
// ----------------------------------------------------------------------------


var Char = {
	/*
	 *    Determina si un caracter es numerico.
	 *
	 *    @return {bool}
	 *    @version        1.0        -  04-01-2008
	 */
	isNumber: function (c) {
		return (/^[0-9]$/.test(c));
	},
};


