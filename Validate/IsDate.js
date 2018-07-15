var Validate={
	IsDate:function(strDateIn){
		var y4;
		if(strDateIn==""){return false;}
		var indate=strDateIn;
		if(indate.indexOf("-")!=-1){var sdate=indate.split( "-" );}
		else{var sdate=indate.split("/");}
		var y4=(Math.abs( sdate[2]));
		var chkDate=new Date(Date.parse(sdate[1]+"/"+sdate[0]+"/"+sdate[2]));
		var cmpDate=(chkDate.getMonth()+1);
		cmpDate +="/"+(chkDate.getDate());
		cmpDate +="/"+(chkDate.getFullYear());
		var indate2=(Math.abs(sdate[1]));
		indate2 +="/"+(Math.abs(sdate[0]));
		indate2 +="/"+y4;
		if(indate2!=cmpDate){return false;}
		else{if(cmpDate=="NaN/NaN/NaN"){return false;}else{return true;}
		}
	},
} 