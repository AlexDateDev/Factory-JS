// ----------------------------------------------------------------------------
// Título:        IsValid
//
// Fecha:        03/03/2013
// Autor:        Alex Solé
// Versión:        1.0.0
// Dependencias:
// ----------------------------------------------------------------------------

var VAL=
{
    /**
    *   Comprueba que el NIF sea correncto y con letra correcta
    *   @param        {String}  String con el NIF: 12345678Z
    *   @return        {Bool}    true si es correcto o false si no lo es
    */
    IsNIF: function(s)
    {
        // NIF
        var c = 'TRWAGMYFPDXBNJZSQVHLCKET';//  Letras validas para el NIF
        var l = s.length;
        var n = s.substring(0, l - 1);
        var x = s.substring(l - 1, l);
        var p = n % 23;
        var a = c.charAt(p);
        if(x.toUpperCase() != a){
            return false;
        }
        return true;
    }
}

