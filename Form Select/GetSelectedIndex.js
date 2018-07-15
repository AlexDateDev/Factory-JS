// ----------------------------------------------------------------------------
// GetSelectedIndex
//
//
//
// Date : 03/03/2013
// By   : Alex
// ----------------------------------------------------------------------------

// -- Devuelve/Establece el indice seleccionado
// Un número mayor qle length y menor que -1 no selecciona nada
function sl_s_i( domObj,v )
    {
    if(arguments.length==1)
        return domObj.selectedIndex;
    domObj.selectedIndex = parseInt(v,10);
    }

<HTML>
<HEAD>
    <TITLE>Titulo</TITLE>
    <!-- <LINK REL="STYLESHEET" HREF=".css" TYPE="text/css">-->

    <SCRIPT SRC="sl_s_i.js"></SCRIPT>
    <SCRIPT LANGUAGE="JAVASCRIPT">
    function set( )
    {
        var s = document.getElementById( "s" );
        var i = document.getElementById( "i1" );
        sl_s_i( s, i.value );
    }
    function get( )
    {
        var s = document.getElementById( "s" );
        var i = document.getElementById( "i2" );
        i.value=sl_s_i( s );
    }
    </SCRIPT>
</HEAD>
<BODY>
    <FORM NAME="datos">
    <INPUT TYPE="Button" NAME="BTN" VALUE="set selected index" onClick="set()"><INPUT TYPE="input" id="i1"><p>
    <INPUT TYPE="Button" NAME="BTN" VALUE="get selected index" onClick="get()"><INPUT TYPE="input" id="i2"><p>

     <SELECT size="4" id="s" name="elegir-componente">
      <OPTION selected value="Componente_1_a">Componente_1</OPTION>
      <OPTION selected value="Componente_1_b">Componente_2</OPTION>
      <OPTION>Componente_3</OPTION>
      <OPTION>Componente_4</OPTION>
      <OPTION>Componente_5</OPTION>
      <OPTION>Componente_6</OPTION>
      <OPTION>Componente_7</OPTION>
   </SELECT>
    </FORM>
</BODY>
</HTML>
