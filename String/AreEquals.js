// ----------------------------------------------------------------------------
// Título:        AreEquals
//
// Fecha:        03/02/2011
// Autor:        Alex Solé
// Versión:        1.0.0
// Dependencias:
// ----------------------------------------------------------------------------

var STR={
    AreEquals:function(s1,s2){
        if((typeof s1)!=(typeof s2)){alert("Diferent type");return false;}
        return $.trim((""+s1).toLowerCase())==$.trim((""+s2).toLowerCase());
    }
}
