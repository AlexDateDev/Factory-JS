// ----------------------------------------------------------------------------
// Comprivar Hora
//
//
//
// Date : 26/01/2014
// By   : Alex
// ----------------------------------------------------------------------------

<html>
<head>
</head>
<body>

<script type="text/javascript">
  var hora=prompt('ingrese una hora con el formato hh:mm:ss','');
  var patron=/^(0[1-9]|1\d|2[0-3]):([0-5]\d)(:([0-5]\d))?$/;
  if (patron.test(hora))
    alert('Correcto');
  else
    alert('Incorrecto');
</script>

</body>
</html>
