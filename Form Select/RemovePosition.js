// ----------------------------------------------------------------------------
// RemovePosition
//
//
//
// Date : 03/03/2013
// By   : Alex
// ----------------------------------------------------------------------------

// -- Eliminar el texto y valor pasado como parametro
function sl_r_p( domObj, posToDel )
{
    var pos=parseInt(posToDel,10);
    if(  pos>= domObj.length || pos<0 || isNaN(pos))
        return null;

    var total = domObj.length;
    for( var i=0; i < total; i++ )
        {
        if( i >= pos && i < (total-1) )
            {
            domObj.options[ i ].text = domObj.options[ i +1].text;
            domObj.options[ i ].value = domObj.options[ i+1 ].value
            };
        };
    domObj.length = total -1 ;
};

<HTML>
<HEAD>
    <TITLE>Titulo</TITLE>
    <!-- <LINK REL="STYLESHEET" HREF=".css" TYPE="text/css">-->

    <SCRIPT SRC="sl_r_p.js"></SCRIPT>
    <SCRIPT LANGUAGE="JAVASCRIPT">
    function set( )
    {
        var s = document.getElementById( "s" );
        var i = document.getElementById( "i1" );
        sl_r_p( s, i.value );
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
    <INPUT TYPE="Button" NAME="BTN" VALUE="remove position" onClick="set()"><INPUT TYPE="input" id="i1"><p>


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

