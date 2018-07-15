// ----------------------------------------------------------------------------
// Título:        AppendFirst
//
// Fecha:        06/04/2016
// Autor:        Alex Solé
// Versión:        1.0.0
// Dependencias:
// ----------------------------------------------------------------------------

var ARR= {
    // AÃ±ade N valores al inicio de un array
    // Los ids ser reordenan, si la clave es string se pierden
    AppendFirst: function(a,s){
        if(!VAL.IsArray(a)){alert("ARR.appendFirst: Not an array");return null;}
        var t=new Array();
        t[0]=s;
        for(var i in a){t.push(a[i]);}
        a=t; return a;
    }
}
