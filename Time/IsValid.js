// ----------------------------------------------------------------------------
// IsValid
//
//
//
// Date : 03/03/2013
// By   : Alex
// ----------------------------------------------------------------------------

 isTime:function(s){
            var t=""+s;
            if(t.length!=4 && t.length!=5){return false;}
            if(t.indexOf(":")==-1){return false;}
            var at=t.split(":");
            var h=parseInt(at[0],10);
            if(isNaN(h)){return false;}
            var m=parseInt(at[1],10);
            if(isNaN(h)){return false;}
            if(h<0 || h>23){return false;}
            if(m<0 || m>59){return false;}
            return true;
        },
isTime:function(s){
    var patron=/^(0[1-9]|1\d|2[0-3]):([0-5]\d)(:([0-5]\d))?$/;
      if (patron.test(s)){
          return true;
      else
        return false;
}
