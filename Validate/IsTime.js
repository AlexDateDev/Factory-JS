var Validate={	
	IsTime:function(s){
		var t=""+s;
		if(t.length!=4 && t.length!=5){return false;}
		if(t.indexOf(":")==-1){return false;}
		var at=t.split(":");
		var h=parseInt(at[0],10);
		if(isNaN(h)){return false;}
		var m=parseInt(at[1],10);
		if(isNaN(h)){return false;}
		if(h<0 || h>23){return false;}
		if(m<0 || m>59){return false;}
		return true;
	},
}