// ----------------------------------------------------------------------------
// Título:        ForceSingleFrame
//
// Fecha:        03/02/2011
// Autor:        Alex Solé
// Versión:        1.0.0
// Dependencias:
// ----------------------------------------------------------------------------


var WINDOW=
{
/**
    *        Formzamos a que una pagiona se ponga en un frame
    */
    force_frames:function(sUrlPage)
    {
                if( top.location.href == window.location.href)
                {
                top.location.href = sUrlPage;
                }
    },
};

