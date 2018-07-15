// ----------------------------------------------------------------------------
// Título:        LoadScript
//
// Fecha:        03/03/2008
// Autor:        Alex Solé
// Versión:        1.0.0
// Dependencias:
// ----------------------------------------------------------------------------

/*
*    Carga una libreria en un documento de forma dinámica
*    equivale a <script src="\demo.js"></script>"
*/

var Document={
    LoadScript:function(doc, url){
        var s = doc.createElement('script');
        var h = doc.getElementsByTagName('head');
        if (s && h.length){
            s.src = url;
            h[0].appendChild(s);
        }
    }
}

/*
*    Carga una libreria en un documento de forma dinámica
*    equivale a <script src="\demo.js"></script>"
*/

document.prototype.load_script=function(url)
{
    var s = this.createElement('script');
    var h = this.getElementsByTagName('head');
    if (s && h.length)
    {
        s.src = url;
        h[0].appendChild(s);
    }
}
