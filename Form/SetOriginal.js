var Form={
	SetOriginal:function (original) {
		var input = '<input name="original" type="hidden" value>';
		$('form').append(input);
		$('[name="original"]').val(original);
	},
}