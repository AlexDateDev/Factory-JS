// ----------------------------------------------------------------------------
// Título:        GenerateRandomAcoted
//
// Fecha:        03/02/2011
// Autor:        Alex Solé
// Versión:        1.0.0
// Dependencias:
// ----------------------------------------------------------------------------


var STR=
{
/**
    *        Devuelve un numero aleatorio como string entre un margen determinado
    *
    *   @return        {String}
    *        @version        1.0        -  04-01-2008
    */
    GenerateRandomAcoted:function(nMax)
    {
            return String(Math.floor(Math.random()*(nMax+1)));
        },
}

