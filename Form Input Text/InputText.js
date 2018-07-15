 Input: {

            clear:function(id){
                $(id).val("");
            },
            getValue:function( id ){
                var t = $(id).val();            
                return t;
            },

            setValue:function( id, value ){
                $(id).val( value );            
            },

            errorOnNumberIncorrect:function( id ){
                if (!Data.Form.Input.isEmpty(id)) {
                    if( !Data.Validate.isNumber( $(id).val())){
                        Data.Form.Input.addError( id, true );
                    }
                    else{
                        Data.Form.Input.addError( id, false );
                    }
                }
            },

            errorOnDniIncorrect:function( id ){
                if (!Data.Form.Input.isEmpty(id)) {
                    if( !Data.Validate.isDNI( $(id).val())){
                        Data.Form.Input.addError( id, true );
                    }
                    else{
                        Data.Form.Input.addError( id, false );
                    }
                }
            },
            errorOZipCodeIncorrect:function( id ){
                if (!Data.Form.Input.isEmpty(id)) {
                    if( !Data.Validate.isZipCode( $(id).val())){
                        Data.Form.Input.addError( id, true );
                    }
                    else{
                        Data.Form.Input.addError( id, false );
                    }
                }
            },

            errorOnEmailIncorrect:function( id ){
                if (!Data.Form.Input.isEmpty(id)) {
                    if( !Data.Validate.isEmail( $(id).val())){
                        Data.Form.Input.addError( id, true );
                    }
                    else{
                        Data.Form.Input.addError( id, false );
                    }
                }
            },

            errorOnPhoneIncorrect:function( id ){
                if (!Data.Form.Input.isEmpty(id)) {
                    if( !Data.Validate.isPhone( $(id).val())){
                        Data.Form.Input.addError( id, true );
                    }
                    else{
                       Data.Form.Input.addError( id, false );
                    }
                }
            },


            addError:function(id, b){
                if( b ){
                    Data.Form.NumErrors++;
                    $(id).css("border", "1px solid red");
                }
                else{
                   $(id).css("border", "");
                }
            },

            isEmpty:function(id){
                t = $(id).val();
                if( !t ){
                    return true; // Vacio
                }
                return false;
            },
            errorOnEmpty:function(id, idError, sError){
                t = $(id).val();
                if( !t ){
                    
                    if( !idError ){
                        Data.Form.NumErrors++;
                        $(id).css("border", "1px solid red");
                    }
                    else{
                        var oError = $("span[data-valmsg-for='"+idError+"']");
                        if( oError ){
                            oError.html( sError );
                            oError.removeClass("field-validation-valid");
                            oError.addClass("field-validation-error");
                            oError.css("display", "block");

                            $(id).removeClass("input-validation-valid");
                            $(id).addClass("input-validation-error");
                        }
                    }
                }
                else{
                    if( !idError ){
                        $(id).css("border", "");
                    }
                }
            },
        },
