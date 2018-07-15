var Validate={
	IsZipCode:function(s){
		var t=""+s;
		if(t.length!=5){return false;}
		return Validate.IsInteger(t);
	},
}