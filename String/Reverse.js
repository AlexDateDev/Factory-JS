// ----------------------------------------------------------------------------
// Reverse
//
//
//
// Date : 03/03/2013
// By   : Alex
// ----------------------------------------------------------------------------

Martes 16 Agosto 2009
STRING=
{
    reverse : function(sStr)
    {
        var s = "";
        var i = sStr.length;
        while (i>0)
        {
            s += sStr.substring(i-1,i);
            i--;
        }
        return s;
    }
};

