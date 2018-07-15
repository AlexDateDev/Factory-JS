// ----------------------------------------------------------------------------
// Título:        GetUtilHeight
//
// Fecha:        03/03/2008
// Autor:        Alex Solé
// Versión:        1.0.0
// Dependencias:
// ----------------------------------------------------------------------------


var Document={
      /*
    * Retorna l'altura util de la pagina, sense el navegador i l'status. Compatible IE, Gecko
    *
    * @param        {Object document} (Opcional) Si no s'espeficica, es sobre el document actual
    * @return         {Int}
    * @version        1.0        -  08-01-2008
    */
    GetUtilHeight : function( doc ){
        if( !doc ){
            doc = document;
        }
        switch( this.GetPageMode( doc )){
            case 0:
                return doc.body.clientHeight;
            case 1:
                if ( doc.documentElement && doc.documentElement.clientHeight > 0){
                    return doc.documentElement.clientHeight;
                  }
                  else{
                    return doc.body.clientHeight;
                   }
          }
    },
}


