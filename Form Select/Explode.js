// ----------------------------------------------------------------------------
// Explode
//
//
//
// Date : 03/03/2013
// By   : Alex
// ----------------------------------------------------------------------------

// -- Partiendo de un string de texto y uno de valores, separados por un separador
// -- hace un explode hacia la lista
function sl_expl( domObj, text, value, sep )
{
    if( arguments.length < 4  )
        sep = ";";

    var arrText = new Array;
    arrText = text.split( sep );
    var arrVal = new Array
    arrVal = value.split( sep );
    var n = arrText.length;
    domObj.length = n;

    for( var i=n-1; i>=0 ; i-- )
        {
        domObj.options[ i ].text = arrText[ i ];
        domObj.options[ i ].value = arrVal[ i ];
        };
    };

<HTML>
<HEAD>
    <TITLE>Titulo</TITLE>
    <!-- <LINK REL="STYLESHEET" HREF=".css" TYPE="text/css">-->

    <SCRIPT SRC="sl_expl.js"></SCRIPT>
    <SCRIPT LANGUAGE="JAVASCRIPT">
    function set( )
    {
        var s = document.getElementById( "s" );
        var t = document.getElementById( "i1" );
        var v = document.getElementById( "i2" );
        sl_expl( s, t.value, v.value );
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
    <INPUT TYPE="Button" NAME="BTN" VALUE="set explode text" onClick="set()"><INPUT value="A1; A2; A3; A4" TYPE="input" id="i1">
    <INPUT TYPE="Button" NAME="BTN" VALUE="set explode text" onClick="set()"><INPUT value="B1; B2; B3; C4" TYPE="input" id="i2">
Cuidado blancos

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
