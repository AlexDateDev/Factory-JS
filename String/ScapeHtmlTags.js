// ----------------------------------------------------------------------------
// ScapeHtmlTags
//
//
//
// Date : 03/03/2013
// By   : Alex
// ----------------------------------------------------------------------------

STRING =
{
/**
        *        Funcion que sustitule los tags html (<>) por sus valores &
        *
    *        @param {String}
    *        @return        {String}
    *        @version        1.0        -  04-01-2008
        */
        get_scape_html_tags:function(s)
    {
            return s.replace(/>/g, "&gt;").replace(/</g, "&lt;");
        },
}

