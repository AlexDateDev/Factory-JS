// ----------------------------------------------------------------------------
// DisableBackNavigation
//
//
//
// Date : 03/03/2013
// By   : Alex
// ----------------------------------------------------------------------------

WINDOW=
{
/**
    *        Desavilita el boton back de navegacion
    */
        disable_back_navigation:function()
    {
            this.history.forward(1);
        }
}

