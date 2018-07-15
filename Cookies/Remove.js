// ----------------------------------------------------------------------------
// Título:        Remove
//
// Fecha:        03/03/2013
// Autor:        Alex Solé
// Versión:        1.0.0
// Dependencias:
// ----------------------------------------------------------------------------


var Cookie={
   /*
    *    Elimina la cookie
    *
    *    @param        {String} Nombre de la cookie a eliminar
    *    @param        {String} Path de la cookie a eliminar, ha de ser el mismo path que
    *            el usado al crear la cookie o null si no se especifico
    *    @param {String} Dominio de la cookie a eliminar, ha de ser el mismo dominio que
    *            el usado al crear la cookie o null si no se especifico
    *    @version        1.0        -  04-01-2008
    */
    Remove:function(sName,sPath,sDomain){
        if(this.read(sName)){
            document.cookie = sName + "=" +
                    ((sPath) ? "; path=" + sPath : "") +
                    ((sDomain) ? "; domain=" + sDomain : "") +
                    "; expires=Thu, 01-Jan-05 00:00:01 GMT";
        }
    }
}

