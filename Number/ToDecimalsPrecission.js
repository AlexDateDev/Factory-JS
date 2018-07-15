// ----------------------------------------------------------------------------
// ToDecimals
//
//
//
// Date : 03/03/2013
// By   : Alex
// ----------------------------------------------------------------------------

/*
ToFixed(digitos), devuelve el número original con tantos decimales como los
indicados por el parámetro digitos y realiza los redondeos necesarios. Se trata de una
función muy útil por ejemplo para mostrar precios.
*/
var numero1 = 4564.34567;
numero1.toFixed(2); // 4564.35
numero1.toFixed(6); // 4564.345670
numero1.toFixed(); // 4564


function calculaPrecioTotal(precio, porcentajeImpuestos) {
    var gastosEnvio = 10;
    var precioConImpuestos = (1 + porcentajeImpuestos/100) * precio;
    var precioTotal = precioConImpuestos + gastosEnvio;
    return precioTotal.toFixed(2);
}

var precioTotal = calculaPrecioTotal(23.34, 16);
