// ----------------------------------------------------------------------------
// T�tulo:        IsDecimal
//
// Fecha:        03/02/2011
// Autor:        Alex Sol�
// Versi�n:        1.0.0
// Dependencias:
// ----------------------------------------------------------------------------

var VAL={
	isDecimal:function(s){
		var i=parseFloat(s);
		if(isNaN(i)||(""+i)!=s){return false;}
		return true;
	}
}
