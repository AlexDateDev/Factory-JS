// ----------------------------------------------------------------------------
// Título:        Find
//
// Fecha:        08/01/2009
// Autor:        Alex Solé
// Versión:        1.0.0
// Dependencias:
// ----------------------------------------------------------------------------



var DOM={
    /*
     * Buscamos un identificador
     *
     * @param {String} s
     * @param {Object document} d (opcional)
     * @return {Dom Object}
      * @version        1.0        -  08-01-2009
     */
    Find:function(s,d){if(!d){d=document;}var D=d.getElementById(s);if(!D){throw "DOM.find: no Dom: "+s;}return D;},
 }

