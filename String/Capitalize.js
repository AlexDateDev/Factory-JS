// ----------------------------------------------------------------------------
// Título:        Capitalize
//
// Fecha:        03/02/2011
// Autor:        Alex Solé
// Versión:        1.0.0
// Dependencias:
// ----------------------------------------------------------------------------


var STR =
{
/**
    *   Devuelve el string capitalizado. Todo en minusculas menos la primera letra de cada palabra
    *
    *   @param         {String}
    *   @return        {String}
    *        @version        1.0        -  04-01-2008
    */
    Capitalized:function(s)
    {
            var i, c, wd, f='',p=true,t=s.toLowerCase();
            for (i=0,n=t.length;i<n;++i)
            {
                    c=t.charAt(i);
                    wd=(c ==' '||c=='\n'||c=='\t');
                    if (wd)
        {
                p=true;
                    }
                    if(p&&!wd)
        {
                c=c.toUpperCase();
            p=false;
                    }
        f+=c;
            }
    return f;
    },
}
