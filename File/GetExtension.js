// ----------------------------------------------------------------------------
// Título:        GetExtension
//
// Fecha:        03/02/2011
// Autor:        Alex Solé
// Versión:        1.0.0
// Dependencias:
// ----------------------------------------------------------------------------



var FILE = {
/**
        *        Retorna l'extensio d'un arxiu
        *
        *         @param {Strinf file} Nom de l'arxiu
        *         @param {String}
        */
        GetExtension:function( strFileName )
        {
                var str = new String( strFileName );
                var posPoint = str.lastIndexOf( "." );
                var ext = "";
                if( posPoint > 0 )
                {
                        ext = str.slice( posPoint + 1, str.length );
                }
        return ext;
    },
}
