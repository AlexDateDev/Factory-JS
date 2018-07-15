// ----------------------------------------------------------------------------
// Sanitize
//
//
//
// Date : 03/03/2013
// By   : Alex
// ----------------------------------------------------------------------------

sanitize:function(s){
    return $.trim(s);
},

// Sustituye todos los caracteres que no sean letras o números por el _
function sanitize(s) {
    return s.replace(/[^a-z0-9]/gi, '_');
}

// Sustituye todos los caracteres que no sean letras, números y el punto por el _
function sanitize(s) {
    return s.replace(/[^a-z0-9/.]/gi, '_');
}
