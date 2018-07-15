// ----------------------------------------------------------------------------
// T�tulo:        Append
//
// Fecha:        08/01/2009
// Autor:        Alex Sol�
// Versi�n:      1.0.0
// Dependencias: Clone, GetSize
// ----------------------------------------------------------------------------

var ARR={
    /*
    * Anade valores al final del array. Los valores a a�adir se pasan despu�s
    * del array, se le pueden pasar tantos par�metros como se quiera
    *
    * @param {Array} Array al que queremos a�adir los valores.
    * @param {list string} Todos los valores a a�adir, seprados por comas
    *
    * @return {Array} Un nuevo array con los valores ai�adidos
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
