// ----------------------------------------------------------------------------
// MessageList
//
//
//
// Date : 03/03/2013
// By   : Alex
// ----------------------------------------------------------------------------


/**
* Autor: Alex Sole
* TMsgList( )
*
* Version: 1.0 Fecha: 29/10/2001
*
* Navegadores: Netscape (SI)
* Internet Explorer (SI)
*
* Gestion de los mensajes a mostrar al usuario.
* Implementa un contenedor de mensajes de texto
*
* Add( strMessage ) Reset( )
* AddGoto( strMessage, strField ) Show( )
* Count( ) TMsgList( )
*/
/**
* TMsgList( )
* Constructor de objeto contenedor de mensajes
*/
function TMsgList( )
{
        this.p_NumMsg = 0; // Numero de mensages en el contenedor
        this.p_field = ""; // Campo para poner en foco en el Show
        this.p_msg = ""; // string con todos los mensajes

        // FUNCIONES
        this.Add = msglist_Add;
        this.Count = msglist_Count;
        this.Reset = msglist_Reset;
        this.AddGoto = msglist_AddGoto;
        this.Show = msglist_Show;
}

// ==============================================
// Reset( )
// Elimina todos los mensajes almacenados
// ==============================================

function msglist_Reset( )
{
        this.p_NumMsg = 0;
        this.p_msg = null;
        this.p_field = "";
}

// ==============================================
// Show( )
// Muestra en un cuadro de dialogo todos los mensajes almacenados
// ==============================================

function msglist_Show( )
{
        alert( this.p_msg );
        if (this.p_field != "" )
        eval( "window.document.forms[0]." + this.p_field + ".focus()");
}

// ==============================================
// Add( strMessage )
// Inserta en el contenedor un nuevo mensaje de texto
// PARAMETROS:
// IN: message: texto del nuevo mensaje a almacenar
// ==============================================

function msglist_Add( strMessage )
{
        if( this.p_NumMsg == 0 )
        this.p_msg = strMessage;
        else
        this.p_msg = this.p_msg + "\r" + strMessage;

        this.p_NumMsg = this.p_NumMsg + 1;
}

// ==============================================
// Count( )
// Devuelve el numero de mensages almacenados
// DEVUELVE:
// Devuelve el numeto de mensajes almacenados, 0 si esta vacio
// ==============================================

function msglist_Count( )
{
        return this.p_NumMsg;
}

// ==============================================
// AddGoto( strMessage, strField )
// Inserta en el contenedor un nuevo mensaje de texto, y un nombre de un campo
// para posicionar el focus a este campo
// PARAMETROS:
// IN: strMessage: texto del nuevo mensaje a almacenar
// IN: strField: texto con el nombre del campo (para el focus())
// ==============================================

function msglist_AddGoto( strMessage, strField )
{
        if( this.p_NumMsg == 0 )
        this.p_msg = strMessage;
        else
        this.p_msg = this.p_msg + "\r" + strMessage;

        this.p_NumMsg = this.p_NumMsg + 1;

        if (this.p_field == "" )
        this.p_field = strField;
}
