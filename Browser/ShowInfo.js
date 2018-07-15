// ----------------------------------------------------------------------------
// Título:        ShowInfo
//
// Fecha:        21/05/2011
// Autor:        Alex Solé
// Versión:        1.0.0
// Dependencias:
// ----------------------------------------------------------------------------

/**
* Muestra informacion del navegador en un alert.
*/
function system_show_nav_info( )
{
    var msg;
    var idx;

    // Nombre del navegador
    msg = "Navegador: \t" + navigator.appName;

    // Codigo interno del navegador
    msg = msg + "\n" + "Codigo: \t\t" + navigator.appCodeName;

    // Version del navagador
    msg = msg + "\n" + "Version: \t\t" + navigator.appVersion;

    // Permite java
    if( navigator.javaEnabled( ) )
    {
        msg = msg + "\n" + "Java Enabled:\tTrue";
    }
    else
    {
        msg = msg + "\n" + "Java Enabled:\tFalse";
    }

    // Idioma
    msg = msg + "\n" + "Idioma: \t\t" + navigator.language;

    // MIME
    var numMime = navigator.mimeTypes.length;
    msg = msg + "\n" + "MIME types: \t" + numMime;
    for( idx = 0; idx < numMime; idx++ )
    {
        msg = msg + "\n" + "MIME type " + idx + ": \t" + navigator.mimeTypes[ idx ];
    }

    // Plataforma
    msg = msg + "\n" + "Plataforma: \t" + navigator.platform;

    // Plugins
    navigator.plugins.refresh( true );
    var numPlugs = navigator.plugins.length;
    msg = msg + "\n" + "Plugins: \t\t" + numPlugs;
    for( idx = 0; idx < numPlugs; idx++ )
    {
        msg = msg + "\n" + "Plugin " + idx + ": \t" + navigator.plugins[ idx ];
    }

    // Foprmato de fecha
    if( navigator.taintEnabled( ) )
    {
        msg = msg + "\n" + "Data tainting: \tEnabled";
    }
    else
    {
        msg = msg + "\n" + "Data tainting: \tDisabled";
    }

    // Agentes
    msg = msg + "\n" + "User agent: \t" + navigator.userAgent;

    alert( msg );
}
