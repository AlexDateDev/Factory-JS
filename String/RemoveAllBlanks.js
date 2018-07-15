// ----------------------------------------------------------------------------
// RemoveAllBlanks
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
    *        Elimina todos los espacios en blanco de un string
    *
    *        @param        {String} String al que elimnar los espacions
    *        @return        {String}      El string sin espacios: ex. input:" 1 23 "  output:"123"
    *        @version        1.0        -  04-01-2008
    */
        get_remove_all_blanks:function(s)
    {
            return s.replace(new RegExp(" ","g"),"");
        },
}
