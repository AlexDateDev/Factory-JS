// ----------------------------------------------------------------------------
// GetDiff
//
//
//
// Date : 03/03/2013
// By   : Alex
// ----------------------------------------------------------------------------


var Dates={
    /*
    *        Indica si la data1 és mes petita (-1), igual (0) o més gran (1) que al data2
    *
    *         @param {String date} sDateSTD1
    *         @param {String date} sDateSTD2
    *         @return {Int} (-1 | 0 | 1)
    *         @version        1.0        -  19-03-2008
    */
    GetDiff : function( sDateSTD1, sDateSTD2 ){
        var d1 = this.to_obj(sDateSTD1);
        var d2 = this.to_obj(sDateSTD2);
        if( d1 < d2 ){
            return -1;
        }
        else if( d1 > d2 ){
            return 1;
        }
        else {
            return 0;
        }

    },
}

