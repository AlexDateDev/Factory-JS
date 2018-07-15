// ----------------------------------------------------------------------------
// Título:        Decode
//
// Fecha:        03/03/2013
// Autor:        Alex Solé
// Versión:        1.0.0
// Dependencias:
// ----------------------------------------------------------------------------

var Base64={
    base64s : "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",

    /**
    *        Decodifica un string codificat en base64
    *
    *         @param {String} String a decodificar
    *         @return {String} String decodificado
    *         @version        1.0        - 08-01-2008
    */
      decode:function(s)
        {
              var bits, decOut = '', i = 0;
              for(; i<s.length; i += 4)
              {
                bits =
                 (this.base64s.indexOf(s.charAt(i))    & 0xff) <<18 |
                 (this.base64s.indexOf(s.charAt(i +1)) & 0xff) <<12 |
                 (this.base64s.indexOf(s.charAt(i +2)) & 0xff) << 6 |
                  this.base64s.indexOf(s.charAt(i +3)) & 0xff;

                decOut += String.fromCharCode((bits & 0xff0000) >>16, (bits & 0xff00) >>8, bits & 0xff);
            }
              if(s.charCodeAt(i -2) == 61)
              {
                undecOut=decOut.substring(0, decOut.length -2);
              }
              else if(s.charCodeAt(i -1) == 61)
              {
                undecOut=decOut.substring(0, decOut.length -1);
              }
              else
              {
                  undecOut=decOut;
              }
              return unescape(undecOut);
        }
};

