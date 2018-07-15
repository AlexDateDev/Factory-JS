// ----------------------------------------------------------------------------
// Título:        Encode
//
// Fecha:        06/04/2016
// Autor:        Alex Solé
// Versión:        1.0.0
// Dependencias:
// ----------------------------------------------------------------------------

var Base64={

    /**
    * Codifica un string en base64
    *
    * @param {String}        String a codificar
    * @return {String} String codificado
    * @version        1.0        - 08-01-2008
    */
    base64s : "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",

    Encode:function(s)
    {
       s=escape(s);
          var bits, dual, i = 0 , encOut = '';
          while(s.length >= i + 3)
          {
            bits =
                (s.charCodeAt(i++) & 0xff) <<16 |
                (s.charCodeAt(i++) & 0xff) <<8  |
                 s.charCodeAt(i++) & 0xff;
            encOut +=
                 this.base64s.charAt((bits & 0x00fc0000) >>18) +
                 this.base64s.charAt((bits & 0x0003f000) >>12) +
                 this.base64s.charAt((bits & 0x00000fc0) >> 6) +
                 this.base64s.charAt((bits & 0x0000003f));
        }
          if(s.length -i > 0 && s.length -i < 3)
          {
            dual = Boolean(s.length -i -1);
            bits =
                 ((s.charCodeAt(i++) & 0xff) <<16) |
                 (dual ? (s.charCodeAt(i) & 0xff) <<8 : 0);
            encOut +=
                  this.base64s.charAt((bits & 0x00fc0000) >>18) +
                  this.base64s.charAt((bits & 0x0003f000) >>12) +
                  (dual ? this.base64s.charAt((bits & 0x00000fc0) >>6) : '=') +
                  '=';
        }
          return encOut
      },

};

