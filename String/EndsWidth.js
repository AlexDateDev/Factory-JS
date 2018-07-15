// ----------------------------------------------------------------------------
// EndsWidth
//
//
//
// Date : 03/03/2013
// By   : Alex
// ----------------------------------------------------------------------------


STRING=
{
/**
         * Indica si un string finaliza con otro string
         *
         * @param {String} pattern
         * @return {Bool}
         *        @version        1.0        -  04-01-2008
         */
        is_ends_with:function(pattern)
        {
        var d = this.length - pattern.length;
                return d >= 0 && this.lastIndexOf(pattern) === d;
        },
}

