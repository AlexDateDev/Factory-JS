// ----------------------------------------------------------------------------
// Título:        SetScrollTo
//
// Fecha:        03/03/2008
// Autor:        Alex Solé
// Versión:        1.0.0
// Dependencias:
// ----------------------------------------------------------------------------


var Document={
     /*
      * Desplazamos el scroll de la ventana una distancia determinada
      * El scroll se desplaza siempre y cuando haya scroll que desplazar
      * NOTA: La venta no ha de tener el parámetro "scrollin=no"
      *
      * @param {Int}
      * @param {Int}
      * @param {Object document} (Opcional)
      * @version        1.0        -  08-01-2008
      */

     SetScrolTo:function( x, y, doc ){
        if( !doc ){
            doc = document;
        }
        is_ie = navigator.userAgent.toUpperCase().indexOf("MSIE")!=-1;
        if(is_ie ){
                doc.body.scrollLeft = x;
                doc.body.scrollTop = y;
        }
        else{
                window.scrollTo( x, y );
        }
     }
}
