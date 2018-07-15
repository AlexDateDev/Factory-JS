// ----------------------------------------------------------------------------
// Título:        FindTop
//
// Fecha:        03/02/2011
// Autor:        Alex Solé
// Versión:        1.0.0
// Dependencias:
// ----------------------------------------------------------------------------


var FRAME=
{
/**
        *        Retorna el frame superior
        *          @param {boolena} (Opcional) False indica que no es mosri l'error.
        *                Per defecte no es posa el parametre amb lo que l'error es mostra sempre
        *          @return {frame} Retorna el frame top o null si no existeix
         *        @version        1.0        -  14-02-2008
        */
        find_top:function( hiddeError )
        {
                if( !frames )
                {
                        if( ! hiddeError)
                        {
                                alert( 'FRAME GET TOP: No existeix frames' );
                        }
                        return null;
                }
                if( !frames.top )
                {
                        if( ! hiddeError)
                        {
                                alert( 'FRAME GET TOP: No existeix el frame top' );
                        }
                        return null;
                }
                return frames.top;
        }
}

