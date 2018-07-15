
var JQ={	
	String: {

		// 	Indica si un steing esta vacio o nulo
		//	Devuevle: true si esta vacio o false si contiene algo
		IsEmpty: function (s) {
			if (!s) { return true; }
			return ($.trim(s) == "");
		}
	},
}