// ----------------------------------------------------------------------------
// T�tulo:        IsNUmber
//
// Fecha:        03/02/2011
// Autor:        Alex Sol�
// Versi�n:        1.0.0
// Dependencias:
// ----------------------------------------------------------------------------


var VAL={
    IsNumber: function(object){
        return typeof object == "number";
    }
}

var VAL={
	/**
    *        Indica si el string es un numero positivo o negativo o decimal (FLOAT)
    *
    *        @param {String | Int | Float}
    *        @return {Bool}
    *        @version        1.0        -  04-01-2008
    */
    IsNumber:function(inputVal)
    {
            var oneDecimal = false,
        inputStr = ""+inputVal;
        for (var i = 0; i < inputStr.length; i++)
        {
                var oneChar = inputStr.charAt(i)
            if (i == 0 && oneChar == "-")
            {
                    continue
                        }
                        if (oneChar == "." && !oneDecimal)
            {
                    oneDecimal = true
                continue
                        }
            if (oneChar < "0" || oneChar > "9")
            {
                    return false
                        }
                }
        return true;
        },
}

// ----------------------------------------------------------------------------
// T�tulo:        IsNumber
//
// Fecha:        04/01/2008
// Autor:        Alex Sol�
// Versi�n:        1.0.0
// Dependencias:
// ----------------------------------------------------------------------------


var VAL = {
	/*
	 *    Determina si un caracter es numerico.
	 *
	 *    @return {bool}
	 *    @version        1.0        -  04-01-2008
	 */
	IsNumber: function (c) {
		return (/^[0-9]$/.test(c));
	},
};


