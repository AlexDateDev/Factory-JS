// ----------------------------------------------------------------------------
// T�tulo:        ToDecimalPosition
//
// Fecha:        03/02/2011
// Autor:        Alex Sol�
// Versi�n:        1.0.0
// Dependencias:
// ----------------------------------------------------------------------------


/*
ToFixed(digitos), devuelve el n�mero original con tantos decimales como los
indicados por el par�metro digitos y realiza los redondeos necesarios. Se trata de una
funci�n muy �til por ejemplo para mostrar precios.
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
