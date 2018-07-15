// ----------------------------------------------------------------------------
// BeginsWidth
//
//
//
// Date : 03/03/2013
// By   : Alex
// ----------------------------------------------------------------------------

STRING=
{
        /**
         * Indica si un string empuieza por otro string
         *
         * @param {String} pattern
         * @return {Bool}
         *        @version        1.0        -  04-01-2008
         */
        is_begins_with:function(pattern)
    {
            return this.indexOf(pattern) === 0;
    },
  },

