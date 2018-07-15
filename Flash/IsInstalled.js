// ----------------------------------------------------------------------------
// Título:        IsInstalled
//
// Fecha:        03/02/2011
// Autor:        Alex Solé
// Versión:        1.0.0
// Dependencias:
// ----------------------------------------------------------------------------


var Validate={
    IsFlashInstalled:function(){
        result = false;
        if (navigator.mimeTypes && navigator.mimeTypes["application/x-shockwave-flash"])
        {
            result = navigator.mimeTypes["application/x-shockwave-flash"].enabledPlugin;
        }
        else if (document.all && (navigator.appVersion.indexOf("Mac")==-1))
        {
            // IE Windows only -- check for ActiveX control, have to hide code in eval from Netscape (doesn't like try)
            eval ('try {var xObj = new ActiveXObject("ShockwaveFlash.ShockwaveFlash");if (xObj)result = true; xObj = null;} catch (e){}');
        }
        return result;
    }
}

