// ----------------------------------------------------------------------------
// Título:        Save
//
// Fecha:        03/03/2013
// Autor:        Alex Solé
// Versión:        1.0.0
// Dependencias:
// ----------------------------------------------------------------------------



var Cookie={
    /*
    *        Crea una cookie
    *   @param        {String} Nombre de la cookie
    *   @param        {String} Valor de la cookie
    *   @param        {String date} Fecha en que expira la cookie,
    *                         si es null, la cookie expira al finalizar la session
    *   @param        {String} Indica el path donde la cookie es valida
    *                    si es null, se usa el path del documento actual
    *        @param        {String} Indica el dominio donde la cookie es valida
    *                    si es null, se usa el dominio del documento actual
    *   @param        {Bool}        Indica si la transmision de la cookie necessita HTTPS
    *   @version        1.0        -  04-01-2008
    */
    save:function(sName,sValue,sDateToExpire,sPath,sDomain,bSecure)
    {
            document.cookie = sName + "=" + escape (sValue) +
                    ((sDateToExpire) ? "; expires=" + Date.ToObject(sDateToExpire).toGMTString() : "") +
        ((sPath) ? "; path=" + sPath : "") +
        ((sDomain) ? "; domain=" + sDomain : "") +
        ((bSecure) ? "; secure" : "");
    }
}

