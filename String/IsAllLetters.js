// ----------------------------------------------------------------------------
// IsAllLetters
//
//
//
// Date : 03/03/2013
// By   : Alex
// ----------------------------------------------------------------------------

STRING =
{
/**
    *        Detectamos si todos los caracteres de un string son letras
    *
    *        @param        {String}        String a comprovar
    *        @return        {Bool}      int: Devuelve true si todos con letras o false si no lo son
    *        @version        1.0        -  04-01-2008
    */
        is_alpha_char:function(s)
    {
            if(s=="")
        {
                return false;
                }
                for(i=0,n=s.length;i<n;i++)
        {
                        t=s.substr(i,1);
            if(t.search(/[A-Za-z]/)==-1)
            {
                    return false;
                        }
                }
        return true;
        },
}
