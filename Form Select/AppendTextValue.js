// ----------------------------------------------------------------------------
// AppendTextValue
//
//
//
// Date : 03/03/2013
// By   : Alex
// ----------------------------------------------------------------------------

Domingo 01 Julio 2012
// -- Añade un texto y valor al final del select
function sl_a( domObj, text, value )
{
    domObj.length++;
    domObj.options[domObj.length-1].text = text;
    if( arguments.length == 3 )
        domObj.options[domObj.length-1].value = value;
    else
        domObj.options[domObj.length-1].value = "";
    domObj.selectedIndex = domObj.length-1;
}


<HTML>
<HEAD>
    <TITLE>Titulo</TITLE>
    <!-- <LINK REL="STYLESHEET" HREF=".css" TYPE="text/css">-->

    <SCRIPT SRC="sl_a.js"></SCRIPT>
    <SCRIPT LANGUAGE="JAVASCRIPT">
    function set( )
    {
        var s = document.getElementById( "s" );
        var i = document.getElementById( "i1" );
        var v = document.getElementById( "i3" );
        sl_a( s, i.value, v.value );
    }
    function get( )
    {
        var s = document.getElementById( "s" );
        var i = document.getElementById( "i2" );
        sl_a( s, i.value );
    }
    </SCRIPT>
</HEAD>
<BODY>
    <FORM NAME="datos">
    <INPUT TYPE="Button" NAME="BTN" VALUE="set selected text value" onClick="set()"><INPUT TYPE="input" id="i1"><INPUT TYPE="input" id="i3"><p>
    <INPUT TYPE="Button" NAME="BTN" VALUE="set selected text" onClick="get()"><INPUT TYPE="input" id="i2"><p>

     <SELECT size="4" id="s" name="elegir-componente">
      <OPTION selected value="Componente_1_a">Componente_1</OPTION>
      <OPTION value="Vomponente_1_b">Componente_2</OPTION>
      <OPTION value="Vomponente_1_c">Componente_3</OPTION>
      <OPTION value="Vomponente_1_d">Componente_4</OPTION>
      <OPTION value="Vomponente_1_e">Componente_5</OPTION>
      <OPTION value="Vomponente_1_f">Componente_6</OPTION>
      <OPTION value="Vomponente_1_g">Componente_7</OPTION>
   </SELECT>
    </FORM>
</BODY>
</HTML>

