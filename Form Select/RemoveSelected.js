// ----------------------------------------------------------------------------
// RemoveSelected
//
//
//
// Date : 03/03/2013
// By   : Alex
// ----------------------------------------------------------------------------

// -- Eliminar el texto y valor seleccionado
function sl_r_s( domObj )
    {
    var pos = domObj.selectedIndex;
    if( pos == -1 )
        {
        return;
        }
    var total = domObj.length;
    for( var i=0; i < total; i++ )
        {
        if( i >= pos && i < (total-1) )
            {
            domObj.options[ i ].text = domObj.options[ i+1].text;
            domObj.options[ i ].value = domObj.options[ i+1 ].value
            }
        }
    domObj.length = total -1 ;
    }

<HTML>
<HEAD>
    <TITLE>Titulo</TITLE>
    <!-- <LINK REL="STYLESHEET" HREF=".css" TYPE="text/css">-->

    <SCRIPT SRC="sl_r_s.js"></SCRIPT>
    <SCRIPT LANGUAGE="JAVASCRIPT">
    function set( )
    {
        var s = document.getElementById( "s" );
        var i = document.getElementById( "i1" );
        sl_r_s( s );
    }
    </SCRIPT>
</HEAD>
<BODY>
    <FORM NAME="datos">
    <INPUT TYPE="Button" NAME="BTN" VALUE="remove selected" onClick="set()"><INPUT TYPE="input" id="i1"><p>

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
