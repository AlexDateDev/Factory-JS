// ----------------------------------------------------------------------------
// Get
//
//
//
// Date : 03/03/2013
// By   : Alex
// ----------------------------------------------------------------------------


var Ajax={
        Get:function(_controller,_action,_data,_fnaccess,_fnerror ){
            $.ajax({
                url: _controller + "/" + _action,
                type: "GET",
                datatype: "text",
                success: _fnaccess,
                error:_fnerror
            });
        }
    }

