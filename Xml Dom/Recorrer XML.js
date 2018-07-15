// ----------------------------------------------------------------------------
// Recorrer XML
//
//
//
// Date : 03/03/2013
// By   : Alex
// ----------------------------------------------------------------------------


/*
      <libros>
        <!-- Cometario -->
        <libro isbn="91-901-533-7">
                <titulo>
                    XML: Extensible Markup Languge
                </titulo>
                <autor>Elliote Rusty Harold</autor>
                <editorial>Prentice Hall</editorial>
                <descripcion>Estupendo libro sobre XML</descripcion>
        </libro>
        <![CDATA[
        Texte no computable
        ]]>
        <libro isbn="84-415-0845-3">
                <titulo>XML</titulo>
                <autor>Natanya Pitts</autor>
                <editorial>Anaya Multimedia</editorial>
                <descripcion>Buen libro de introduccion al XML</descripcion>
        </libro>
      </libros>

      arr['libros']['libro'][0]['titulo'][0]="XML: Extensible"
      arr['libros']['libro'][0]['autor'][0]="Elliote"
      arr['libros']['libro'][0]['editorial'][0]="Prentice"
      arr['libros']['libro'][0]['descripcion'][0]="..."
      arr['libros']['libro'][1]['titulo'][0]="XML"
      arr['libros']['libro'][1]['autor'][0]="Natanya"
      arr['libros']['libro'][1]['editorial'][0]="Anaya"
      arr['libros']['libro'][1]['descripcion'][0]=".."
*/


Nodes =oXml.childNodes;

// <?xml version="1.0" encoding="ISO-8859-1"?>
alert(Nodes[0].nodeType); // = 7
alert(Nodes[0].nodeName); // xml
alert(Nodes[0].nodeValue); // version="1.0" encoding="ISO-8859-1"

// <libros>
alert(Nodes[1].nodeType); // = 1
alert(Nodes[1].nodeName); // libros
alert(Nodes[1].nodeValue); // null

// <!--Cometario -->
 alert(Nodes[1].childNodes[0].nodeType); // = 8
 alert(Nodes[1].childNodes[0].nodeName); // #Coment
 alert(Nodes[1].childNodes[0].nodeValue); // Comentario

 // <libro isbn="91-901-533-7">
 alert(Nodes[1].childNodes[1].nodeType); // = 1
 alert(Nodes[1].childNodes[1].nodeName); // libro
 alert(Nodes[1].childNodes[1].nodeValue); // null

 // <titulo>XML: Extensible Markup Languge</titulo>
 alert(Nodes[1].childNodes[1].childNodes[0].nodeType); // = 1
 alert(Nodes[1].childNodes[1].childNodes[0].nodeName); // titulo
 alert(Nodes[1].childNodes[1].childNodes[0].nodeValue); // nul

 // <titulo>XML: Extensible Markup Languge</titulo>
 alert(Nodes[1].childNodes[1].childNodes[0].childNodes[0].nodeType); // = 3
 alert(Nodes[1].childNodes[1].childNodes[0].childNodes[0].nodeName); // #text
 alert(Nodes[1].childNodes[1].childNodes[0].childNodes[0].nodeValue); // XML: Extensible ...

 alert(Nodes[1].childNodes[2].nodeType); // = 4
 alert(Nodes[1].childNodes[2].nodeName); // #cdata-section
 alert(Nodes[1].childNodes[2].nodeValue); // Texte no computable

