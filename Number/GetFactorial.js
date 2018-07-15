// ----------------------------------------------------------------------------
// Título:        GetFactorial
//
// Fecha:        03/02/2011
// Autor:        Alex Solé
// Versión:        1.0.0
// Dependencias:
// ----------------------------------------------------------------------------


var NUM={
/**
        *   Devuelve el factorial de un numero
        *
        *        @param {int}
        *        @return {int}
         *        @version        1.0        -  12-01-2008
        */
        GetFactorial:function(n)
        {
                if (n > 0)
                {
                	return n * (NUM.GetFactorial(n - 1))
                }
                else
                {
                        return 1
                }
        },
};

