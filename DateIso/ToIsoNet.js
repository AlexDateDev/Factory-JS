// ----------------------------------------------------------------------------
// ToIsoNet
//
//
//
// Date : 03/03/2013
// By   : Alex
// ----------------------------------------------------------------------------

var Factory={
    DateIso:{
        // 2010-01-01T07:30:00.000Z => /Date(1262331000000)/
        toIsoNet:function(stringISO) {
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
        }
    }
},
