// ----------------------------------------------------------------------------
// Título:        Find
//
// Fecha:        143/02/2009
// Autor:        Alex Solé
// Versión:        1.0.0
// Dependencias:
// ----------------------------------------------------------------------------

var FRAME=
{
        /**
        *        Busca un frame determinat
        *        Retorna un objecte FRAME d'un identificador
        *        NO es DOM
        *         @param        {String}  Nom del fram.
        *                               Nom de l'identificador de l'objecte FRAME a buscar
        *        @param        {Boolean}        (Opcional) Indica si s'ha d'amager el missatge d'error
        *                           Per defecte es mostren els errors
        *                                        true: S'amaguen els errors
        *        @return        {Object}        Objecte FRAME o null si falla
         *        @version        1.0        -  14-02-2008
        */
        find:function( sFrameName,  hiddeError )
        {
        if( !frames )
        {
                        if( ! hiddeError)
                        {
                                alert( 'FRAME FIND: No existeix els frames')
                        }
                        return null;
        }
        if( frames[ sFrameName ])
        {
                return frames[ sFrameName ];
        }
        else
        {
                        if( ! hiddeError)
                        {
                                alert( 'FRAME FIND: No existeix el frame buscat: ' + sFrameName)
                        }
                        return null;
        }
        }
}

