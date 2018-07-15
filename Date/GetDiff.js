// ----------------------------------------------------------------------------
// Título:        GetDiff
//
// Fecha:        17/09/2016
// Autor:        Alex Solé
// Versión:        1.0.0
// Dependencias:
// ----------------------------------------------------------------------------

var DATE={
    // Comprueva si un string formato dd/mm/yyyy es mayor  o menor que otro
    // -1 => d1 < d2
    // 1 => d1 > d2
    // 0 => iguales
    GetDiff:function(sDateSTD1,sDateSTD2){
        var t1=sDateSTD1.split("/");
        var d1=new Date(t1[2],t1[1]-1,t1[0]);
        var t2=sDateSTD2.split("/");
        var d2=new Date(t2[2],t2[1]-1,t2[0]);
        if(d1<d2){return -1;}
        else if(d1>d2){return 1;}
        else {return 0;}
    },
}
