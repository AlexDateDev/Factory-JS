var Str={
	ToInt:function(s){
		var i=parseInt(s,10);
		if(isNaN(i)||(""+i)!=s){alert("String.toInt: Not a integer = "+s);return null;}
		return i;
	}
}
// ----------------------------------------------------------------------------
// ToInt
//
//
//
// Date : 03/03/2013
// By   : Alex
// ----------------------------------------------------------------------------

Martes 16 Agosto 2011
STRING=
{
    to_int :function(sStr)
    {
        var a = new Array();
        for (var i = 0; i < sStr.length; i++)
        {
            a[i] = sStr.charCodeAt(i);
        }
    return a;
    }
};