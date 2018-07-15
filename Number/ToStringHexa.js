// ----------------------------------------------------------------------------
// Título:        ToStringHExa
//
// Fecha:        03/02/2011
// Autor:        Alex Solé
// Versión:        1.0.0
// Dependencias:
// ----------------------------------------------------------------------------

var NUM=
{
/**
        *        Devuelve un numero de firmato hexadecimal
        *
        *        @param {int} Numero a convertir, valores entre 0 y 255
        *        @return {String} String de dos digitos: 1 => 01, 10 => 0A
         *        @version        1.0        -  12-01-2008
        */
        ToStrHex:function(inval)
        {
                hexchars="0123456789ABCDEF";
            out=hexchars.charAt(inval/16);
            out+=hexchars.charAt(inval%16);
            return out;
        },
};
