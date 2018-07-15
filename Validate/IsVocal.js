// ----------------------------------------------------------------------------
// IsVocal
//
//
//
// Date : 03/03/2013
// By   : Alex
// ----------------------------------------------------------------------------


var Char={
   /*
    *    Determina si un caracter es vocal.
    *
    *    @return {bool}
    *    @version        1.0        -  04-01-2008
    */
    isVocal:function(c){
        return (/^[a,A,e,E,i,I,o,O,u,U]$/.test(c));
    }

};

