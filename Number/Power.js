// ----------------------------------------------------------------------------
// Título:        Power
//
// Fecha:        03/02/2011
// Autor:        Alex Solé
// Versión:        1.0.0
// Dependencias:
// ----------------------------------------------------------------------------


var NUM=
{
        /**
        *        Eleva un numeor a otro
        *
        *        @param {int}
        *        @param {int}
        *        @return {int}
         *        @version        1.0        -  12-01-2008
        */
        GetPower:function(a, b)
        {
           var temp=1, i;
           for(i=1;i<=b;i++)
              temp*=a;
            return temp;
        }
};

