// ----------------------------------------------------------------------------
// Window Cromless
//
//
//
// Date : 03/03/2013
// By   : Alex
// ----------------------------------------------------------------------------


/**
* Autor: Alex Sole
* TMsgList( )
*
* Ventana Cromeless donde se muestra una pagina en su interior
* V. 1.0 01/02/2002
*/

function TWindowCromless( theURL )
{
// Asignamos la url a mostrar en la ventana
if( arguments.length == 0 )
this.Url = theURL;
else
this.Url = null;

this.WindowName = null; // Nombre interno para la ventana
this.Width = null; // Ancho
this.Hight = null; // Alto
this.XPos = null; // Posicion X => null si centrado
this.YPos = null; // Posicion Y => null si centrado
this.WindowTitle = null; // Titulo visible de la ventana
this.ColorBorder = '#CCCCCC'; // Color del borde de la ventana
this.ColorBorderSelected = '#999999'; // Color del borde con la ventana seleccioanda
this.ColorBgTitle = '#CCCCCC'; // Color del fondo del titulo
this.ColorBgTitleSelected = '#999999'; // Color del fondo del titulo cuando la ventana esta seleccionada
this.Center = true; // true => Ventana centrada em el escritiro, false => No centrada
this.FontFamily = 'Arial, Helvetica, sans-serif'; // String con los nombre de las fuentes para el titulo
this.FontSize = '1'; // Tamano de la fuente del titulo
this.FontColor = '#000000'; // Color de la fuente del titulo
this.ImgClose = "close_a.gif"; // Imagen icono de cerrar (arriba derecha)
this.ImgCloseClicked = "close_d.gif"; // Imagen icono cerrar clicada (arriba derecha)
this.ImgCloseOver = "close_o.gif"; // Imagne de icono de cerrar cuando el mouse esta encima
this.ImgNone = "none.gif"; // Cuando no se muestra ninguna imagen
this.ImgClock = "clock.gif"; // Imagen para el icono del relof (izquierda del icono cerrar)

this.Show = openwin;
}

// ===================================================
// function openwin( )
// ===================================================
// Monta toda la ventana y la muestra
// ===================================================

function openwin( )
{
theURL = this.Url;
wname = this.WindowName;
W = this.Width;
H = this.Height;
posx = this.XPos;
posy = this.YPos;
windowTIT = this.WindowTitle;
windowREALtit = this.WindowTitle;
windowBORDERCOLOR = this.ColorBorder;
windowBORDERCOLORsel = this.ColorBorderSelected;
windowTITBGCOLOR = this.ColorBgTitle;
windowTITBGCOLORsel = this.ColorBgTitleSelected;
bCenter = this.Center;
sFontFamily = this.FontFamily;
sFontSize = this.FontSize;
sFontColor = this.FontColor;

var windowCERRARa = this.ImgClose;
var windowCERRARd = this.ImgCloseClicked;
var windowCERRARo = this.ImgCloseOver;
var windowNONEgrf = this.ImgNone;
var windowCLOCK = this.ImgClock;

var windowW = W;
var windowH = H;
var windowX = -1;
var windowY = -1;

if(bCenter)
{
windowX = Math.ceil( (window.screen.width - windowW) / 2 );
windowY = Math.ceil( (window.screen.height - windowH) / 2 );
}
else
{
windowX = posx;
windowY = posy;
}

if (navigator.appName == "Microsoft Internet Explorer" && parseInt(navigator.appVersion)>=4) isie=true
else isie=false

if (isie) { H=H+20+2; W=W+2; }

s = ",width="+W+",height="+H;
var nl = '\n';
if (isie && (navigator.userAgent.toLowerCase().indexOf("win")!=-1) )
{
var dowin = theURL != "" ? true : false;

var chromeTIThtml = nl +
'<html>' + nl +
' <head>' + nl +
' <title>&nbsp;CHROMELESS WINDOWS / TITLEBAR</title>' + nl +
' <style type="text/css">'+ nl +
' #mywindowTITLE { ' + nl +
' position: absolute;' + nl +
' left: 0px;' + nl +
' top: 0px;' + nl +
' width: 100%;' + nl +
' height: 22px;' + nl +
' z-index: 1;' + nl +
' background-color: ' + windowTITBGCOLOR + ';' +nl +
' clip:rect(0,100%,22,0);' + nl +
' }' + nl +
' #mywindow {' + nl +
' position: absolute;' + nl +
' left: 0px;' + nl +
' top: 0px;' + nl +
' width: 100%;' + nl +
' height: 22px;' +nl +
' z-index: 2;' + nl +
' clip:rect(0,100%,22,0);' +nl +
' }' + nl +
' #mywindowCLOSE {' + nl +
' position: absolute;' + nl +
' left: -22px;' + nl +
' top: -22px;' + nl +
' width: 11px;' + nl +
' height: 11px;' + nl +
' z-index: 3;' + nl +
' clip:rect(0,11,11,0);' + nl +
' }' + nl +
' #mywindowCLOCK {' + nl +
' position: absolute;' + nl +
' left: -22px;' + nl +
' top: -22px;' + nl +
' width: 11px;' + nl +
' height: 11px;' + nl +
' z-index: 3;' + nl +
' clip:rect(0,11,11,0);' + nl +
' }' + nl +
' </style>' + nl +
' <script language="javascript">'+ nl;

if ( theURL != "" )
{
chromeTIThtml = chromeTIThtml +
' theURL = "'+theURL +'"'+ '\n'+
' windowCERRARa = "'+windowCERRARa +'"'+ '\n'+
' windowCERRARd = "'+windowCERRARd +'"'+ '\n'+
' windowCERRARo = "'+windowCERRARo +'"'+ '\n'+
' windowCLOCK = "'+windowCLOCK +'"'+ '\n'+
' windowBORDERCOLOR = "'+windowBORDERCOLOR +'"'+ '\n'+
' windowBORDERCOLORsel= "'+windowBORDERCOLORsel+'"'+ '\n'+
' windowTITBGCOLOR = "'+windowTITBGCOLOR +'"'+ '\n'+
' windowTITBGCOLORsel = "'+windowTITBGCOLORsel +'"'+ '\n';

}
else
{
chromeTIThtml = chromeTIThtml +
' theURL="about:blank"'+ '\n'+
' windowCERRARa = "img/close_a.gif"'+ '\n'+
' windowCERRARd = "img/close_d.gif"'+ '\n'+
' windowCERRARo = "img/close_o.gif"'+ '\n'+
' windowCLOCK = "img/clock.gif"'+ '\n'+
' windowTIT = "<font face=verdana size=1>&nbsp;window title</font>"'+ '\n'+
' windowBORDERCOLOR = "#000000"'+ '\n'+
' windowBORDERCOLORsel = "#FF8A00"'+ '\n'+
' windowTITBGCOLOR = "#d7dcd9"'+ '\n'+
' windowTITBGCOLORsel = "#ffffff"'+ '\n'
}

chromeTIThtml = chromeTIThtml +
'var windowCERRARImg_a = new Image(); windowCERRARImg_a.src = windowCERRARa;'+ '\n'+
'var windowCERRARImg_d = new Image(); windowCERRARImg_d.src = windowCERRARd;'+ '\n'+
'var windowCERRARImg_o = new Image(); windowCERRARImg_o.src = windowCERRARo;'+ '\n'+
'var windowCLOCKImg = new Image(); windowCLOCKImg.src = windowCLOCK;'+ '\n'+
' '+ '\n'+
'function mouseSTATUS() '+ '\n'+
' {'+ '\n'+
' this.x = null;'+ '\n'+
' this.y = null;'+ '\n'+
' this.bt = "up";'+ '\n'+
' this.oldx = null;'+ '\n'+
' this.oldy = null;'+ '\n'+
' this.dx = null;'+ '\n'+
' this.dy = null;'+ '\n'+
' this.screeny = null;'+ '\n'+
' this.screenx = null;'+ '\n'+
' '+ '\n'+
' this.element = null;'+ '\n'+
' this.event = null;'+ '\n'+
' }'+ '\n'+
' '+ '\n'+
'var mouse = new mouseSTATUS();'+ '\n'+
' '+ '\n'+
'function actualizateMouseSTATUS(e) '+ '\n'+
' {'+ '\n'+
' if (!e) var e = event'+ '\n'+
' if ( (e.type=="mousedown" || e.type=="mouseup") && e.button!=1) return true'+ '\n'+
' '+ '\n'+
' var x=e.x+document.body.scrollLeft'+ '\n'+
' var y=e.y+document.body.scrollTop'+ '\n'+
' '+ '\n'+
' mouse.x = x;'+ '\n'+
' mouse.y = y;'+ '\n'+
' '+ '\n'+
' if ( e.type == "mousedown" ) mouse.bt = "down";'+ '\n'+
' else if ( e.type == "mouseup" ) mouse.bt = "up"; '+ '\n'+
' '+ '\n'+
' if (window.event) '+ '\n'+
' {'+ '\n'+
' mouse.screenx=window.event.screenX;'+ '\n'+
' mouse.screeny=window.event.screenY;'+ '\n'+
' } '+ '\n'+
' else'+ '\n'+
' { '+ '\n'+
' mouse.screenx=-1;'+ '\n'+
' mouse.screeny=-1;'+ '\n'+
' }'+ '\n'+
' '+ '\n'+
' }'+ '\n'+
' '+ '\n'+
'function initMouseEvents() '+ '\n'+
' { '+ '\n'+
' document.onmousedown = actualizateMouseSTATUS'+ '\n'+
' document.onmousemove = actualizateMouseSTATUS'+ '\n'+
' document.onmouseup = actualizateMouseSTATUS'+ '\n'+
' document.onselectstart = selectstart'+ '\n'+
' document.ondragstart = new Function("actualizateMouseSTATUS(event); return false;")'+ '\n'+
' }'+ '\n'+
' '+ '\n'+
'function selectstart()'+ '\n'+
' {'+ '\n'+
' if ( event.srcElement.tagName != "INPUT" && event.srcElement.tagName != "TEXTAREA") { return false; }'+ '\n'+
' else { mouse.bt="up"; return true; }'+ '\n'+
' }'+ '\n'+
' '+ '\n'+
'initMouseEvents()'+ '\n'+
' '+ '\n'+
'var mywindowbt ="up";'+ '\n'+
'var wincloseSTATUS="up";'+ '\n'+
' '+ '\n'+
'var ofx=0;'+ '\n'+
'var ofy=0;'+ '\n'+
'var opx=0;'+ '\n'+
'var opy=0;'+ '\n'+
'var px=0;'+ '\n'+
'var py=0;'+ '\n'+
' '+ '\n'+
'var wcpx1=-1, wcpy1=-1;'+ '\n'+
'var wcpx2=-1, wcpy2=-1;'+ '\n'+
' '+ '\n'+
'var wclosechanged = false;'+ '\n'+
' '+ '\n'+
'function initToMoveWin()'+ '\n'+
' { '+ '\n'+
' if (wincloseSTATUS=="up" && ( mywindowbt=="up" || mywindowbt=="over") )'+ '\n'+
' { '+ '\n'+
' '+ '\n'+
' if ( parent.mainloaded ) document.all["mywindowCLOCK"].style.visibility = "hidden"; '+ '\n'+
' '+ '\n'+
' document.all["mywindowCLOCK"].style.pixelLeft=document.body.clientWidth-36 '+ '\n'+
' document.all["mywindowCLOCK"].style.pixelTop =4'+ '\n'+
' '+ '\n'+
' wcpx1 = document.all["mywindowCLOSE"].style.pixelLeft=document.body.clientWidth-18'+ '\n'+
' wcpy1 = document.all["mywindowCLOSE"].style.pixelTop =4'+ '\n'+
' wcpx2 = wcpx1 + 11 - 1'+ '\n'+
' wcpy2 = wcpy1 + 11 - 1'+ '\n'+
' if ( mouse.x >= wcpx1 && mouse.x <= wcpx2 && mouse.y >= wcpy1 && mouse.y <= wcpy2)'+ '\n'+
' {'+ '\n'+
' if (wclosechanged == false)'+ '\n'+
' {'+ '\n'+
' document.all["mywindowCLOSE"].document.images["closewin"].src=windowCERRARImg_o.src'+ '\n'+
' wclosechanged = true'+ '\n'+
' }'+ '\n'+
' '+ '\n'+
' }'+ '\n'+
' else if (wclosechanged == true)'+ '\n'+
' {'+ '\n'+
' document.all["mywindowCLOSE"].document.images["closewin"].src=windowCERRARImg_d.src'+ '\n'+
' wclosechanged = false'+ '\n'+
' } '+ '\n'+
' }'+ '\n'+
' '+ '\n'+
' if ( mouse.y <= 22 && mouse.y >= 1 && mywindowbt == "up" && mouse.bt =="up" ) { mywindowbt = "over" } '+ '\n'+
' else if ( ( mouse.y > 22 || mouse.y < 1 ) && mywindowbt == "over" && mouse.bt =="up" ) { mywindowbt = "up" } '+ '\n'+
' else if ( mouse.y <= 22 && mouse.y >= 1 && mywindowbt == "over" && mouse.bt == "down" )'+ '\n'+
' { '+ '\n'+
' self.window.focus();'+ '\n'+
' '+ '\n'+
' if ( mouse.x >= wcpx1 && mouse.x <= wcpx2 && mouse.y >= wcpy1 && mouse.y <= wcpy2 )'+ '\n'+
' { '+ '\n'+
' wincloseSTATUS="down"'+ '\n'+
' document.all["mywindowCLOSE"].document.images["closewin"].src=windowCERRARImg_a.src '+ '\n'+
' }'+ '\n'+
' else'+ '\n'+
' { '+ '\n'+
' document.all["mywindowTITLE"].style.backgroundColor = windowTITBGCOLORsel'+ '\n'+
' document.body.style.borderColor = windowBORDERCOLORsel '+ '\n'+
' parent.chromewinb.document.bgColor = windowBORDERCOLORsel '+ '\n'+
' parent.chromewinl.document.bgColor = windowBORDERCOLORsel '+ '\n'+
' parent.chromewinr.document.bgColor = windowBORDERCOLORsel '+ '\n'+
' ofx = mouse.x;'+ '\n'+
' ofy = mouse.y;'+ '\n'+
' opx = mouse.x;'+ '\n'+
' opy = mouse.y;'+ '\n'+
' }'+ '\n'+
' mywindowbt="down";'+ '\n'+
' } '+ '\n'+
' else if ( mouse.bt =="up" && mywindowbt == "down" )'+ '\n'+
' {'+ '\n'+
' mywindowbt="up";'+ '\n'+
' ofx=0;'+ '\n'+
' ofy=0;'+ '\n'+
' opx=0;'+ '\n'+
' opy=0;'+ '\n'+
' '+ '\n'+
' if ( mouse.x >= wcpx1 && mouse.x <= wcpx2 && mouse.y >= wcpy1 && mouse.y <= wcpy2 && wincloseSTATUS=="down" ) { top.window.close() }'+ '\n'+
''+ '\n'+
' wincloseSTATUS="up"'+ '\n'+
' '+ '\n'+
' if ( document.all["mywindowTITLE"] )'+ '\n'+
' { '+ '\n'+
' document.all["mywindowTITLE"].style.backgroundColor = windowTITBGCOLOR'+ '\n'+
' document.body.style.borderColor = windowBORDERCOLOR '+ '\n'+
' parent.chromewinb.document.bgColor= windowBORDERCOLOR '+ '\n'+
' parent.chromewinl.document.bgColor= windowBORDERCOLOR '+ '\n'+
' parent.chromewinr.document.bgColor= windowBORDERCOLOR '+ '\n'+
' } '+ '\n'+
' '+ '\n'+
' }'+ '\n'+
' else if ( mywindowbt == "down" && wincloseSTATUS == "up")'+ '\n'+
' { '+ '\n'+
' var m_scrx = mouse.screenx;'+ '\n'+
' var m_scry = mouse.screeny;'+ '\n'+
' opx = px + ofx - m_scrx;'+ '\n'+
' opy = py + ofy - m_scry;'+ '\n'+
' px = m_scrx - ofx;'+ '\n'+
' py = m_scry - ofy;'+ '\n'+
' top.window.moveTo(px , py);'+ '\n'+
' }'+ '\n'+
' setTimeout("initToMoveWin()",50); '+ '\n'+
' }'+ '\n'+
'</script>'+ '\n'+
'</head>'+ '\n'+
'<body TOPMARGIN=0 LEFTMARGIN=0 MARGINWIDTH=0 MARGINHEIGHT=0 scroll=no style="border: 1px solid '+ windowBORDERCOLOR +'; overflow: hidden; margin: 0pt;" bgcolor='+windowTITBGCOLOR+'>'+ '\n'+
'<div id=mywindow><img src="'+windowNONEgrf+'" width=100% height=20></div>'+ '\n'+
'<div id=mywindowTITLE>'+ '<table width=100% height=20 border=0 cellpadding=0 cellspacing=0><tr><td valign=middle align=left><font face="' + sFontFamily + '" size=' + sFontSize + ' color="' + sFontColor + '">&nbsp;?&nbsp; ' + windowTIT + '</font></td></tr></table>' +'</div>'+ '\n'+
'<div id=mywindowCLOSE><img name=closewin src="'+ windowCERRARd +'" border=0 width=11 height=11></div>'+ '\n'+
'<div id=mywindowCLOCK><img name=clockwin src="'+ windowCLOCK +'" border=0 width=11 height=11></div>'+ '\n'+
'</body>'+ '\n'+
'<script>initToMoveWin();</script>'+ '\n'+
'</html>'+ '\n'

var chromeFRMhtml = '' +
'<HTML>'+ '\n'+
'<HEAD>'+ '\n'+
'<TITLE>' + '&nbsp; ' + windowREALtit + '</TITLE>'+ '\n'+
'</HEAD>'+ '\n'+
'<script>'+ '\n'+
'mainloaded = false'+ '\n'+
'function generatetitle()'+ '\n'+
' {'+ '\n'+
' if( window.frames["chromewint"] && window.frames["chromewinl"] && window.frames["chromewinb"] && window.frames["chromewinr"] )'+ '\n'+
' {'+ '\n'+
' chromewint.document.open();'+ '\n'+
' chromewint.document.write( "'+ quitasaltolinea(chromeTIThtml) +'" );'+ '\n'+
' chromewint.document.close();'+ '\n'+
' chromewinl.document.bgColor="'+ windowBORDERCOLOR +'"'+ '\n'+
' chromewinb.document.bgColor="'+ windowBORDERCOLOR +'"'+ '\n'+
' chromewinr.document.bgColor="'+ windowBORDERCOLOR +'"'+ '\n'+
' }'+ '\n'+
' else'+ '\n'+
' {'+ '\n'+
' setTimeout("generatetitle()",200)'+ '\n'+
' }'+ '\n'+
' }'+ '\n'+
'generatetitle()'+ '\n'+
'</script>'+ '\n'+
'<frameset border=0 framespacing=0 frameborder=0 rows="22,100%,1" onload="mainloaded=true" onreadystatechange="generatetitle()">'+ '\n'+
' <frame name=chromewint src="about:blank" scrolling=no noresize>'+ '\n'+
' <frameset border=0 framespacing=0 frameborder=0 cols="1,100%,1">'+ '\n'+
' <frame name=chromewinl src="about:blank" scrolling=no noresize>'+ '\n'+
' <frame name=main src="'+theURL+'">'+ '\n'+
' <frame name=chromewinr src="about:blank" scrolling=no noresize>'+ '\n'+
' </frameset>'+ '\n'+
' <frame name=chromewinb src="about:blank" scrolling=no noresize>'+ '\n'+
'</frameset>'+ '\n'+
'</HTML>'

splashWin = window.open( "" , wname, "fullscreen=1,toolbar=0,location=0,directories=0,status=0,menubar=0,scrollbars=0,resizable=0"+s);
splashWin.resizeTo( Math.ceil( W ) , Math.ceil( H ) );
splashWin.moveTo ( Math.ceil( windowX ) , Math.ceil( windowY ) );

splashWin.document.open();
splashWin.document.write( chromeFRMhtml );
splashWin.document.close();

}
else
{
var splashWin = window.open(theURL, wname, "toolbar=0,location=0,directories=0,status=0,menubar=0,scrollbars=0,resizable=1"+s, true);
}

splashWin.focus();
}

function quitasaltolinea(txt)
{

var salida = txt.toString()
var re = /\\/g; var salida = salida.replace(re, "\\\\");
var re = /\//g; var salida = salida.replace(re, "\\\/");
var re = /\"/g; var salida = salida.replace(re, "\\\"");
var re = /\'/g; var salida = salida.replace(re, "\\\'");
var re = /\n/g; var salida = salida.replace(re, "\\n");
var re = / /g; var salida = salida.replace(re, "");
var re = /\t/g; var salida = salida.replace(re, "");
var re = /\r/g; var salida = salida.replace(re, "");

return salida
}

