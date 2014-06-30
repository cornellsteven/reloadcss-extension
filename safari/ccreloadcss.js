/**
 * Reload stylesheets without reloading page. Yep, that's it.
 *
 * @author Cornell Campbell <cornellsteven@gmail.com>
 */
function ReloadCSS(theMessageEvent) {
    var queryString = '?reload=' + new Date().getTime();
	var styles = document.getElementsByTagName('link');
	for (var i=0; i < styles.length; i++) {
		if (styles[i].rel == 'stylesheet') {
			styles[i].href = styles[i].href.replace(/\?.*|$/, queryString);
		};
	};
}

safari.self.addEventListener("message", ReloadCSS, false);