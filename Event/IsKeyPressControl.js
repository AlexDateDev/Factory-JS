// ----------------------------------------------------------------------------
// Título:        IsKeyPressControl
//
// Fecha:        03/02/2011
// Autor:        Alex Solé
// Versión:        1.0.0
// Dependencias:
// ----------------------------------------------------------------------------


var EVENT = {
    /*
    *        Detecta si se ha presionado una tecla de control
    *        @param: event
    *        @param:        KEY (CONTROL)
    *        @return: bool
    */
    IsKeyPressControl:function(evt,keyControl)
    {
            var e=this.std_evt(evt);
            if(e.modifiers)
            {
                    switch(keyControl)
                    {
                            case KEY.ALT:
                                    return e.modifiers & Event.ALT_MASK;
                            case KEY.CONTROL:
                                    return e.modifiers & Event.CONTROL_MASK;
                            case SHIFT.ALT:
                                    return e.modifiers & Event.SHIFT_MASK;
                    }
            }
            else
            {
                    switch(keyControl)
                    {
                            case KEY.ALT:
                                    return e.altKey;
                            case KEY.CONTROL:
                                    return e.ctrlKey;
                            case SHIFT.ALT:
                                    return e.shiftKey;
                    }
            }
            return false;
    }
}

var KEY={
        RETURN:13,
        ALT:'ALT',
        CONTROL:'CNT',
        SHIFT:'SHF'
};
