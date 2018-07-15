// ----------------------------------------------------------------------------
// Título:        GetPageMode
//
// Fecha:        03/03/2008
// Autor:        Alex Solé
// Versión:        1.0.0
// Dependencias:
// ----------------------------------------------------------------------------


var Document=
{
    /*
    *        Determina el modo de la pagina
    *
    *        @param {Object document} (Opcional)
    *        @return {Int} 0: Quirks mode, 1: Strict mode.
    *        @version        1.0        -  08-01-2008
    */
    GetPageMode : function( doc ){
        if( !doc ){
            doc = document;
        }
        if( doc.compatMode){
            switch ( doc.compatMode){
                    case "BackCompat":        return 0;
                    case "CSS1Compat":        return 1;
                    case "QuirksMode":        return 0;
            }
        }
        return 0;
    },
}

