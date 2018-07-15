// ----------------------------------------------------------------------------
// Título:        ToStringMiles
//
// Fecha:        03/02/2011
// Autor:        Alex Solé
// Versión:        1.0.0
// Dependencias:
// ----------------------------------------------------------------------------


function to_str_miles(numero, decimales, separador_decimal, separador_miles){ // v2007-08-06
    numero=parseFloat(numero);
    if(isNaN(numero)){
        return "";
    }

    if(decimales!==undefined){
        // Redondeamos
        numero=numero.toFixed(decimales);
    }

    // Convertimos el punto en separador_decimal
    numero=numero.toString().replace(".", separador_decimal!==undefined ? separador_decimal : ",");

    if(separador_miles){
        // Anadimos los separadores de miles
        var miles=new RegExp("(-?[0-9]+)([0-9]{3})");
        while(miles.test(numero)) {
            numero=numero.replace(miles, "$1" + separador_miles + "$2");
        }
    }

    return numero;
}


var NUM=
{
        /**
        *  Devuelve un numero con comas como separadores de miles
        *
        *  @param {Int} Numero al que poner las comas
        *  @param {Int} String para poner como separador de miles
        *  @return {String} string con comas en los miles
         *        @version        1.0        -  12-01-2008
        */
        ToStrMile:function(number, sepMiles)
    {
            if( !sepMiles){
            sepMiles  = ",";
        }
            number = '' + number;
            if (number.length > 3){
                var mod = number.length % 3;
                var output = (mod > 0 ? (number.substring( 0, mod)) : '');
                for ( i = 0 ; i < Math.floor(number.length / 3); i++)
                    {
                    if ((mod == 0) && (i == 0))
                        {
                        output += number.substring(mod+ 3 * i, mod + 3 * i + 3);
                        }
                    else
                        {
                        output += sepMiles + number.substring(mod + 3 * i, mod + 3 * i + 3);
                        };
                    };
                return (output);
        }
            else
        {
                return number;
        };
    },
}
