// ----------------------------------------------------------------------------
// RemoveAllControls
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
    *        Elimina todos los caracteres de control return, linefeed i tab deun string
    *
    *        @param        {String}: String al que elimnar los caracteres de control
    *        @return        {String}       El string sin lso caracteres de control
    *        @version        1.0        -  04-01-2008
    */
        get_remove_all_controls:function(s)
    {
            return s.replace(/\r|\n|\t/g, "");
        },
}

