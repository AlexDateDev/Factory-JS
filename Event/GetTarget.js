// ----------------------------------------------------------------------------
// GetTarget
//
//
//
// Date : 03/03/2013
// By   : Alex
// ----------------------------------------------------------------------------


var Event={
    /*
    *        Devuelve el target standarizado apra todos los navegadores
    *        @param:        event
    *        @return: element
    */
    GetTarget:function(evt){
            return evt.target?evt.target:evt.srcElement;
    }
}

