// ----------------------------------------------------------------------------
// Título:        GetToday
//
// Fecha:        22/04/2012
// Autor:        Alex Solé
// Versión:        1.0.0
// Dependencias:
// ----------------------------------------------------------------------------

var DATE = {
    Today: function () {
        var today = new Date();
        var dd = today.getDate();
        var mm = today.getMonth() + 1; //January is 0!
        var yyyy = today.getFullYear();

        if (dd < 10) { dd = '0' + dd }
        if (mm < 10) { mm = '0' + mm }

        var hh = today.getHours();
        if (hh < 10) { hh = '0' + hh }

        var ss = today.getMinutes();
        if (ss < 10) { ss = '0' + ss }

        return dd + '/' + mm + '/' + yyyy + " " + hh + ":" + ss;
    }
}
