// ----------------------------------------------------------------------------
// TrimFull
//
//
//
// Date : 03/03/2013
// By   : Alex
// ----------------------------------------------------------------------------

STRING =
{
/**
    *        Devuelve un string sin los espacios en blanco innecesarios, incluyendo        los del inicio y final
    *
    *   @param        {String} String al que eliminar los espacios en blanco
    *   @return        {String} string
    *        @version        1.0        -  04-01-2008
    */
        get_trim_full:function( str )
    {
        var nstr = "";
        len = str.length;
        var i = 0;

        // ---- Salto los posibles blancos del inicio de todo
        while( str.charAt( i ) == " " && i < len )
        {
                i++;
        }

        while( i < len )
        {
            // -- Inicio
            if( str.charAt( i ) == " " )
            {
                    // ---- Salto los posibles blancos
                    while( str.charAt( i ) == " " && i < len )
                    {
                            i++;
                    };

                    // ---- Hemos encontrado un caracter y llevo un blanco
                    if( i < len && str.charAt( i ) != " " )
                    {
                            nstr = nstr + " " + str.charAt( i );
                            i++;
                    };
            }
            else
            {
                    nstr = nstr + str.charAt( i );
                    i++;
            }
        }
        return nstr;
     },
}

