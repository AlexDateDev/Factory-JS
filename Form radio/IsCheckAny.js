// ----------------------------------------------------------------------------
// IsCheckAny
//
//
//
// Date : 03/03/2013
// By   : Alex
// ----------------------------------------------------------------------------

Comprueba que un radio button este seleccionado. Recorre todos los posibles radios para ver si hay alguno seleccionado
Si no hay ninguno, muestra un mensaje de aviso

var Factory={
    Radio:{
        IsCheck: function( fld, sMsg ){
            var p=fld.length;
            for( var n=0; n<p; n++){
                if( fld[n].checked ){
                    return true;
                }
            }
            alert(sMsg);
            fld[0].focus();
            return false;
        }
    }
}

