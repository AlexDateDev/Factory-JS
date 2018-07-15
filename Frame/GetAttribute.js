// ----------------------------------------------------------------------------
// Título:        GetAttribute
//
// Fecha:        03/02/2011
// Autor:        Alex Solé
// Versión:        1.0.0
// Dependencias:
// ----------------------------------------------------------------------------



var FRAME=
{
/**
        *        Retorna el contingut d'un atribut d'un objecte frame
        *        NO es DOM
        *        @param        {Frame Object}        Objecte Frame
        *        @param        {Sstring}          Nom de l'atribut per retornar el seu valor
        *        @param        {Boolean}         (Opcional) Indica si s'ha d'amagar el missatge d'error
        *                                        Per defecte es mostren els errors
        *                                        true: S'amaguen els errors
        *        @return        {Ojecte}        Pot retornar un objecte, string, int, ...
         *        @version        1.0        -  14-02-2008
        */
        get_attribute:function( fFrame, strAtt,  hiddeError )
        {
                if( !fFrame )
                {
                        if( ! hiddeError)
                        {
                                alert( 'FRAME GET: No existeix el frame' );
                        }
                        return null;
                }
        return eval( "fFrame." + strAtt  );
        }
}
