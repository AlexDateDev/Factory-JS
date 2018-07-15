// ----------------------------------------------------------------------------
// IsNumber
//
//
//
// Date : 03/03/2013
// By   : Alex
// ----------------------------------------------------------------------------

OBJECT=
{
    is_number: function(object)
    {
        return typeof object == "number";
    }
};

STRING =
{
/**
    *        Indica si el string es un numero positivo o negativo o decimal (FLOAT)
    *
    *        @param {String | Int | Float}
    *        @return {Bool}
    *        @version        1.0        -  04-01-2008
    */
     is_number:function(inputVal)
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

STRING =
{
/**
    *        Comprobar si un string contiene solo numeros
    *        Separador decimal es el .
    *        No acepta numeros negativos
    *
    *        @param        {String} String a comprobar si sus valores son numericos
    *   @return        {Bool}   True si todos sus valores son numeros o False en otro caso
    *        @version        1.0        -  04-01-2008
    */
        is_alpha_numeric:function(strNum )
    {
            var anum=/(^\d+$)|(^\d+\.\d+$)/;
        return anum.test( strNum );
        },
}

