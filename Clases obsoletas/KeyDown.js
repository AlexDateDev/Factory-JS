// ----------------------------------------------------------------------------
// KeyDown
//
//
//
// Date : 03/03/2013
// By   : Alex
// ----------------------------------------------------------------------------



/**
* Autor: Alex Sole
* KEY_DOWN( )
*
* Version: 1.0 Fecha: 29/10/2001
*
* Navegadores: Netscape (SI)
* Internet Explorer (SI)
*
* Implementa un objeto que captura y procesa los eventos generados al presionar un tecla
* DEPENDENCIAS: Ningun otro archivo
*
* BeginCapture( ) StopCapture( )
* SetFunctionCapture( strFun ) TKeyDown( doc )
*/
/**
* TKeyDown( doc )
* Clase que captura y procesa los eventos generados al presionar un tecla
* PARAMETROS: IN: doc: documento al que capturar los eventos del teclado
*/

function KEY_DOWN( doc )
{
        this.p_doc = doc;
        this.p_keycode = "";
        this.p_realkey = "";
        this.CaptureKeyDown = keydown_Capture;
        this.BeginCapture = keydown_BeginCapture;
        this.StopCapture = keydown_StopCapture;
        this.SetFunctionCapture = keydown_SetFunctionCapture;
}

// ==========================================
// p_FunctionCaptureKeyDown = ""
// ------------------------------------------
// Funcion publica que sirve para guardar el nombre de la funcion del usuario
// que procesara los eventos de teclado
// ==========================================

var p_FunctionCaptureKeyDown = "";

// ==========================================
// p_DecodeKeyDownCode( real, code )
// ------------------------------------------
// FUNCION publica que no pertenece a la clase
// Funcion que decodifica el codigo de la tecla presionada
// PARAMETROS:
// IN: real: caracter real de la tecla presionada
// IN: code: codigo ascii dela tecla presionada
// DEVUELVE:
// Un string conteniendo la tecla real o un string identificando una tecla de control
// OBSERVACIONES:
// Valores devueltos:
//
// "ESC" "F1" "F2" "F3" "F4" "F5"
// "F6" "F7" "F8" "F9" "F10" "F11"
// "F12" "BLOQ_NUM" "BLOQ_DESPL" "INICIO" "RE_PAG" "AV_PAG"
// "FIN" "FL_ARRIBA" "FL_ABAJO" "FL_IZQ" "FL_DER" "SHIFT"
// "RETURN" "RETROCESO" "SUPR" "INS" "CRTL" "ALT"
// "BLOQ_MAYUS" "TAB"
// "A", "B", ... "Y", "Z"
// "1", "2", ... "9", "0"
// ==========================================

function p_DecodeKeyDownCode( real, code )
{
        var str = "";

        // alert( "Code="+code + " Real="+real );
        switch( parseInt( code ) )
        {
                case 27:
                str = "ESC"; break;
                case 112:
                str = "F1"; break;
                case 113:
                str = "F2"; break;
                case 114:
                str = "F3"; break;
                case 115:
                str = "F4"; break;
                case 116:
                str = "F5"; break;
                case 117:
                str = "F6"; break;
                case 118:
                str = "F7"; break;
                case 119:
                str = "F8"; break;
                case 120:
                str = "F9"; break;
                case 121:
                str = "F10"; break;
                case 122:
                str = "F11"; break;
                case 123:
                str = "F12"; break;
                case 144:
                str = "BLOQ_NUM"; break;
                case 145:
                str = "BLOQ_DESPL"; break;
                case 36:
                str = "INICIO"; break;
                case 33:
                str = "RE_PAG"; break;
                case 34:
                str = "AV_PAG"; break;
                case 35:
                str = "FIN"; break;
                case 38:
                str = "FL_ARRIBA"; break;
                case 40:
                str = "FL_ABAJO"; break;
                case 37:
                str = "FL_IZQ"; break;
                case 39:
                str = "FL_DER"; break;
                case 16:
                str = "SHIFT"; break;
                case 13:
                str = "RETURN"; break;
                case 8:
                str = "RETROCESO"; break;
                case 46:
                str = "SUPR"; break;
                case 45:
                str = "INS"; break;
                case 17:
                str = "CRTL"; break;
                case 18:
                str = "ALT"; break;
                case 20:
                str = "BLOQ_MAYUS"; break;
                case 9:
                str = "TAB"; break;
                default:
                str = real;
        }
        return str;
}

// ==========================================
// keydown_BeginCapture( )
// -----------------------------------------
// Funcion que activa la captura de teclas presionadas
// ==========================================

function keydown_BeginCapture( )
{
        this.p_doc.onkeydown = this.CaptureKeyDown;
}

// ==========================================
// keydown_StopCapture( )
// -----------------------------------------
// Funcion que finaliza la captura de teclas presionadas
// ==========================================

function keydown_StopCapture( )
{
        this.p_doc.onkeydown = null;
}

// ==========================================
// keydown_Capture( )
// -----------------------------------------
// Funcion interna que captura las teclas presionadas, una vez capturadas
// los codigos, esta funcion llama a la funcio espeficicada por el usuario
// pasandole los codigos de las teclas
// ==========================================

function keydown_Capture( )
{
        this.p_keycode = event.keyCode;
        this.p_realkey = String.fromCharCode( event.keyCode );
        var key = p_DecodeKeyDownCode( this.p_realkey, this.p_keycode );

        //alert( "str="+key );
        if( p_FunctionCaptureKeyDown != "" )
        {
                eval( p_FunctionCaptureKeyDown + "( key, this.p_keycode );")
        }
}

// ==========================================
// keydown_SetFunctionCapture( strFun )
// -----------------------------------------
// Funcion que establece la funcion de usuario que capturara los eventos de teclado
// PARAMETROS:
// IN: strFun: Stirng que identifica la funcion de usuario a capturar los eventos
// ==========================================

function keydown_SetFunctionCapture( strFun )
{
        p_FunctionCaptureKeyDown = strFun;
}
