// ----------------------------------------------------------------------------
// Título:        Sort
//
// Fecha:        03/03/2013
// Autor:        Alex Solé
// Versión:        1.0.0
// Dependencias:
// ----------------------------------------------------------------------------

var absOrder = true;        // boolean to sort in reverse if on same column

//-----------------------------------------------------------------------
function numberOrder(a,b){
    absOrder ? rVal = b - a : rVal = a - b
    return rVal
}
//-----------------------------------------------------------------------
function dateOrder(a,b){
    absOrder ? rVal = Date.parse(a) - Date.parse(b) : rVal = Date.parse(b) - Date.parse(a)
    return rVal
}
//-----------------------------------------------------------------------
function textOrder(a,b){
    if (a.toString() < b.toString()){
        absOrder ? rVal = -1 : rVal = 1
    }
    else{
        absOrder ? rVal = 1 : rVal = -1
    }
    return rVal
}

function sort( )
{
   //sort the original data based on data type
   if (allNums){
        colToSort.sort(numberOrder)
    }
    else if (allDates){
        colToSort.sort(dateOrder)
    }
    else{
        colToSort.sort(textOrder)
    }
}

