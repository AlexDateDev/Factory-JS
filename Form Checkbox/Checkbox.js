Checkbox:{
           addError:function(id, b){
                if( b ){
                    Data.Form.NumErrors++;
                    $(id).parent().css("border", "1px solid red");
                }
                else{
                   $(id).parent().css("border", "");
                }
            },

            isChecked: function( id ){
                var x = $(id).attr("checked");
                return ("checked" == x);
            },
            setCheck: function( id, bChk ){
                $(id).attr("checked", bChk);
            },
            clear:function( id ){
                $(id).attr("checked", false);
            },
        },
