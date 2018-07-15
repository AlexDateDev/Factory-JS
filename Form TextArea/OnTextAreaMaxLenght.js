
var UI={
	TexArea:{
		// Sólo deja escribor maxlength caracteres en un textarea
		onMaxLengt: function (obj) { 
			var mlength = obj.getAttribute ? parseInt(obj.getAttribute("maxlength")) : "";
			if (obj.getAttribute && obj.value.length > mlength) {
				obj.value = obj.value.substring(0, mlength);
			}
		}
	}
}
