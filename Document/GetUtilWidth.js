// ----------------------------------------------------------------------------
// Título:        GetUtilWidth
//
// Fecha:         03/03/2008
// Autor:        Alex Solé
// Versión:        1.0.0
// Dependencias:
// ----------------------------------------------------------------------------


var Document={
   /*
    * Retorna l'ample util de la pàgina, sense el navegador i l'status. Compatible IE, Gecko
    *
    * @param        {Object document} (Opcional) Si no s'espeficica, es sobre el document actual
    * @return         {Int}
    * @version        1.0        -  08-01-2008
    */
    GetUtilWidth : function(doc){
        if( !doc ){
            doc = document;
        }
        switch( this.get_page_mode( doc )){
                case 0:
                        return doc.body.clientWidth;
                case 1:
                    if ( doc.documentElement && doc.documentElement.clientWidth > 0){
                                            return doc.documentElement.clientWidth;
                    }
                    else{
                                    return doc.body.clientWidth;
                    }
        }
    }
}

