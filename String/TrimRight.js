// ----------------------------------------------------------------------------
// TrimRight
//
//
//
// Date : 03/03/2013
// By   : Alex
// ----------------------------------------------------------------------------

STRING =
{

/**
    *        Elimina los espacions del final
    *
    *        @param        {String}
    *        @param        {String}
    *        @version        1.0        -  04-01-2008
    */
        get_trim_right : function(s)
    {
            return s.replace(/\s+$/g,"");
        },
}
