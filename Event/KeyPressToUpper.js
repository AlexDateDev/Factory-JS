// ----------------------------------------------------------------------------
// T�tulo:        KeyPressToUpper
//
// Fecha:        03/02/2011
// Autor:        Alex Sol�
// Versi�n:        1.0.0
// Dependencias:
// ----------------------------------------------------------------------------


var EVENT = {
    /*
    *        Trasforma la tecla presionada en su om�loga en may�sculas
    */
    KeyPressToUpper:function(evt){
        var e=this.std_evt(evt);
        var c=this.std_key_code(e);
        if(c>=97&&c<=122){
            e.charCode -= 32;
        }
    }
}
