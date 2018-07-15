
function Truncate( txt, len, fill){
	if( !fill){
		fill="...";
	}
	if(!txt){
		return "";
	}
	if( txt.length > len){
		return  substr(0, len) + fill;
	}
	return txt;
}