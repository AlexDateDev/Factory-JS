// ----------------------------------------------------------------------------
// Título:        IsBeetween
//
// Fecha:        17/09/2016
// Autor:        Alex Solé
// Versión:        1.0.0
// Dependencias:
// ----------------------------------------------------------------------------

var DATE={
    // Comprueba si un objeto Date esta entre dos fechas
    // bCloseBegin = true => Date >= inicio (Entorno cerrado)
    // bCloseBegin = fasle => Date > inicio (Entorno abierto)
    // bCloseEnd = true => Date <= fin (Entorno cerrado)
    // bCloseEnd = false => Date < fin (Entorno abierto)
    IsBetween:function(dtTest,dt1,dt2,bCloseBegin,bCloseEnd ){
        if(bCloseBegin && bCloseEnd){
            // dtTest Puede ser igual a dt1 i a dt2
            if(dtTest>=dt1 && dtTest<=dt2){return true;}
            return false;
        }
        else if(!bCloseBegin && bCloseEnd){
            // dtTest ha de ser mayor que dt1  y puede ser igual a dt2
            if(dtTest>dt1 && dtTest<=dt2){return true;}
            return false;
        }
        else if(bCloseBegin && !bCloseEnd){
            // dtTest ha de ser menor que dt2  y puede ser igual a dt1
            if(dtTest>=dt1 && dtTest<dt2){return true;}
            return false;
        }
        else{
            // dtTest ha de ser menor que dt2  y mayor a dt1
            if(dtTest>dt1 && dtTest<dt2){return true;}
            return false;
        }
    }
}
