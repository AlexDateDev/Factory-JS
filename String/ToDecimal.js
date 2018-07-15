var Str={
	ToDecimal:function(s){
		s = s.replace(',','.');
		var i=parseFloat(s);
		if(isNaN(i)){alert("String.toDecimal: Not a float = "+s);return null;}
		return i;
	},
}