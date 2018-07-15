// ----------------------------------------------------------------------------
// ExistsText
//
//
//
// Date : 03/03/2013
// By   : Alex
// ----------------------------------------------------------------------------

// --Devuelve true si el texto ya existe en la lista
// - Compara en mayúsculas y sin espacios en blanco
function sl_e_t( domObj, text )
    {
    for( var i=domObj.length-1; i>=0; i-- )
        {
        if( text.toUpperCase( ) == domObj.options[ i ].text.toUpperCase( ))
            return  true;
        }
    return false;
    }

<HTML>
<HEAD>
    <TITLE>Titulo</TITLE>
    <!-- <LINK REL="STYLESHEET" HREF=".css" TYPE="text/css">-->

    <SCRIPT SRC="sl_e_t.js"></SCRIPT>
    <SCRIPT LANGUAGE="JAVASCRIPT">
    function set( )
    {
        var s = document.getElementById( "s" );
        var i = document.getElementById( "i1" );
        alert( sl_e_t( s, i.value ));
    }
    function get( )
    {
        var s = document.getElementById( "s" );
        var i = document.getElementById( "i2" );
        i.value=sl_l( s );
    }
    </SCRIPT>
</HEAD>
<BODY>
    <FORM NAME="datos">
    <INPUT TYPE="Button" NAME="BTN" VALUE="exist text" onClick="set()"><INPUT TYPE="input" id="i1"><p>
Existen valores vacios
     <SELECT size="4" id="s" name="elegir-componente">
      <OPTION selected value="v1">Componente_1</OPTION>
      <OPTION selected value="v2">A1</OPTION>
      <OPTION>Componente_3</OPTION>
      <OPTION>Componente_4</OPTION>
      <OPTION>Componente_5</OPTION>
      <OPTION>Componente_6</OPTION>
      <OPTION>Componente_7</OPTION>
   </SELECT>
    </FORM>
</BODY>
</HTML>

