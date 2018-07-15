// ----------------------------------------------------------------------------
// DaysBetween
//
//
//
// Date : 03/03/2013
// By   : Alex
// ----------------------------------------------------------------------------


<!-- Copiar este código dentro del tag BODY -->

<script>

var montharray=new Array("Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec")

function date_days_between_dates(yr,m,d){

var today=new Date()
var todayy=today.getYear()
if (todayy < 1000)
todayy+=1900
var todaym=today.getMonth()
var todayd=today.getDate()

var todaystring=montharray[todaym]+" "+todayd+", "+todayy

var paststring=montharray[m-1]+" "+d+", "+yr

var difference=(Math.round((Date.parse(todaystring)-Date.parse(paststring))/(24*60*60*1000))*1)
difference+=" días"
document.write("Este Sitio lleva "+difference+" en Internet desde su creación!")
}
//cambiar la fecha
countup(2001,01,03)
</script>

