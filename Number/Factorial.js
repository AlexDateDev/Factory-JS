// ----------------------------------------------------------------------------
// Factorial
//
//
//
// Date : 03/03/2013
// By   : Alex
// ----------------------------------------------------------------------------


var Number={
/**
        *   Devuelve el factorial de un numero
        *
        *        @param {int}
        *        @return {int}
         *        @version        1.0        -  12-01-2008
        */
        get_factorial:function(n)
        {
                if (n > 0)
                {
                        return n * (this.factorial(n - 1))
                }
                else
                {
                        return 1
                }
        },
};

