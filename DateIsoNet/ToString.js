// ----------------------------------------------------------------------------
// ToString
//
//
//
// Date : 03/03/2013
// By   : Alex
// ----------------------------------------------------------------------------

var Factory={
    DateIsoNet:{
        toString: function (sISONET) {
            var oDate = Data.Date.toDateObjectFromISONET(sISONET);

            if( null == oDate ){
                alert( "Fecha ISO NET no valida" );
                return null;
            }

            var d="00" + oDate.getDate(),m="00"+(oDate.getMonth()+1),y=oDate.getFullYear();
            var sd = d.slice(d.length-2,d.length)+"/"+m.slice(m.length-2,m.length)+"/"+y;

            h = " 00" + oDate.getHours();
            n = " 00" + oDate.getMinutes();
            s = " 00" + oDate.getSeconds();
            sd += " " + h.slice(h.length-2,h.length) + ":" + n.slice(n.length-2,n.length) + ":" + s.slice(s.length-2,s.length);
            return sd;
        }
    }
},
