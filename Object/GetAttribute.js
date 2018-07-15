// ----------------------------------------------------------------------------
// Título:        GetAttribute
//
// Fecha:        03/02/2011
// Autor:        Alex Solé
// Versión:        1.0.0
// Dependencias:
// ----------------------------------------------------------------------------


var OBJ=
{
/**
        *        Retorna el contingut d'un atribut d'un objecte
        *        NO es DOM
        *        @param        {Object}        Objecte
        *   @param        {string}  Nom de l'atribut per restornar el seu valor
        *   @param        {mixed} (Opcional) Valor opcional a devilver si no existe atributi consultado
        *   @return        {string}
        */
        GetAttribute:function( objElm, strAtt, valDefault )
        {
                if( !objElm )
                {
                        if( valDefault)
                        {
                                return valDefault;
                        }
                        return null;
                }
        return eval( "objElm." + strAtt  );
        },
}
