// ----------------------------------------------------------------------------
// Título:        EndsWith
//
// Fecha:        03/02/2011
// Autor:        Alex Solé
// Versión:        1.0.0
// Dependencias:
// ----------------------------------------------------------------------------


var STR=
{
	/**
    * Indica si un string finaliza con otro string
    *
    * @param {String} pattern
    * @return {Bool}
    *        @version        1.0        -  04-01-2008
    */
    EndsWith:function(pattern)
    {
    var d = this.length - pattern.length;
            return d >= 0 && this.lastIndexOf(pattern) === d;
    },
}

