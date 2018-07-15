// ----------------------------------------------------------------------------
// Título:        IsValidFormat
//
// Fecha:         12/08/2011
// Autor:        Alex Solé
// Versión:        1.0.0
// Dependencias:
// ----------------------------------------------------------------------------

var VAL=
{
/**
    * Comprueba si un string tiene formato DNI formato X99999999X
    * @param        {String} String, valor a comprobar ccon formato DNI
    * @return        {Int} true si es un formato de DNI valido o false en otro caso
    */
    IsNIFFormat:function( strValue )
    {
                // Formato Espanol X99999999X
        if ( strValue == "") return false;
                var chk= "^\([A-Za-z]?\)\([0-9]\{6,8\}\)\([A-Za-z]?\)$";
        var regex = new RegExp( chk );
        return regex.test( strValue );
    },
}
