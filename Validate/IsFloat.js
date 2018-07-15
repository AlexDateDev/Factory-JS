// ----------------------------------------------------------------------------
// Título:        IsNUmber
//
// Fecha:        03/02/2011
// Autor:        Alex Solé
// Versión:        1.0.0
// Dependencias:
// ----------------------------------------------------------------------------

var VAL={
	/**
    *        Indica si el string es un numero positivo o negativo o decimal (FLOAT)
    *
    *        @param {String | Int | Float}
    *        @return {Bool}
    *        @version        1.0        -  04-01-2008
    */
    IsFloat:function(inputVal)
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

