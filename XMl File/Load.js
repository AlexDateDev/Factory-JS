// ----------------------------------------------------------------------------
// Load
//
//
//
// Date : 03/03/2013
// By   : Alex
// ----------------------------------------------------------------------------


XML=
{
        /*
        * Carguem un document en format XML
        *
        * @param {String}
        * @version        1.0        -  08-01-2009
        */
        load_xml_file:function(dname)
        {
                try //Internet Explorer
                {
                        xmlDoc=new ActiveXObject("Microsoft.DOM");
                }
                catch(e)
                {
                        try  //Firefox, Mozilla, Opera, etc.
                        {
                                var xmlDoc=document.implementation.createDocument("","",null);
                        }
                        catch(e){throw "Er1: DOM.load_xml_file: " + e.message;}
                }
                try
                {
                        xmlDoc.async=false;
                        xmlDoc.load(dname);
                        return(xmlDoc);
                }
                catch(e){throw "Er2: DOM.load_xml_file: " + e.message;}
                throw "Er: DOM.load_xml_file";
        }
}

