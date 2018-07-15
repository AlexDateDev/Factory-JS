// ----------------------------------------------------------------------------
// ReplaceString
//
//
//
// Date : 04-01-2008
// By   : Alex
// ----------------------------------------------------------------------------

STRING =
{
	/**
    *	Sustituim un string per un altre, en totes les ocurrences de l'estring
    */
    Replace:function(s, orig, dest){
		return (""+s).replace(new RegExp(orig,"g"),dest);
	},
}

