// ----------------------------------------------------------------------------
// ToNumFromHexa
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
    *        Convierte un strinf formatdo hexadecimal en un entero decomal
    *
    *        @param  {String Hexa} string hexa ha convertir
    *        @return {Int} Numero decimal
    *        @version        1.0        -  04-01-2008
    */
    to_int_from_hex:function(inval)
    {
            var hexchars="0123456789ABCDEF";
        var out=0;
        for (a=inval.length-1;a>=0;a--)
        {
                out += Math.pow( 16, inval.length-a-1 ) * hexchars.indexOf( inval.charAt(a));
        }
                return out;
        },
}

