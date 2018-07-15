// ----------------------------------------------------------------------------
// T�tulo:        GetBaseName
//
// Fecha:        03/02/2011
// Autor:        Alex Sol�
// Versi�n:        1.0.0
// Dependencias:
// ----------------------------------------------------------------------------



var FILE={
/**
        *        Devuelve el nombre del archivo
        *
        *        @param {String file}
        *        @return {String}
        */
        GetBaseName:function(s)
        {
                var t=new String(s);var p=t.lastIndexOf("/");
                var r="";if(p>0)r=t.slice(p+1,t.length);else{p=t.lastIndexOf("\\");
                if(p>0)r=t.slice(p+1,t.length);else r=t;}
                return r;
        },
};

