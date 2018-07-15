// ----------------------------------------------------------------------------
// Título:        IsValid
//
// Fecha:        03/02/2011
// Autor:        Alex Solé
// Versión:        1.0.0
// Dependencias:
// ----------------------------------------------------------------------------


var VAL=
{
/**
    *        Comprueba si una IP tiene el formato correcto: 255.255.255.255
    *   @param {String} IP a comprobar
    *   @return        {Bool} true si es una IP o false si no lo es
    */
    is_valid_ip : function(ip)
    {
        var s= p.split( "." );
        if(s.length != 4)
        {
                        // to check that there are only 3 dots between the numbers.
            return false;
        }
        else if ((s[0].length == 0)|(s[1].length==0)|(s[2].length==0)|(s[3].length==0))
        {
            // to check that the each part of the ip has a length,
            // i.e. no 2 dots after each other.
            return false;
        }
        else if((s[0].length>3)|(s[1].length>3)|(s[2].length>3)|(s[3].length>3))
        {
            // to check that each part has a length not greater than 3 digits.
            return false;
        }
        else if((s[0]>255)|(s[1]>255)|(s[2]>255)|(s[3]>255))
        {
            // to check on each part that it is not excceeding 255.
            return false;
        }
        else if(s[0] == 0)
        {
            // to check that the first part's value is not equal to zero.
            return false;
        }
        else if((s[0]==0)&(s[1]==0)&(s[2]==0)&(s[3]==0))
        {
            // to check that the not all parts value are equal to zero.
                return false;
        }
        else if((s[0]==255)&(s[1]==255)&(s[2]==255)&(splitIP[3]==255))
        {
                        // to check that the not all parts value are equal to 255.
            return false;
        }
        else
        {
            // otherwise return true, that is IP is valid.
            return true
        }
    },
}
