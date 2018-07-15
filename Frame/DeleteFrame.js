// ----------------------------------------------------------------------------
// Título:        DeleteFrame
//
// Fecha:        03/02/2011
// Autor:        Alex Solé
// Versión:        1.0.0
// Dependencias:
// ----------------------------------------------------------------------------


function quitarFrame()
{
    if (self.parent.frames.length != 0)
         self.parent.location=document.location.href;
}

