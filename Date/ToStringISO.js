// ----------------------------------------------------------------------------
// Título:        ToStringISO
//
// Fecha:        17/09/2016
// Autor:        Alex Solé
// Versión:        1.0.0
// Dependencias:
// ----------------------------------------------------------------------------

var DATE{
    _padzero:function(n) {
        return n < 10 ? '0' + n : n;
    },
    _pad2zeros:function (n) {
        if(n<100){n='0'+n;}
        if(n<10){n='0'+n;}
        return n;
    },
    // Partiendeo de un Date javascript devuelve un string con su formato ISO estÃ¡ndar
    // 2010-01-01T07:30:00.000Z
    ToStringISO:function(oDate) {
        return oDate.getUTCFullYear()+'-'+this._padzero(oDate.getUTCMonth()+1)+'-'+this._padzero(oDate.getUTCDate())+'T'+this._padzero(oDate.getUTCHours())+':'+this._padzero(oDate.getUTCMinutes())+':'+this._padzero(oDate.getUTCSeconds())+'.'+this._pad2zeros(oDate.getUTCMilliseconds())+'Z';
    },
}
