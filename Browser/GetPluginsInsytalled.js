// ----------------------------------------------------------------------------
// GetPluginsInsytalled
//
//
//
// Date : 03/03/2013
// By   : Alex
// ----------------------------------------------------------------------------

How can I check whether a certain plugin is installed?
How can I check whether there is a plugin for a certain mime type?

Netscape Navigator has the
  navigator.plugins
and the
  navigator.mimeTypes
objects for such checks. The following function checks whether there is
a plugin enabled for a mime type passed in:

function pluginEnabled (mimeType) {
  var mo = navigator.mimeTypes[mimeType];
  return mo && mo.enabledPlugin ? true : false;
}

// Examples
alert(pluginEnabled('application/x-shockwave-flash'))
alert(pluginEnabled('video/quicktime'))
alert(pluginEnabled('audio/basic'))

Mime types to pass in as arguments can be found with the
  about:plugins
page in Netscape.
Note that the function does not work with IE to find plugins as IE is
not supporting the navigator.mimeTypes array. To avoid throwing an
error the function returns false for IE in any case whether there is a
plugin(actually an active x control) for the mime type or not.

If you want to check with NN whether a certain plugin is installed you
can use the following function:

function pluginInstalled (pluginName) {
  for (var p = 0; p < navigator.plugins.length; p++)
    if (navigator.plugins[p].name.toLowerCase() ==
pluginName.toLowerCase())
      return true;
  return false;
}

Examples (plugin names can be found with about:plugins page):
alert(pluginInstalled('quicktime plug-in'))
alert(pluginInstalled('shockwave flash'))

The function returns false in IE in any case as
  navigator.plugins
is not supported in IE.


With IE you can check for a certain com object by trying to instantiate
it:
  var plugin = new ActiveXObject('Program.Id');
  if (plugin)
    // plugin is there and user (settings) allow it
For example you can test for Shockwave Flash with
  var swf = new ActiveXObject('ShockwaveFlash.ShockwaveFlash');
  if (swf)
    alert('Shockwave available');
  else
    alert('Shockwave unavailable');


