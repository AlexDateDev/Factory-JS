// ----------------------------------------------------------------------------
// ShowProperties
//
//
//
// Date : 03/03/2013
// By   : Alex
// ----------------------------------------------------------------------------

Martes 16 Agosto 2011
OBJECT=
{
        /**
        *        Muestra todas las propeidades de un objeto
        *
        */
        show_properties:function(obj,objName)
        {
                var result = ""
                for (var i in obj)
                {
                        result += objName + "." + i + " = " + obj[i] + "\n";
                }
                alert(result);
        }

}
