var Validate={	
	isDNI:function(s){
		var s=""+s;
		if(s.length!=9){return false;}
		var chk= "^\([A-Za-z]?\)\([0-9]\{6,8\}\)\([A-Za-z]?\)$";
		var regex=new RegExp(chk);
		return regex.test(s);
	}
}