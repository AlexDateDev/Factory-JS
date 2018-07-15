// ----------------------------------------------------------------------------
// GetCheckedValue
//
//
//
// Date : 03/03/2013
// By   : Alex
// ----------------------------------------------------------------------------

/**
*radio_get_checked_value
*  Devuelve el valor de la posicion seleccionada.
*  PARAMETROS:
*    IN: fld: campo readio button a comprobar.
*  DEVUELVE:
*    Si no hay nada seleccionado devuelve null
*/

function get_checked_value( fld )
{
    var chk = false;
    var idx = 0;
    while( idx < fld.length && !chk )
    {
        chk =  fld[ idx ].checked;
        if( chk )
            return fld[ idx ].value;
        idx++;
    };
    return null;
};

