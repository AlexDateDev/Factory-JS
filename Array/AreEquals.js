// ----------------------------------------------------------------------------
// Título:        AreEquals
//
// Fecha:        13/03/2013
// Autor:        Alex Solé
// Versión:        1.0.0
// Dependencias:    Recursivo
// ----------------------------------------------------------------------------

var ARR={
    // Compara dos arrays, valor a valor
    AreEquals:function(a1,a2){
        if(a1.length != a2.length){
            return false;
        }
        for(var i in a2){
            if(!ARR.AreEquals(a1[i],a2[i])){return false;}
            else{continue;}
            if(a1[i]!=a2[i]){return false;}
        }
    return true;
    }
}

