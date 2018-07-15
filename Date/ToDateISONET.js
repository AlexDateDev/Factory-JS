// ----------------------------------------------------------------------------
// Título:        ToDateISONet
//
// Fecha:        17/09/2016
// Autor:        Alex Solé
// Versión:        1.0.0
// Dependencias:
// ----------------------------------------------------------------------------

var DATE={
    // 2010-01-01T07:30:00.000Z => /Date(1262331000000)/
    ToDateISONET:function(stringISO) {
        var reISO = /^(\d{4})-(\d{2})-(\d{2})T(\d{2}):(\d{2}):(\d{2}(?:\.\d*)?)Z$/;
        var a=reISO.exec(stringISO);
        if(a){
            var val='/Date(' +
                new Date(Date.UTC(+a[1], +a[2] - 1,
                    +a[3], +a[4],
                    +a[5], +a[6])).getTime() + ')/';
                    return val;
            }
        return null;
    },
}
