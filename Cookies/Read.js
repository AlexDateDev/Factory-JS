// ----------------------------------------------------------------------------
// Título:        Read
//
// Fecha:        03/03/2013
// Autor:        Alex Solé
// Versión:        1.0.0
// Dependencias:
// ----------------------------------------------------------------------------


var Cookie={
   /*
    *    Devuelve el valor de la cookie
    *
    *    @param        {String} Nombre de la cookie a leer
    *    @return {String | null} String o null si no existe
    *    @version        1.0        -  04-01-2008
    */
    Read : function(sName){
        var arg=sName+"=";
        var alen=arg.length;
        var clen=document.cookie.length;
        var i=0;
        while(i<clen){
            var j=i+alen;
            if (document.cookie.substring(i, j) == arg){
                return this.read_offset(j);
            }
            i = document.cookie.indexOf(" ", i) + 1;
            if (i == 0){
                break;
            }
        }
        return null;
    }
}

