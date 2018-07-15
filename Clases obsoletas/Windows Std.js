// ----------------------------------------------------------------------------
// Windows Std
//
//
//
// Date : 03/03/2013
// By   : Alex
// ----------------------------------------------------------------------------


function WINDOW_STD(u)
{
        this.opt="toolbar=yes,location=yes,directories=yes,status=yes,menubar=yes,scrollbars=yes,resizable=yes";
        this.u=u;
        this.id=null;
        this.par=null;
}

WINDOW_STD.prototype.add_url_param=function(p)
{
        this.par=p;
}
WINDOW_STD.prototype.open=function()
{
        var url='';
        if( this.par!=null)
        {
                //url = this.u+"?"+enc_b64(String( Math.random())+'&'+this.par);
                url = this.u+"?"+this.par;
        }
        else
        {
//                url = this.u+"?"+enc_b64(String( Math.random()));
                url = this.u;
        }
        this.id = window.open( url, "", this.opt, true);
}
