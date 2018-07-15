// ----------------------------------------------------------------------------
// maxLength
//
//
//
// Date : 03/03/2013
// By   : Alex
// ----------------------------------------------------------------------------


<script type="text/javascript">

/***********************************************
* Textarea Maxlength script- © Dynamic Drive (www.dynamicdrive.com)
* This notice must stay intact for legal use.
* Visit http://www.dynamicdrive.com/ for full source code
***********************************************/

var Factory={
    Form:{
        TextArea:{
            MaxLength:function(obj){
                var mlength=obj.getAttribute? parseInt(obj.getAttribute("maxlength")) : ""
                if (obj.getAttribute && obj.value.length>mlength){
                    obj.value=obj.value.substring(0,mlength)
                }
            }
        }
    }
}

</script>

<textarea maxlength="40" onkeyup="return Factory.Form.TextArea.MaxLength(this)"></textarea>

