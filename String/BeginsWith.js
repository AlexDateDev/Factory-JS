// ----------------------------------------------------------------------------
// Título:        BeginsWith
//
// Fecha:        03/02/2011
// Autor:        Alex Solé
// Versión:        1.0.0
// Dependencias:
// ----------------------------------------------------------------------------


var STR=
{
    /**
        * Indica si un string empuieza por otro string
        *
        * @param {String} pattern
        * @return {Bool}
        *        @version        1.0        -  04-01-2008
        */
    BeginsWith:function(pattern)
    {
            return this.indexOf(pattern) === 0;
    },
  },

