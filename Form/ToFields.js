var Form={
	ToFields:function(idForm,name,object,c) {
		if(Str.IsEmpty(name)){alert("Missing name toFields");return;}
		if (!object){ alert("Not object toFields"); return ''};
		var f = j(idForm);
		if(!f){return;}
		f.append(Form._toFields(name,object,c));
	},
	_toFields:function(name,object,c){
		var html = '';
		$.each(object, function (i, e) {
			var tName = name + ((typeof i == 'number') ? '[' + i + ']' : '.' + i);

			html += (typeof e == 'object') ?
					Form._toFields(tName, e, c) :
					Form._createHiddenField(tName, e, c);
		});
		return html;
	},
	_createHiddenField:function(name, value, c) {
		return '<input type="hidden" name="' + name + '" value="' + value + '" ' +
			   (c ? 'class="' + c + '"' : '') + ' />\n';
	},
}