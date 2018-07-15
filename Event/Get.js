
var Event={
	// Devuelve el evento que se ejecuta
	Get: function (evt) {
		return (evt) ? evt : window.event;
	}
}		