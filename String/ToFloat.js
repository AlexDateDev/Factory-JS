toFloat:function(s){
			var i=parseFloat(s);
			if(isNaN(i)||(""+i)!=s){alert("String.toFloat: Not a float = "+s);return null;}
			return i;
		},
