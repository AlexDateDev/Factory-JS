
function joinParams(params) {
    var s = [];
    for (var k in params) s.push(encodeURIComponent(k) + "=" + encodeURIComponent(params[k]));
    return s.join('&');
}