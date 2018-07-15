// ----------------------------------------------------------------------------
// IsValid
//
//
//
// Date : 03/03/2013
// By   : Alex
// ----------------------------------------------------------------------------

var Factory={
    Phone:{
        isValid:function(s){
            var t=""+s;
            if(t.length!=9){return false;}
            if(t[0]!="9" && t[0]!="6"){return false;}
            return Factory.Validate.isInteger(t);
        }
    }
}
