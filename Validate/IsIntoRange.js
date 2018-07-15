// ----------------------------------------------------------------------------
// Título:        IsIntoRange
//
// Fecha:        03/02/2011
// Autor:        Alex Solé
// Versión:        1.0.0
// Dependencias:
// ----------------------------------------------------------------------------


var VAL=
{
        /**
        *        Comprueva si un numero esta destro de un rango de numeros
        *
        *        @param {int}
        *        @param {int}
        *        @param {int}
        *        @return {int}
         *        @version        1.0        -  12-01-2008
        */
    IsIntoRange:function(nNum, lo, hi, bEntornoCerrado)
    {
        var n = parseInt(nNum, 10);
        if( bEntornoCerrado )
        {
            return n >=lo && n <= hi
        }
        else
        {
            return n >lo && n < hi
        }
    }

};

