// ----------------------------------------------------------------------------
// Título:        PressOnlyNumbers
//
// Fecha:        03/02/2011
// Autor:        Alex Solé
// Versión:        1.0.0
// Dependencias:
// ----------------------------------------------------------------------------



var EVENT = {
    /*
    *        Si la tecla presionada es un número devuelve true, si no false
    */
    PressOnlyNumbers:function(e){
        var e=this.std_evt(e),c=this.std_key_code(e);
        if(c>31&&(c<48||c>57)){
             return false
        }
        return true
    }
}


