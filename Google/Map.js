// ----------------------------------------------------------------------------
// Map
//
//
//
// Date : 03/03/2013
// By   : Alex
// ----------------------------------------------------------------------------

 Maps:{
            // <script type="text/javascript"  src="https://maps.google.com/maps/api/js?sensor=false"></script>
            Map:null,

            Zoom:8,

            IdMap: null,

            showByAddress: function (idVisible, arr, nZoom) {
                Data.Google.Maps.Map = null;
                if (!(arr && arr.constructor === Array)) {
                    alert("Google map not array");
                    return;
                }
                if (nZoom) {
                    Data.Google.Maps.Zoom = nZoom;
                }

                Data.Google.Maps.IdMap = idVisible;

                var geocoder = new google.maps.Geocoder();
                var latlng1 = null;
                // Recorremos las empresas
                for (idx in arr) {

                    var onePoint = arr[idx];

                    if (!onePoint['Address']) {
                        alert("Google map array not address");
                        return;
                    }
                    if (!onePoint['Title']) {
                        alert("Google map array not title");
                        return;
                    }

                    var address = onePoint['Address'];

                    // Pasamos al a función la empresa y el indice para que la función que devuelva geocode sepa desde que elemento se accede
                    geocoder.geocode({ 'address': address }, function (onePoint, idx) {

                        return (function (results, status) {

                            // CUIDADO
                            // Tiene accedo a onePoint y idx que ha generado la llamada

                            if (status == google.maps.GeocoderStatus.OK) {
                                var latitude = results[0].geometry.location.lat();
                                var longitude = results[0].geometry.location.lng();
                            }
                            if (latitude && longitude) {

                                var latlng = new google.maps.LatLng(latitude, longitude);

                                if (latlng1 == null) {
                                    latlng1 = latlng;
                                    var myOptions = {
                                        zoom: Data.Google.Maps.Zoom,
                                        center: latlng,
                                        mapTypeId: google.maps.MapTypeId.ROADMAP
                                    };
                                    Data.Google.Maps.Map = new google.maps.Map(document.getElementById(Data.Google.Maps.IdMap), myOptions);
                                }

                                var mk = new google.maps.Marker({
                                    position: latlng,
                                    map: Data.Google.Maps.Map,
                                    title: onePoint["Title"]
                                });

                                if (onePoint["Tooltip"]) {
                                    var infowindow = new google.maps.InfoWindow({
                                        content: onePoint["Tooltip"]
                                    });

                                    google.maps.event.addListener(mk, 'click', function () {
                                        infowindow.open(Data.Google.Maps.Map, mk);
                                    });
                                }
                            }
                        });
                    } (onePoint, idx));
                }
            }
        }
