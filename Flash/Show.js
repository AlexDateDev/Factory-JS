// ----------------------------------------------------------------------------
// Título:        Show
//
// Fecha:        03/02/2011
// Autor:        Alex Solé
// Versión:        1.0.0
// Dependencias:
// ----------------------------------------------------------------------------



function FlashWrite(url,width,height)
{
    document.write('<OBJECT classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000"');
    document.write('  codebase="http://download.macromedia.com/pub/shockwave/cabs/flash/swflash.cab#version=5,0,0,0" ');
    document.write('  WIDTH=' + width + ' HEIGHT=' + height + '>');
    document.write(' <PARAM NAME=movie VALUE="' + url + '"> <PARAM NAME=quality VALUE=high> <PARAM NAME=bgcolor VALUE=#FFFFFF>  ');
    document.write(' <EMBED src="' + url + '" quality=high bgcolor=#FFFFFF  ');
    document.write(' swLiveConnect=FALSE WIDTH=' + width + ' HEIGHT=' + height);
    document.write(' TYPE="application/x-shockwave-flash" PLUGINSPAGE="http:        //www.macromedia.com/shockwave/download/index.cgi?P1_Prod_Version=ShockwaveFlash">');
    document.write(' </EMBED></OBJECT>');
}

