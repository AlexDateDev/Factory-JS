// ----------------------------------------------------------------------------
// Título:        SetAttribute
//
// Fecha:        03/02/2011
// Autor:        Alex Solé
// Versión:        1.0.0
// Dependencias:
// ----------------------------------------------------------------------------


var OBJ=
{
	/**
    * Asigna un valor a un attributo de un objeto
    *
    * @param {Object} objElm
    * @param {string} strAtt
    * @param {mixed} strVal
    * @param {bool} hiddeError
    */
	SetAttribute:function( objElm, strAtt, strVal, hiddeError )
    {
            if( !objElm )
        {
                if( !hiddeError)
                        {
                    alert( 'OBJECTE SET: Atribut: '+strAtt+' Valor: '+strVal);
                        }
                        return;
                }
                eval( "objElm." + strAtt + " = \"" + strVal +"\"" );
        },
}

