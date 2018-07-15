// ----------------------------------------------------------------------------
// IsValidFormat
//
//
//
// Date : 03/03/2013
// By   : Alex
// ----------------------------------------------------------------------------

Viernes 12 Agosto 2011
UTIL=
{
/**
    * Comprueba si un string tiene formato DNI formato X99999999X
    * @param        {String} String, valor a comprobar ccon formato DNI
    * @return        {Int} true si es un formato de DNI valido o false en otro caso
    */
    is_valid_nif_format:function( strValue )
    {
                // Formato Espanol X99999999X
        if ( strValue == "") return false;
                var chk= "^\([A-Za-z]?\)\([0-9]\{6,8\}\)\([A-Za-z]?\)$";
        var regex = new RegExp( chk );
        return regex.test( strValue );
    },
}
