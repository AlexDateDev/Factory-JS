// ----------------------------------------------------------------------------
// RemoveDomain
//
//
//
// Date : 31/07/2013
// By   : Type here your name or nickname.
// ----------------------------------------------------------------------------

funciton RemoveDomain( sUrl ){
    // Remove a domain part: www.mytest.example.com => mytest.example.com => example.com ...
    return sUrl.replace( /.*?(?:\.|$)/, '' ) ;
}
