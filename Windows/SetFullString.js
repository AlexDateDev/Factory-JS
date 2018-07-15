// ----------------------------------------------------------------------------
// SetFullString
//
//
//
// Date : 03/03/2013
// By   : Alex
// ----------------------------------------------------------------------------


WINDOW=
{
/**
    *        Modifica la ventana para que ocupe toda la pantalla
    *        @param {Window}         window a redimensionar
    */
    set_full_screen:function(w)
    {
        w.moveTo(0,0);
        w.resizeTo(screen.availWidth,screen.availHeight);
    },
}

