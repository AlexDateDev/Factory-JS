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
//var regex = new RegExp("^[" + allowedCharacters + "]*$"); // S�lo minuscualr
var regex = new RegExp("^[" + allowedCharacters + "]*$", "i"); // Min�sculas y may�sculas
var testString = "abc";
var success = regex.test(testString);
alert( success );


