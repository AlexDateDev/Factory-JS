// ----------------------------------------------------------------------------
// Título:    Alert
//
// Fecha:    02/03/2011
// Autor:    Alex Solé
// ----------------------------------------------------------------------------

var ARR={
    // Función
    Alert: function(a){
        if(!Alx.Array.IsArray(a)){alert("Not an array");return null;}
        alert(Alx.Array.dump(a));
    },
    dump: function(arr,level){
        var dumped_text="";
        if(!level){level=0;}
        var level_padding="";
        for(var j=0;j<level+1;j++){level_padding += "- - ";}
        if(typeof(arr)=='object'){
            for(var item in arr){
                var value=arr[item];
                if(typeof(value)=='object'){
                    dumped_text +=level_padding+"'"+item+"' => new Array()\n";
                    dumped_text +=ARR.dump(value,level+1);
                }
                else{
                    dumped_text += level_padding+"'"+item+"' => \""+value+"\"\n";
                }
            }
        }
        else{
            dumped_text="===>"+arr+"<===("+typeof(arr)+")";
        }
        return(dumped_text);
    }
}
