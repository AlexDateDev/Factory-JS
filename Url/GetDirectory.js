// ----------------------------------------------------------------------------
// GetDirectory
//
//
//
// Date : 03/03/2013
// By   : Alex
// ----------------------------------------------------------------------------

URL=
{/**
    *        Retorna el directori de la url
    *
    *        @param        {string} url
    *        @return        {string} path
    */
    get_dir:function(sUrl)
    {
            return unescape(sUrl.substring(0,(sUrl.lastIndexOf("/")) + 1))
        }
};

