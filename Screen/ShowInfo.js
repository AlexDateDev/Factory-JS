// ----------------------------------------------------------------------------
// Título:        ShowInfo
//
// Fecha:        03/02/2008
// Autor:        Alex Solé
// Versión:        1.0.0
// Dependencias:
// ----------------------------------------------------------------------------


/**
* Muestra la informacion sorbe configuracion de la pantalla mediante un alert.
*/
function system_show_screen_info( )
{
    var msg;

    msg = "Alto abalible: \t" + screen.availHeight;
    msg = msg + "\nAncho abalible: \t" + screen.availWidth;

    msg = msg + "\nIzquierda abalible: \t" + screen.availLeft;
    msg = msg + "\nArriba abalible: \t" + screen.availTop;
    msg = msg + "\nColor: \t\t" + screen.colorDepth + " bits";
    msg = msg + "\nResolucion: \t" + screen.pixelDepth + " bits";
    msg = msg + "\nAlto: \t\t" + screen.Height;
    msg = msg + "\nAncho: \t\t" + screen.Width;

    alert( msg );
}
