// ----------------------------------------------------------------------------
// ImplodeValue
//
//
//
// Date : 03/03/2013
// By   : Alex
// ----------------------------------------------------------------------------

// -- Devuelve todos los valores de la lista juntos, separados por un string
function sl_impl_v( domObj, sep )
{
    if( arguments.length == 1  )
        sep = "; ";

    var all = "";
    for( var i=0; i < domObj.length; i++ )
    {
        all = (i==0)? domObj.options[ i ].value : all + sep + domObj.options[ i ].value;
    }
    return all;
}

<HTML>
<HEAD>
    <TITLE>Titulo</TITLE>
    <!-- <LINK REL="STYLESHEET" HREF=".css" TYPE="text/css">-->

    <SCRIPT SRC="sl_impl_v.js"></SCRIPT>
    <SCRIPT LANGUAGE="JAVASCRIPT">
    function set( )
    {
        var s = document.getElementById( "s" );
        var i = document.getElementById( "i1" );
        alert( sl_impl_v( s, i.value ) );
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
    <INPUT TYPE="Button" NAME="BTN" VALUE="get implode value" onClick="set()">separador<INPUT TYPE="input" id="i1"><p>


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
