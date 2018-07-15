// ----------------------------------------------------------------------------
// IsValid
//
//
//
// Date : 03/03/2013
// By   : Alex
// ----------------------------------------------------------------------------

   /*
    *  Comrprueba si un string contiene una fecha es correcta
    *  Si es "" devuelve false (No es una fecha correcta)
    *
    *  @param        {String date} String con la fecha a comprobar
    *  @return        {Bool}     true si la fecha es correcta, false si es incorrecta
    *  @version        1.0        -  19-03-2008
    */

IsValid:function(strDateIn){
            var y4;
            if(strDateIn==""){return false;}
            var indate=strDateIn;
            if(indate.indexOf("-")!=-1){var sdate=indate.split( "-" );}
            else{var sdate=indate.split("/");}
            var y4=(Math.abs( sdate[2]));
            var chkDate=new Date(Date.parse(sdate[1]+"/"+sdate[0]+"/"+sdate[2]));
            var cmpDate=(chkDate.getMonth()+1);
            cmpDate +="/"+(chkDate.getDate());
            cmpDate +="/"+(chkDate.getFullYear());
            var indate2=(Math.abs(sdate[1]));
            indate2 +="/"+(Math.abs(sdate[0]));
            indate2 +="/"+y4;
            if(indate2!=cmpDate){return false;}
            else{if(cmpDate=="NaN/NaN/NaN"){return false;}else{return true;}
            }
        },

