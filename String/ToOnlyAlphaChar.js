// ----------------------------------------------------------------------------
// ToOnlyAlphaChar
//
//
//
// Date : 03/03/2013
// By   : Alex
// ----------------------------------------------------------------------------

STRING =
{
/**
    *   Devuelve los solo caracteres alfabeticos (letras de la A a la Z ) en una cadena
    *
    *   @param        {String}   String donde buscar
    *   @return        {String}  string con solo letras
    *        @version        1.0        -  04-01-2008
    */
        get_only_alpha_char : function( s )
    {
            var c="";
        for(i=0,n=s.length;i<n;i++)
        {
                t=s.substr(i,1);
            if (t.search(/[A-Za-z]/)!=-1)
            {
                    c+=t;
                        }
                }
        return c;
        },
};
