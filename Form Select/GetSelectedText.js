// ----------------------------------------------------------------------------
// GetSelectedText
//
//
//
// Date : 03/03/2013
// By   : Alex
// ----------------------------------------------------------------------------

// -- DevuelveEstablece  el texto de la opcion seleccioada
// -- SI no existe posición devuelve null
function sl_s_t( domObj,v )
    {
    var s=domObj.selectedIndex;
    if(arguments.length==1)
    {
        return s!=-1?domObj.options[s].text:null;
    }
    else
    {
        if(s != -1)
            domObj.options[s].text=v
    }
}

<HTML>
<HEAD>
    <TITLE>Titulo</TITLE>
    <!-- <LINK REL="STYLESHEET" HREF=".css" TYPE="text/css">-->

    <SCRIPT SRC="sl_s_t.js"></SCRIPT>
    <SCRIPT LANGUAGE="JAVASCRIPT">
    function set( )
    {
        var s = document.getElementById( "s" );
        var i = document.getElementById( "i1" );
        sl_s_t( s, i.value );
    }
    function get( )
    {
        var s = document.getElementById( "s" );
        var i = document.getElementById( "i2" );
        i.value=sl_s_t( s );
    }
    </SCRIPT>
</HEAD>
<BODY>
    <FORM NAME="datos">
    <INPUT TYPE="Button" NAME="BTN" VALUE="set selected text" onClick="set()"><INPUT TYPE="input" id="i1"><p>
    <INPUT TYPE="Button" NAME="BTN" VALUE="get selected text" onClick="get()"><INPUT TYPE="input" id="i2"><p>

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

