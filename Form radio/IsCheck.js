// ----------------------------------------------------------------------------
// IsCheck
//
//
//
// Date : 03/03/2013
// By   : Alex
// ----------------------------------------------------------------------------

Viernes 12 Agosto 2011
/**
*  Devuelve la posicion del redio button seleccionado.
*  PARAMETROS:
*    IN: fld: campo readio button a comprobar.
*  DEVUELVE:
*    El numero de orden del elemento seleccionado, siendo 1 el primero
*    y 0 si no hay ninguno seleccionado
*/

function rb_is_chk( fld )
    {
    var chk = false;
    var idx = 0;
    while( idx < fld.length && !chk )
        {
        chk =  fld[ idx ].checked;
        if( chk )
            {
            return idx + 1;
            }
        idx++;;
        };
        return idx;
    };


