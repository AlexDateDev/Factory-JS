// ----------------------------------------------------------------------------
// Título:        PreventFrames
//
// Fecha:        03/02/2011
// Autor:        Alex Solé
// Versión:        1.0.0
// Dependencias:
// ----------------------------------------------------------------------------


var WINDOW=
{
/**
    *        Previene que la ventana se ponga dentro de un frame
    */
    prevent_frames:function()
    {
                if (top != self)
        {
                top.location = location
                }
    },

};

