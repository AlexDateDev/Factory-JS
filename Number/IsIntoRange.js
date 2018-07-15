// ----------------------------------------------------------------------------
// IsIntoRange
//
//
//
// Date : 03/03/2013
// By   : Alex
// ----------------------------------------------------------------------------

Martes 16 Agosto 2011
NUMBER=
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
    in_range:function(nNum, lo, hi, bEntornoCerrado)
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

