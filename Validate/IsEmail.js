// ----------------------------------------------------------------------------
// Título:        IsValid
//
// Fecha:        12/08/2011
// Autor:        Alex Solé
// Versión:        1.0.0
// Dependencias:
// ----------------------------------------------------------------------------

var VAL=
{
   /**
    *        Comprobamos si una direccion de correo es correcta en formato RFC o forna normal
    *        @param:        string: Email a comprobar
    *        @return:        boolean: True si es un eamil y false si no lo es
    *        Formato RFC = Nombre Apellido <nombre@dominio.info>
    */

/**
    *        Comprobamos si una direccion de correo es correcta en formato RFC o forna normal
    *        Formato RFC = Nombre Apellido <nombre@dominio.info>
    *
    *        @param        {String} Email a comprobar
    *        @return {Bool} True si es un eamil y false si no lo es
    */
    IsEmail:function(s)
    {
                // -- Comprobar si existen <>
        var b = s.indexOf( "<" ); // -1 => No encontrado
        var e = s.indexOf( ">" ); // -1 => No encontrado
        var r1 = new RegExp( "(@.*@)|(\\.\\.)|(@\\.)|(^\\.)" );
        var r2 = new RegExp( "^.+\\@(\\[?)[a-zA-Z0-9\\-\\.]+\\.([a-zA-Z]{2,4}|[0-9]{1,3})(\\]?)$" );
        if( b != -1 && e !=  -1 )
        {
                var imaginaria = s.slice( b+1, s.indexOf( ">", b+1 ) );
            if( imaginaria.indexOf( " " ) != -1  )
            {
                    return false;
                        }
            return ( !r1.test( imaginaria ) && r2.test( imaginaria ));
                }
        else if( (b == -1 && e !=  -1 ) || (b != -1 && e ==  -1 ) )
        {
                return false;
                }
        else
        {
                if( s.indexOf( " " ) != -1 || s.indexOf( "," ) != -1 )
            {
                    return false;
                        }
            return ( !r1.test( s ) && r2.test( s ));
                }
    },
}
