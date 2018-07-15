// ----------------------------------------------------------------------------
// GetScrollOffsetTop
//
//
//
// Date : 03/03/2013
// By   : Alex
// ----------------------------------------------------------------------------


var Document={
    /*
    *        Devuelve el offset desde arriba si hay scroll
    *  NOTA: al cargar la página, siempre es 0
    *
    *  @return {int | null}
    *  @version        1.0        -  08-01-2008
    */
    GetScrollTop:function(){
        if( window.pageYOffset != null ){
            return window.pageYOffset;        // NS
        }
        if( document.body.scrollTop != null ){
            return document.body.scrollTop; // IE
        }
        return null;
    }
}

