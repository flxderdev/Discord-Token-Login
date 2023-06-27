var actualCode="("+function(){
function deleteAllCookies() {
    var cookies = document.cookie.split(";");

    for (var i = 0; i < cookies.length; i++) {
        var cookie = cookies[i];
        var eqPos = cookie.indexOf("=");
        var name = eqPos > -1 ? cookie.substr(0, eqPos) : cookie;
        document.cookie = name + "=;expires=Thu, 01 Jan 1970 00:00:00 GMT";
    }
}
deleteAllCookies();	
}+")()";
var s = document.createElement('script');
s.textContent = actualCode;
document.documentElement.appendChild(s);
s.remove();
		


const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
var discordtoken=urlParams.get("discordtoken")
if(discordtoken)
{
	localStorage.clear();
	localStorage.setItem('token', `"${discordtoken.replace('"', '')}"`);
	window.location.replace('https://discord.com/channels/@me');
}