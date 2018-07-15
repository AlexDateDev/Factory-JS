// ----------------------------------------------------------------------------
// Título:        IsAcrobarInstalled
//
// Fecha:        12/08/2011
// Autor:        Alex Solé
// Versión:        1.0.0
// Dependencias:
// ----------------------------------------------------------------------------



This is not as easy as I first thought, mainly because no matter what I
did, it would not work in ie, and I could not find any information about
detecting plugins in IE, all I got was, "This works in nn but not ie"

A simple script is

abat= navigator.mimetype["application/pdf"];
if abat
    document.write("You have Acrobat Reader as an active plugin.")
else
   document.write("You can download Acrobat Reader from Adobe
directly.")

Irrespective of anything else, this question comes back to how browsers
handle file types. In IE this appears to be largely an unknown, I could
not get any information about plugins at all in VBScript (albeit with a
cursory examination). In most cases, rather than try to detect if the
plugin is available, would it not be better just to use a simple link
and let the browser take care of it?

<a href="mypdf.pdf">PDF document here</a>

Perhaps this is why most pages that link to Acrobat documents also have
links to download the Acrobat Reader.

