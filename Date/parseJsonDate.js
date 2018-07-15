// ----------------------------------------------------------------------------
// Título:        ParseJsonDate
//
// Fecha:        17/09/2016
// Autor:        Alex Solé
// Versión:        1.0.0
// Dependencias:
// ----------------------------------------------------------------------------


function parseJsonDate(val){
    return val ? new Date(parseInt(/\d+/.exec(val)[0])) : val;
}
