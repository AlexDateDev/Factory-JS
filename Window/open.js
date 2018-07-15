
//

// http://www.w3schools.com/jsref/met_win_open.asp

var w = window.open(	"http://www.google.es", 
						"_blank", 
						"toolbar=yes, scrollbars=yes, resizable=yes, top=500, left=500, width=400, height=400");	

w.document.write("<p>Dentro de la ventana.</p>");

/*
window.open(URL,name,specs,replace)

URL		Optional. 
	Specifies the URL of the page to open. If no URL is specified, a new window with about:blank is opened
	
name	Optional. 
	Specifies the target attribute or the name of the window. The following values are supported:
	_blank - URL is loaded into a new window. This is default
	_parent - URL is loaded into the parent frame
	_self - URL replaces the current page
	_top - URL replaces any framesets that may be loaded
	name - The name of the window (Note: the name does not specify the title of the new window)
	
specs	Optional. 
	A comma-separated list of items. The following values are supported:

	channelmode =yes|no|1|0	Whether or not to display the window in theater mode. Default is no. IE only
	directories =yes|no|1|0	Obsolete. Whether or not to add directory buttons. Default is yes. IE only
	fullscreen =yes|no|1|0	Whether or not to display the browser in full-screen mode. Default is no. A window in full-screen mode must also be in theater mode. IE only
	height =pixels			The height of the window. Min. value is 100
	left =pixels				The left position of the window. Negative values not allowed
	location =yes|no|1|0		Whether or not to display the address field. Opera only
	menubar =yes|no|1|0		Whether or not to display the menu bar
	resizable =yes|no|1|0	Whether or not the window is resizable. IE only
	scrollbars =yes|no|1|0	Whether or not to display scroll bars. IE, Firefox & Opera only
	status =yes|no|1|0		Whether or not to add a status bar
	titlebar =yes|no|1|0		Whether or not to display the title bar. Ignored unless the calling application is an HTML Application or a trusted dialog box
	toolbar =yes|no|1|0		Whether or not to display the browser toolbar. IE and Firefox only
	top =pixels				The top position of the window. Negative values not allowed
	width =pixels			The width of the window. Min. value is 100
	
replace	Optional. 
	Specifies whether the URL creates a new entry or replaces the current entry in the history list. The following values are supported:
	true - URL replaces the current document in the history list
	false - URL creates a new entry in the history list	
	
*/	
