// ----------------------------------------------------------------------------
// ModelDialog
//
//
//
// Date : 03/03/2013
// By   : Alex
// ----------------------------------------------------------------------------


/**
* Autor: Alex Sole
* TModalDialog( )
*
* Version: 1.0 Fecha: 29/10/2001
*
* Navegadores: Netscape (??)
* Internet Explorer (SI)
*
* Implementa una veentana usada como dialogo
* DEPENDENCIAS: Ningun otro archivo
*
* PARAMETROS
* ID "" Identificador devuelto por la ventana
* Path "" Ruta de la URL
* Form "" Nombre del formulario a abrir
* Parameters "" Posibles parametros de la URL
* ShowStatus false Si se ha de mostrat la bara de estado del navegador
* Arguments "" Parametros a pasarle al formulario modal
* Resize false Si se puede redimensionar la ventana
* ScrollBars false Si se muestran o no el scroll
* X 0 Posicion X respecto la pantalla
* Y 0 Posicion Y respecto la pantalla
* W 100 Ancho de la ventana
* H 100 Altura de la ventana
* FullSize false Indica si la ventana se muestra en pantalla completa (true)
* ShowParam false Muestra la URL en un alert antes de mostrar el formulario
*
* FUNCIONES
* function Show( ); Muestra la ventana, devuelve el ID de la ventana
*/

/**
* TModalDialog( )
* Constructor de la clase
*/

function TModalDialog( )
{
        this.ID = ""; // Identificador devuelto por la ventana

        // Ruta de la URL
        this.Path = window.location.pathname.substring(0,( window.location.pathname.lastIndexOf('.nsf')+5));

        // El path ha de empexzar por / para emepzar desde http
        if( this.Path.slice( 0, 1 ) != "/" )
                this.Path = "/" + this.Path;

        this.Form = ""; // Nombre del formulario a abrir
        this.Action = "?OpenForm" // Accion a realizar (Por defecto ?OpenForm)
        this.Parameters = ""; // Posibles parametros de la URL
        this.ShowStatus = false; // Si se ha de mostrar la bara de estado del navegador
        this.Resize = false; // Si se puede redimensionar la ventana

        this.ScrollBars = false; // Si se muestran o no el scroll
        this.X = 50; // Posicion X respecto la pantalla
        this.Y = 10; // Posicion Y respecto la pantalla
        this.W = 0; // Ancho de la ventana
        this.H = 0; // Altura de la ventana

        this.FullSize = false; // Si es True se muestra la ventana en tamano completo
        this.Arguments = new Array;
        this.ShowParam = false; // Muestra en un alert toda la url, antes de mostrar el dialogo

        this.Show = Show_ModalForm; // Muestra la venatana
}

// ------------------------------------------------------------
// Show( )
// ------------------------------------------------------------
// Muestra la ventana
// DEVUELVE: El ID de la vemtana creada
// ------------------------------------------------------------

function Show_ModalForm( )
{
        var modo = "";
        if( this.ShowStatus )
                modo = modo + 'status: Yes;';
        else
                modo = modo + 'status: No;';
        if( this.Resize )
                modo = modo + 'resizable: Yes;';
        else
                modo = modo + 'resizable: No;';
        if( this.ScrollBars )
                modo = modo + 'scroll: yes;';
        else
                modo = modo + 'scroll: No;';
        if( this.FullSize )
        {
                modo = modo + 'dialogHeight:' + (screen.availheight ) + " px;";
                modo = modo + 'dialogWidth:' + (screen.availwidth ) + " px;";
                modo = modo + 'dialogLeft:' + 0 + " px;";
                modo = modo + 'dialogTop:' + 0 + " px;";
        }
        else
        {
                if( this.X > 0 )
                        modo = modo + 'dialogLeft:' + this.X + 'px;';
                if( this.Y > 0 )
                        modo = modo + 'dialogTop:' + this.Y + 'px;';
                if( this.W > 0 )
                        modo = modo + 'dialogWidth:' + this.W + 'px;';
                if( this.H > 0 )
                modo = modo + 'dialogHeight:' + this.H + 'px;';
        }

        if( this.Parameters != "" )
                this.Parameters = "&" + this.Parameters;

        if( this.ShowParam )
                alert( this.Path +this.Form + this.Parameters );

        ID = window.showModalDialog(this.Path + this.Form + this.Action + this.Parameters, this.Arguments , modo);
                return ID;
}

