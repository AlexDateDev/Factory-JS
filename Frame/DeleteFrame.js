// ----------------------------------------------------------------------------
// T�tulo:        DeleteFrame
//
// Fecha:        03/02/2011
// Autor:        Alex Sol�
// Versi�n:        1.0.0
// Dependencias:
// ----------------------------------------------------------------------------


function quitarFrame()
{
    if (self.parent.frames.length != 0)
         self.parent.location=document.location.href;
}

