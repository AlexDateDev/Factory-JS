// ----------------------------------------------------------------------------
// Post
//
// Ajax Post
//
// Date : 28/02/2013
// By   : Alex
// ----------------------------------------------------------------------------

var  Ajax={
	Post:function(_controller,_action,_data,_fnaccess,_fnerror ){
		$.ajax({
			url: _controller + "/" + _action,
			type: "post",
			data: _data,
			success: _fnaccess, 
			error:_fnerror
		});
	}
},
