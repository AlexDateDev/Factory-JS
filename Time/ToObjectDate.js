
var Time={        
	// Tranformo in string formato hora "09:30" en un Date javascript (UTC+1)
	// d,m,y opcionales, por defecto 1/1/2010
	ToObjectDate:function (sTime,d,m,y){
		if( !Validate.IsTime(sTime)){
			alert("Format Time error" );return null;
		}
		var a=sTime.split(":");
		if(!d){d=1;m=0;y=2010;}
		return new Date(y,m,d,parseInt(a[0],10),parseInt(a[1],10),0,0);
	}
},