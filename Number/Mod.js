// ----------------------------------------------------------------------------
// Título:        Mod
//
// Fecha:        03/02/2011
// Autor:        Alex Solé
// Versión:        1.0.0
// Dependencias:
// ----------------------------------------------------------------------------

var NUM=
{
    GetMod:function(val,mod)
    {
        if (val < 0)
        {
            while(val<0)
            {
                val += mod;
            }
            return val;
        }
        else
        {
            return val%mod;
        }
    }
};

