// ----------------------------------------------------------------------------
// RemoveAllHtmltags
//
//
//
// Date : 03/03/2013
// By   : Alex
// ----------------------------------------------------------------------------

Martes 16 Agosto 2011
STRING =
{
/**
    *        Elimina todos los atributos html, solo deja el texto
    *
    *        @param        {String}
    *        @return        {String}
    *        @version        1.0        -  04-01-2008
    *
    */
    remove_all_html_tags:function( s )
    {
            return s.replace( /(\< *[^\>]*\>|\&nbsp\;)/g, "");
        },
}

STRING=
{
    get_strip_tags: function(s)
    {
        return s.replace(/<\/?[^>]+>/gi, '');
    }
};


