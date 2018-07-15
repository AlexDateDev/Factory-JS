// ----------------------------------------------------------------------------
// IsInteger
//
//
//
// Date : 03/03/2013
// By   : Alex
// ----------------------------------------------------------------------------

Martes 16 Agosto 2011
STRING =
{
/**
    *        Indica si un string es un integer negativo o postivo
    *   Un float no es un integer
    *
    *   @param        {Int}
    *   @return {Bool}
    *        @version        1.0        -  04-01-2008
    */
    is_integer:function(inputVal)
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
