var Validate={
	IsDateTime:function(s){
		var d=s.split(" ");
		return Validate.IsDate(d[0]) && Validate.IsTime(d[1]);
	}
}