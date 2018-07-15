// ----------------------------------------------------------------------------
// Título:        Como mostrar un mapa
//
// Fecha:        03/02/2011
// Autor:        Alex Solé
// Versión:        1.0.0
// Dependencias:
// ----------------------------------------------------------------------------


<--
Crear una clave de registro para el dominio donde se tiene que visualizar el mapa

http://code.google.com/intl/es/apis/maps/signup.html
-->

<script type="text/javascript" src="http://maps.google.com/maps?file=api&v=2&key=ABQIAAAAObt36p1yxrNRGVzNbMfkIhT33kED1GnQxT0vBDhrx_B_qQiN7hThS1bN_q9H9T7Az4JEmusq-24yfw"></script>

<script type="text/javascript">
//<![CDATA[
$(document).ready(function() {
    if (GBrowserIsCompatible()) {
        var map = new GMap2(document.getElementById("mapa"));
        map.setMapType(G_HYBRID_MAP);
        // centrem el mapa
        map.setCenter(new GLatLng(41.1458929001,1.11876010895), 17);
        // afegim controls per a l'usuari
        map.addControl(new GMapTypeControl());
        map.addControl(new GSmallZoomControl());

        var point = new GLatLng(41.1458929001,1.11876010895);
        var marker = new GMarker(point);
        var html = '<div class="gmglobus"><p><strong>Facultat d’Economia i Empresa. Campus Bellissens<\/strong>Av. de la Universitat, 1<br \/>43204 Reus <br />Telf: +34 977 75 98 01 <\/p><p><a href="http://www.google.com/maps?source=uds&q=Av.+de+la+Universitat,+1%2C+43204+Reus%2C+Spain" target="_blank">Com arribar-hi<\/a><\/p><\/div>';

        map.addOverlay(marker);
        GEvent.addListener(marker, "click", function() {
                marker.openInfoWindowHtml(html, {maxWidth:300});
        });
        // per a que aparegui el globus quan es carrega el mapa
        GEvent.trigger(marker,'click');
}
});

//]]>

</script>

// -- Mapa a mostrar
<div id="mapa" style="width: 541px;height: 425px;">
</div>


Ejemplo
<script src="http://maps.google.com/maps?file=api&amp;v=2&amp;sensor=true&amp;key=ABQIAAAAne9HWAXqAmEtPpM9c1Y4uRQWSmXV3HnFSCKCTHVtzLLzT3X7MRRH-jFff4FXd9LEQqsJdZ4LtYRvMw" type="text/javascript"></script>

