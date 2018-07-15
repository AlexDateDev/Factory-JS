// ----------------------------------------------------------------------------
// RegEx_Test
//
//
//
// Date : 23/07/2013
// By   : Type here your name or nickname.
// ----------------------------------------------------------------------------

var allowedCharacters = "abcdefghijklmnopqrstuvwxyz";
//var allowedCharacters = "abcdefghijklmno\\[pqrstuvwxyz"; // Caracteres especiales, escapar con dos backslash
//var regex = new RegExp("^[" + allowedCharacters + "]*$"); // Sólo minuscualr
var regex = new RegExp("^[" + allowedCharacters + "]*$", "i"); // Minúsculas y mayúsculas
var testString = "abc";
var success = regex.test(testString);
alert( success );


