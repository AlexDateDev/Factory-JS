// ----------------------------------------------------------------------------
// Título:        ToAbbreviate
//
// Fecha:        03/03/2013
// Autor:        Alex Solé
// Versión:        1.0.0
// Dependencias:
// ----------------------------------------------------------------------------

var UTIL=
{
 /**
    *  Abrevia un nombre de forma canonica a abreviada
    *    CN=user1/O=Iberacces/OU=Demo => user1/Iberacces/Demo
    *
    *  @param        {String} String con el nombre canonico: CN=user1/O=Iberacces/OU=Demo
    *  @return        {String} Un strinc con el nombre abreviado: user1/Iberacces/Demo
    */
    CN_to_abbreviate : function( s )
    {
        // Solo si empieza por CN=
        if(s.indexOf("CN=")==0)
        {
                        return s.replace(/\/C=/, "/").replace(/\/O=/, "/").replace(/\/OU=/g, "/").replace(/^CN=/, "")
                }
        return s;
    },
}








