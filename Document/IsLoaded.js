// ----------------------------------------------------------------------------
// Título:        IsLoaded
//
// Fecha:         03/03/2008
// Autor:        Alex Solé
// Versión:        1.0.0
// Dependencias:
// ----------------------------------------------------------------------------


var Document=
{
   /*
    *   Comprueba si una página se ha terminado de cargar completamente
    *
    *   @param {Object document} (Opcional) Documento a comprovar si esta cargado
    *   @return {Bool} true si el documento se ha cargado completamente
    *   @version        1.0        -  08-01-2008
    */
    isLoaded : function( doc ){
        if( !doc ){
            doc = document;
        }
        return ( "complete" == doc.readyState );
    }
}

