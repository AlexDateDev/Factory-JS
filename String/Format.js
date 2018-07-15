// ----------------------------------------------------------------------------
// Título:        Format
//
// Fecha:        03/02/2011
// Autor:        Alex Solé
// Versión:        1.0.0
// Dependencias:
// ----------------------------------------------------------------------------


var STR=
{
/**
         * Devuelve un string con % sustituidos
         *
         * @param        {Lista Strings}
         * @return {String}
         * @example  sprintf("Trust in %s2, but lock your %s1.", "car", "god")
         *                 output:        "Trust in god, but lock your car."
         *        @version        1.0        -  04-01-2008
         */
        sprintf:function()
    {
        var insert        = "";
        var source        = arguments[0];

        for (i = 1; i < arguments.length; i++)
        {
                        insert = arguments[i];
                        source = source.replace("%s"+i, insert);
        }
        return source;
        }
}
var STR={
    Format:function(){
       var s=arguments[0];
       for(i=1;i< arguments.length;i++){s=s.replace("{"+(i-1)+"}",arguments[i]);}
       return s;
    }
}

String.prototype.format = function () {
    var args = arguments;
    return this.replace(/\{\{|\}\}|\{(\d+)\}/g, function (m, n) {
        if (m == "{{") { return "{"; }
        if (m == "}}") { return "}"; }
        return args[n];
    });
};
/* sample */
"Hello {0}.{1}, Welcome to our new house at {2}.".format('Mr','Imdadhusen','Ahmedabad');

var startDate = "21 APR 2014";
var endDate = "24 APR 2014";
"Your score is {0} out of {1}".format(175,250);
"Dear {0}, Your ticket is booked for {1} days from {2} to {3}. Thank you for booking from {4}".format('Imdadhusen',4,startDate, endDate, 'www.happybooking.com');
"World T{0} - {1}th match, Group {2}, {3} v {4}, {3} won by {5} wickets (with {6} balls remaining).  {4}'s next match will be on {7}.".format(20,13,2,'India','Pakistan', 7, 9, '25 Apr 2014');
