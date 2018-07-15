// ----------------------------------------------------------------------------
// Sleep
//
//
//
// Date : 03/03/2013
// By   : Alex
// ----------------------------------------------------------------------------

Viernes 12 Agosto 2011
TIME=
{

 /**
    *        Funcio que realitza un retardo d'una duracio determinada.
    *        No es compatible amb Gecko
    *        @param {Int}
    */
    sleep:function( iMilliseconds )
    {
                var sDialogScript = 'window.setTimeout( function () { window.close(); }, ' + iMilliseconds + ');';
                if (window.showModalDialog)
                {
                        window.showModalDialog('javascript:document.writeln ("<script>' + sDialogScript + '<' + '/script>")');
                }
    }
};
