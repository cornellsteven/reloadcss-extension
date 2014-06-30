chrome.browserAction.onClicked.addListener(function(tab) {
    chrome.tabs.executeScript({
        code: 'var queryString = "?reload=" + new Date().getTime(); var styles = document.getElementsByTagName("link"); for (var i=0; i < styles.length; i++) { if (styles[i].rel == "stylesheet") { styles[i].href = styles[i].href.replace(/\\?.*|$/, queryString) }}'
    });
});