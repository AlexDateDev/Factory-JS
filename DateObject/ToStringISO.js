// ----------------------------------------------------------------------------
// ToString
//
//
//
// Date : 03/03/2013
// By   : Alex
// ----------------------------------------------------------------------------

// Partiendeo de un Date javascript devuelve un string con su formato ISO estándar
// 2010-01-01T07:30:00.000Z
toStringISO:function(oDate) {
    return oDate.getUTCFullYear()+'-'+this._padzero(oDate.getUTCMonth()+1)+'-' +this._padzero(oDate.getUTCDate()) +'T'+this._padzero(oDate.getUTCHours())+':' +this._padzero(oDate.getUTCMinutes())+':'+this._padzero(oDate.getUTCSeconds())+'.'+ this._pad2zeros(oDate.getUTCMilliseconds())+'Z';
},

_padzero:function(n) {
    return n < 10 ? '0' + n : n;
},
_pad2zeros:function (n) {
    if(n<100){n='0'+n;}
    if(n<10){n='0'+n;}
    return n;
},

if (typeof Date.prototype.toISOString !== 'function') {

    (function () {

        'use strict';

        // Function which takes a 1 or 2-digit number and returns it as a two-character string,
        // padded with an extra leading zero, if necessary.
        function pad(number) {
            var r = String(number);
            if (r.length === 1) {
                r = '0' + r;
            }
            return r;
        }

        Date.prototype.toISOString = function () {

            return this.getUTCFullYear()
                + '-' + pad(this.getUTCMonth() + 1)
                + '-' + pad(this.getUTCDate())
                + 'T' + pad(this.getUTCHours())
                + ':' + pad(this.getUTCMinutes())
                + ':' + pad(this.getUTCSeconds())
                + '.' + String((this.getUTCMilliseconds() / 1000).toFixed(3)).slice(2, 5)
                + 'Z';
        };

    }());
}
