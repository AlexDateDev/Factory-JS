// ----------------------------------------------------------------------------
// ScapeXmlTags
//
//
//
// Date : 03/03/2013
// By   : Alex
// ----------------------------------------------------------------------------


STRING =
{
 /**
    *        Funcion que sustituye los tags xml (<>"") por sus valores &
    *
    *        @return        {String}
    *        @version        1.0        -  04-01-2008
    */
        get_scape_xml_tags:function(s)
    {
            var t = s.replace(/&/g, "&amp;");
        t = t.replace(/>/g, "&gt;");
        t = t.replace(/</g, "&lt;");
        t = t.replace(/"/g, "&quot;");
        t = t.replace(/'/g, "&apos;");
        return t;
        },
}

