// ----------------------------------------------------------------------------
// CopyPasteClipboard
//
//
//
// Date : 03/03/2013
// By   : Alex
// ----------------------------------------------------------------------------

Viernes 12 Agosto 2011
<HTML>
<HEAD>
<SCRIPT>
var bResult;
// Select the text to be cut. Trailing spaces in a text
// selection in cut events cause the Cut shortcut menu item to
// remain disabled.
function fnLoad() {
    var r = document.body.createTextRange();
    r.findText(oSource.innerText);
    r.select();
}
// Enable the Cut shortcut menu item over the DIV. Cut is disabled by default.
// Once Cut is enabled, Internet Explorer automatically copies the data to the
// clipboard and removes the selected text from the document.
function fnBeforeCut() {
    event.returnValue = false;
}
//Assign data in text format to the window.clipboardData object.
//Display the result (Boolean) from the setData method in the input box below.
function fnCut(){
event.returnValue = false;
bResult = window.clipboardData.setData("Text",oSource.innerText);
oSource.innerText = "";
tText.innerText += bResult;
}
// Enable the Paste shortcut menu item over the DIV. Paste is disabled by default.
function fnBeforePaste() {
    event.returnValue = false;
}
// Cancel the returnValue in onpaste for the text input, which
// has a default behavior.
function fnPaste() {
    event.returnValue = false;
oTarget.innerText = window.clipboardData.getData("Text");
}
</SCRIPT>
</HEAD>

<BODY onload="fnLoad()" TOPMARGIN=0 LEFTMARGIN=0 BGPROPERTIES="fixed" BGCOLOR="#FFFFFF"
LINK="#000000" VLINK="#808080" ALINK="#000000">

<DIV CLASS="clsSource" ID="oSource" onbeforecut="fnBeforeCut()" oncut="fnCut()">
Select and cut this text
</DIV>
<DIV CLASS="clsTarget" ID="oTarget" onbeforepaste="fnBeforePaste()" onpaste="fnPaste()">
Paste the Text Here
</DIV><BR>

<SPAN CLASS="clsData">setData Result: </SPAN>
<INPUT CLASS="clsText" ID="tText" TYPE="text" READONLY VALUE="" SIZE="6" TABINDEX="-1">

</BODY>
</HTML>
