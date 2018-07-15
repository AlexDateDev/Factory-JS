// ----------------------------------------------------------------------------
// ReplaceStringAll
//
//
//
// Date : 03/03/2013
// By   : Alex
// ----------------------------------------------------------------------------

function replaceAll(string, token, newtoken) {
    while (string.indexOf(token) != -1) {
         string = string.replace(token, newtoken);
    }
    return string;
}
