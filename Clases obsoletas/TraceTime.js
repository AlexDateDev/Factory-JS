// ----------------------------------------------------------------------------
// TraceTime
//
//
//
// Date : 03/03/2013
// By   : Alex
// ----------------------------------------------------------------------------


/**
*        Classe utilitzada per tracejar milisegons entre instruccions
*/

function TRACE_TIME()
{
        this.ar = new Array;
}

/**
*        setTime()
*        Afegeix l'hora, minuts, segons i milisegons a l'array
*/

TraceTime.prototype.set_time = function( )
{
        var now = new Date();
        this.ar[ this.ar.length]=now.getUTCHours() + ":"+ now.getUTCMinutes() + ":" + now.getUTCSeconds() +":" +now.getUTCMilliseconds();
}

/**
*        show()
*        Mostra els milisegons de l'array
*/

TraceTime.prototype.show = function( )
{
        var s="";
        if(this.ar.length>0)
        {
                for( var i=this.ar.length-1;i>=0;i--)
                        s="\n"+i+"= "+this.ar[i]+s;
        }
        else
                s="El array esta vacio";
        alert(s)
}

/**
*        clear()
*        Inicialitza l'array
*/

TraceTime.prototype.clear = function( )
{
        this.ar = new Array;
}

