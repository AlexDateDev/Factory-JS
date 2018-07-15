// ----------------------------------------------------------------------------
// CalculateRandomAcoted
//
//
//
// Date : 03/03/2013
// By   : Alex
// ----------------------------------------------------------------------------

Martes 16 Agosto 2011
STRING =
{
/**
    *        Devuelve un numero aleatorio como string entre un margen determinado
    *
    *   @return        {String}
    *        @version        1.0        -  04-01-2008
    */
        get_random_acotado:function(nMax)
    {
            return String(Math.floor(Math.random()*(nMax+1)));
        },
}

