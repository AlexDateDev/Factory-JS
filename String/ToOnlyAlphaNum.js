// ----------------------------------------------------------------------------
// ToOnlyAlphaNum
//
//
//
// Date : 03/03/2013
// By   : Alex
// ----------------------------------------------------------------------------

STRING =
{
/**
    *        Devuelve los solo caracteres numericos (letras del 0 al 9 ) en una cadena
    *
    *   @param        {String}    String donde buscar
    *   @return        {String} string con solo numeros
    *        @version        1.0        -  04-01-2008
    */
        get_only_alpha_num : function( s )
        {
            var c="";
        for(i=0,n=s.length;i<n;i++)
        {
                t = s.substr(i,1);
            if(t.search(/[0-9]/)!=-1)
            {
                    c+=t;
                        }
                }
        return c;
        },
}
