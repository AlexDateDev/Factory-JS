// ----------------------------------------------------------------------------
// TimeOut
//
//
//
// Date : 03/03/2013
// By   : Alex
// ----------------------------------------------------------------------------


/**
 * Timeout que executa funcions
 * El timer s'ha de declarar de forma global
 * Classe que implementa un timeout, a partir del qual s'executa una funcio.
 * Permet guardar objectes per poderlos recuperar desde el timeout a dintre de les funciones
 *
 * @author                 Alexandre Sole i Faura
 * @copyright         BTCelular.com
 * @version         1.0        -> 28/06/2007
 * @name                TIME_OUT
 */
function TIME_OUT()
{
        /**
        *        handle identificador del timeout
        */
        this._handleTime=null;
        /**
        *         Funcio a executr despres de X temps
        */
        this._strFun = null;

        /**
        *        Temps d'espera
        */
        this._nTime = null;
        this._arrObj = new Array();
}

/**
*        Inicialitza la funcio i el temps d'espera del timeout
*        Una vegada esgotat el temps s'executa la funcio
*        @param        string        Funcio a executar
*        @param        int                Milisegons d'espera
*/
TIME_OUT.prototype.init = function( strFun, nTime )
{
        this._strFun = strFun;
        this._nTime = nTime;
}

/**
*        Insertem objectes dintre del timeout, per poder-los recuperar posteriorment
*        desde altres llocs mitjacant el timer
*        @param        int        Identificador de la posicio on guardar l'objecte
*        @param        objecte Objecte a guardar dintre del timer
*/
TIME_OUT.prototype.add_object = function( nPos, objElm )
{
        this._arrObj[nPos]=objElm
}

/**
*        Recuperem objectes de dintre del timeout
*        @param        int        Identificador de la posicio a recuperar l'objecte
*        @return objecte Objecte guardat dintre del timer o null sino existeix
*/
TIME_OUT.prototype.get_object = function( nPos )
{
        if( this._arrObj[nPos] )
        {
                return this._arrObj[nPos];
        }
        else
        {
                alert( "TIME_OUT: Objecte no existeix a dintre del timer");
                return null;
        }
}

/**
*        Posa en marxa el timeout.
*        S'executa el temps d'espera i despres s'executa la funcio
*/
TIME_OUT.prototype.run = function( )
{
        this._handleTimer = setTimeout( this._strFun, this._nTime );
}

/**
*        Finalitza el timeout
*/
TIME_OUT.prototype.end = function( )
{
        clearTimeout( this._handleTimer );
}

