// ----------------------------------------------------------------------------
// Título:    Init
//
// Fecha:    28/02/2013
// Autor:    Alex Solé
// ----------------------------------------------------------------------------

var Ajax = {
		Init: function () {
			var _xmlHttp = false;
			try {
				_xmlHttp = new ActiveXObject("Msxml2.XMLHTTP");
			}
			catch (e1) {
				try {
					_xmlHttp = new ActiveXObject("Microsoft.XMLHTTP");
				}
				catch (e2) {
					try {
						_xmlHttp = new ActiveXObject("Msxml2.XMLHTTP.4.0");
					}
					catch (e3) {
						_xmlHttp = false;
					}
				}
			}
			if (!_xmlHttp && typeof 'undefined' != XMLHttpRequest) {
				_xmlHttp = new XMLHttpRequest();
			}
			return _xmlHttp;
		}
	}