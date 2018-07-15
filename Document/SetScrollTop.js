// ----------------------------------------------------------------------------
// T�tulo:        SetScrollTop
//
// Fecha:        03/03/2008
// Autor:        Alex Sol�
// Versi�n:        1.0.0
// Dependencias:
// ----------------------------------------------------------------------------


/**
*    Devuelve el offset desde arriba si hay scroll
*    NOTA: al cargar la p�gina, siempre es 0
*/
function document_scroll_top( doc )
{
    if( window.pageYOffset != null )
    {
        return window.pageYOffset;    // NS
    };
    if( doc.body.scrollTop != null )
    {
        return doc.body.scrollTop; // IE
    };
    return null;
};

