// ----------------------------------------------------------------------------
// T�tulo:        IsValid
//
// Fecha:        03/02/2011
// Autor:        Alex Sol�
// Versi�n:        1.0.0
// Dependencias:
// ----------------------------------------------------------------------------


var Val={
    IsPhone:function(s){
        var t=""+s;
        if(t.length!=9){return false;}
        if(t[0]!="9" && t[0]!="6"){return false;}
        return Factory.Validate.isInteger(t);
    }
}
}
