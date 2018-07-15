// ----------------------------------------------------------------------------
// Load
//
//
//
// Date : 03/03/2013
// By   : Alex
// ----------------------------------------------------------------------------


        var o;
        o = new ActiveXObject("MSXML.DOMDocument");
        o.async = false;
        o.load("job.xml");
        var s=o.documentElement.firstChild.nodeName;
        alert(s);

