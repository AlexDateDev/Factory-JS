// ----------------------------------------------------------------------------
// Length
//
//
//
// Date : 03/03/2013
// By   : Alex
// ----------------------------------------------------------------------------

// -- Devuelve y establece la longitud
function sl_l( domObj )
    {
    if(arguments.length==1)
        return parseInt( domObj.length,10 );
    else
    {
        var t=arguments[1];
        if(t<0)
        {
            alert("Tamañó del select no permitido: "+t);
            return;
        }
        domObj.length = parseInt(t,10 );
    }
}

<HTML>
<HEAD>
    <TITLE>Titulo</TITLE>
    <!-- <LINK REL="STYLESHEET" HREF=".css" TYPE="text/css">-->

    <SCRIPT SRC="sl_l.js"></SCRIPT>
    <SCRIPT LANGUAGE="JAVASCRIPT">
    function set( )
    {
        var s = document.getElementById( "s" );
        var i = document.getElementById( "i1" );
        sl_l( s, i.value );
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
    <INPUT TYPE="Button" NAME="BTN" VALUE="set length" onClick="set()"><INPUT TYPE="input" id="i1"><p>
    <INPUT TYPE="Button" NAME="BTN" VALUE="get length" onClick="get()"><INPUT TYPE="input" id="i2"><p>

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
