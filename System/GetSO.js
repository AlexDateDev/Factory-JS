// ----------------------------------------------------------------------------
// GetSO
//
//
//
// Date : 03/03/2013
// By   : Alex
// ----------------------------------------------------------------------------

Viernes 12 Agosto 2011
SYSTEM =
{
    get_SO : function( )
    {
        // userAgent
        var _ua = navigator.userAgent.toUpperCase( );
        if( _ua.indexOf( "WIN" ) != -1 ){return "WIN";}
        else if(_ua.indexOf( "LINUX" )!= -1 ){return "LINUX";}
        else if(_ua.indexOf( "MAC" ) != -1  ){return "MAC";}
        else if(_ua.indexOf( "FREEBSD" ) != -1  ){return "FREEBSD";}
        else if(_ua.indexOf( "BSD" ) != -1  ){return "BSD";}
        else if(_ua.indexOf( "SUNOS" ) != -1  ){return "SUNOS";}
        else if(( _ua.indexOf("OS/2")!=-1) || (_ua.indexOf("IBM-WEBEXPLORER")!=-1) ){return "OS2";}
        else if(_ua.indexOf( "IRIX" ) != -1  ){return "IRIX";}
        else if(_ua.indexOf( "AIX" ) != -1  ){return "AIX";}
        else if(( _ua.indexOf( "SCO" ) != -1  ) || _ua.indexOf( "UNIX_SV" ) != -1 ) {return "SUNOS";}
        else if(( _ua.indexOf( "DEC" ) != -1  ) || (_ua.indexOf( "OSF1" ) != -1 )  || (_ua.indexOf( "ALPHASERVER" ) != -1 )  || (_ua.indexOf( "ULTRIX" ) != -1 )  || (_ua.indexOf( "ALPHAESTATION" ) != -1 ) ){return "DEC";}
        else if( ( _ua.indexOf( "VAX" ) != -1  ) || _ua.indexOf( "OPENVMS" ) != -1 ) {return "VMS";}
        else return "";
    }
}

