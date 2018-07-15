// ----------------------------------------------------------------------------
// Título:        IsInteger
//
// Fecha:        03/02/2011
// Autor:        Alex Solé
// Versión:        1.0.0
// Dependencias:
// ----------------------------------------------------------------------------


var VAL =
{
/**
    *        Indica si un string es un integer negativo o postivo
    *   Un float no es un integer
    *
    *   @param        {Int}
    *   @return {Bool}
    *        @version        1.0        -  04-01-2008
    */
    IsInteger:function(inputVal)
    {
        var inputStr = ""+inputVal;
        for (var i = 0; i < inputStr.length; i++)
        {
                var oneChar = inputStr.charAt(i)
            if (i == 0 && oneChar == "-")
            {
                    continue
                        }
            if (oneChar < "0" || oneChar > "9")
            {
                    return false
                        }
                }
        return true
    },
}

// Factory
isInteger:function(s){
            var i=parseInt(s,10);
            if(isNaN(i)||(""+i)!=s){return false;}
            return true;
        },
