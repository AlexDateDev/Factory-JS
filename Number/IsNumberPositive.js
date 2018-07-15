// ----------------------------------------------------------------------------
// IsNumberPositive
//
//
//
// Date : 03/03/2013
// By   : Alex
// ----------------------------------------------------------------------------

STRING =
{
    /**
    *   Indica si un string es un integer positivo
    *   Un float no es un integer. No acepta numeros negativos
    *
    *   @param      {Int}
    *   @return     {Bool}
    *   @version    1.0        -  04-01-2008
    */
    is_integer_positive:function(inputVal)
    {
        var inputStr = ""+inputVal;
        for (var i = 0; i < inputStr.length; i++)
        {
            var oneChar = inputStr.charAt(i)
            if (oneChar < "0" || oneChar > "9")
            {
                return false
            }
        }
        return true
    },
}

