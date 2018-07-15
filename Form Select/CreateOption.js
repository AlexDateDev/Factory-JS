// ----------------------------------------------------------------------------
// CreateOption
//
//
//
// Date : 03/03/2013
// By   : Alex
// ----------------------------------------------------------------------------

Domingo 01 Julio 2012
/**
* ACselectCreateOption( doc, fld, strText, strValue )
* Crea un OPTION en un SELECT de forma dinámica.
* PARAMETROS:
* IN: doc, documento donde esta el campo SELECT
* IN: fld, campo SELECT
* IN: strText, valor del TEXT.
* IN: strValue, valor del VALUE
***
oSelect.add(oNewOption, 0);
The second parameter may take the following values:
0: Add the new option at the top of the list.
1: Add the new option at the end of the list.
n: Limit the number of new options to n.
Clicking the
***/

function select_create_option( doc, fld, strText, strValue )
    {
    var oOption = doc.createElement( "OPTION" );
    oOption.text = strText;
    oOption.value = strValue;
    fld.add(oOption);
    }

