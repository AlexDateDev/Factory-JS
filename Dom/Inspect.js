// ----------------------------------------------------------------------------
// Título:        Ispect
//
// Fecha:        08/01/2009
// Autor:        Alex Solé
// Versión:        1.0.0
// Dependencias:
// ----------------------------------------------------------------------------


var DOM =
{
    /*
         * Devuevle todas la propiedade de un objeto DOM
         *
         * @param {Dom Object} O
        * @version        1.0        -  08-01-2009
         */
    Inspect:function(O){
        var pO=0
        var aO=new Array;
        var S="<span class=S>";
        var M=": </span><span class=M>";
        var F="</span><br />";
        for(var i in O){
            if(O[i]!=null && O[i]!=""){
                if(i=="innerHTML" || i=="outerHTML")
                    aO[pO]=S+i+M+O[i].replace(/</g, "&lt;").replace(/>/g, "&gt;")+F;
                else
                    aO[pO]=S+i+M+O[i]+F;
            }
            else{
                aO[pO]=i+": "+O[i]+"<br />";
            }
            pO++;
          }
        aO.sort();
        var pS=0
        var aS=new Array;
        for(var i in this.S){
            if(this.S[i]!=null && this.S[i]!=""){
                aS[pS]=S+i+M+this.S[i]+F;
            }
            else{
                aS[pS]=i+": "+this.S[i]+"<br />";
            }
            pS++;
          }
        aS.sort();

        w=window.open();
        w.document.open;
        w.document.write("<style>BODY{font-family:courier new;font-size:14px}.S{color:blue;}.M{color:brown}</style><h2>Object: id="+O.id+"</h2>");
        var p=1
        for(var i in aO){
            w.document.write((p++)+": "+aO[i]);
        }
        w.document.write("<h2>Style: id="+O.id+"</h2>");
        for(var i in aS){
            w.document.write((p++)+": "+aS[i]);
        }
        w.document.close();
    }
}


