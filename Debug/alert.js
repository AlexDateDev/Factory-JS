// ----------------------------------------------------------------------------
// Título:        d
//
// Fecha:        17/09/2016
// Autor:        Alex Solé
// Versión:        1.0.0
// Dependencias:
// ----------------------------------------------------------------------------


var d =
{
    /*
    * Muestra una alert con todos los valores del array
    *
    * @param {Array} a
    * @version        1.1        - 06-08-2009
    * @version        1.0        - 08-01-2009
    */
    alert: function(a){
          alert(this.dump(a));
    },

    dump: function(arr,level){
        var dumped_text = "";
        if(!level){
            level = 0;
        }

        // The padding given at the beginning of the line.
        var level_padding = "";
        for(var j=0;j<level+1;j++){
            level_padding += "- - ";
        }

        if(typeof(arr) == 'object'){
            //Array/Hashes/Objects
            for(var item in arr){
                var value = arr[item];
                if(typeof(value) == 'object'){
                    //If it is an array,
                    dumped_text += level_padding + "'" + item + "' ...\n";
                    dumped_text += this.dump(value,level+1);
                }
                else{
                    dumped_text += level_padding + "'" + item + "' => \"" + value + "\"\n";
                }
            }
        }
        else{
            //Stings/Chars/Numbers etc.
            dumped_text = "===>"+arr+"<===("+typeof(arr)+")";
        }
        return(dumped_text);
    } // end dump
} // end ARRAY

