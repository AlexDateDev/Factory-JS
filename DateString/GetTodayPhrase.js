// ----------------------------------------------------------------------------
// GetTodayPhrase
//
//
//
// Date : 03/03/2013
// By   : Alex
// ----------------------------------------------------------------------------


var Dates={
  /**
    *  Devuelve la fecha de hoy en formato completo como un string.
    *  El formato es: Jueves, 11 de diciembre del 2003
    *
    *  @return        {String} String con la fecha actual
    *  @version        1.0        -  19-03-2008
    */
    GetTodayString : function()
    {
        var ndia = new Array('Domingo', 'Lunes', 'Martes', 'Miercoles', 'Jueves', 'Viernes', 'Sabado');

        var nmes = new Array('enero', 'febrero', 'marzo', 'abril', 'mayo', 'junio', 'julio', 'agosto', 'septiembre', 'octubre', 'noviembre', 'diciembre');

        var ahora;
        var fecha = new Date();
        var ano = fecha.getYear();
        var mes = fecha.getMonth();
        var dia = fecha.getDay();
        var aux = "" + fecha;

        if ( ano < 10 )
        {
            ano2 = "200" + eval( ano );
        }
        else if ( ano < 80 )
        {
            // ano tiene 2 digitos 19xx (mas de 80)
            ano2 = "20" + ano;
        }
        else if ( ano <= 99 )
        {
            // ano tiene 2 digitos 20xx (menor de 80)
            ano2 = "19" + ano;
        }
        else if ( ano < 1000 )
        {
            // ano tiene 3 digitos (100 es 2000)
            ano2 = eval( ano ) + eval( 1900 );
        }
        else
        {
            // ano tiene 4 digitos
            ano2 = ano;
        };
        ahora = ndia[dia] + ", ";
        ahora += eval(aux.substring(7, 10)) + " de ";
        ahora += nmes[mes] + " del " + ano2;
        return ahora;
    },
}


