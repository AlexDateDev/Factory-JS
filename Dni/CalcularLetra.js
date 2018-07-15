// ----------------------------------------------------------------------------
// Título:        CalcularLetra
//
// Fecha:        12/08/2011
// Autor:        Alex Solé
// Versión:        1.0.0
// Dependencias:
// ----------------------------------------------------------------------------

var DNI=
{
/**
    *   Devuelve la letra asociada al DNI para el NIF
    *   Devuelve "" si ha ocurrido algun error
    *
    *   @param        {String} String con el DNI: 12345678
    *   @return        {String} con la letra asociada al DNI pra componer el NIF
    */
    calculate_nif_letter:function(s )
    {
            // NIF
        if(s.indexOf(" ")!=-1||s.indexOf("-")!=-1)
        {
                return "";
        }
        // Esta funcion calcula la letra del NIF correspondiente al numero del DNI
        var l=new String("TRWAGMYFPDXBNJZSQVHLCKE");
        return l.substr((parseInt(s,10)%23),1);
    },
}

