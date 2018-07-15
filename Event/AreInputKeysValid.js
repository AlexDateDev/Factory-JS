// ----------------------------------------------------------------------------
// Título:        AreInputKeysValid
//
// Fecha:        03/02/2011
// Autor:        Alex Solé
// Versión:        1.0.0
// Dependencias:
// ----------------------------------------------------------------------------



var EVENT={
    /*
     * Clean Keys
     *
     * This is a helper function. To prevent malicious users
     * from trying to exploit keys we make sure that keys are
     * only named with alpha-numeric text and a few other items.
     *
     * @access    private
     * @param    string
     * @return    string
     */
    IsInputKeysValids:function($str){
        if ( ! preg_match("/^[a-z0-9:_\/-]+$/i", $str)){
            return false; exit('Disallowed Key Characters.');
         }

        return true;
    }
}
