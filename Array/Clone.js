// ----------------------------------------------------------------------------
// Título:        Clone
//
// Fecha:        08/01/2009
// Autor:        Alex Solé
// Versión:        1.0.0
// Dependencias:
// ----------------------------------------------------------------------------


var ARR={
    // Copia un array
    Clone:function(o){
        if(typeof o!="object" || o===null){return o;}
        var r=o.constructor==Array?[]:{};
        for(var i in o){r[i]=ARR.Clone(o[i]);}
        return r;
    }
}
