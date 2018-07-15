// ----------------------------------------------------------------------------
// Título:        GetOffsetScrollLeft
//
// Fecha:        03/03/2008
// Autor:        Alex Solé
// Versión:        1.0.0
// Dependencias:
// ----------------------------------------------------------------------------

/**
*    Devuelve el offset de la izquierda si hay scroll
*    NOTA: al cargar la página, siempre es 0
*/

function document_scroll_left( doc )
{
    if( window.pageXOffset != null )
        return window.pageXOffset; // NS
    if( doc.body.scrollLeft != null )
        return doc.body.scrollLeft; //IE
    return null;
};


