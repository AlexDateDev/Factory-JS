var Date={
	// Partiendo de una fecha ISO NET foramto /Date(1262331000000)/
	// devuelve un objeto Date de javascript
	ToObjectDateFromISONET: function (sISONET) {
		var reMsAjax = /^\/Date\((d|-|.*)\)[\/|\\]$/;
		var a = reMsAjax.exec(sISONET);
		if(a){
			var b=a[1].split(/[-+,.]/);
			return new Date(b[0] ? +b[0] : 0 - +b[1]);
		}
		return null;
	},
}