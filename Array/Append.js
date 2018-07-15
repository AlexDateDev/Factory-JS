// ----------------------------------------------------------------------------
// Título:        Append
//
// Fecha:        08/01/2009
// Autor:        Alex Solé
// Versión:      1.0.0
// Dependencias: Clone, GetSize
// ----------------------------------------------------------------------------

var ARR={
    /*
    * Anade valores al final del array. Los valores a añadir se pasan después
    * del array, se le pueden pasar tantos parámetros como se quiera
    *
    * @param {Array} Array al que queremos añadir los valores.
    * @param {list string} Todos los valores a añadir, seprados por comas
    *
    * @return {Array} Un nuevo array con los valores aiñadidos
    *
    * @example        var a=new Array();
    *               a[0] = "Promero";
    *               a[1] = "Segundo";
    *               a[2] = "Tercero";
    *               Alx.Array.Alert(a);
    *               var a2 = ARR.Append(a,"Otro mas", "Otro segundo" );
    *               Alx.Array.Alert(a2);
    */
    Append:function(a){ // + parametros
        var t = ARR.Clone(a);
        var m=ARR.Count(t);
        for(var i=1, n=arguments.length; i<n; i++){
            t[m++]=arguments[i];
        }
        return t;
    }
}
