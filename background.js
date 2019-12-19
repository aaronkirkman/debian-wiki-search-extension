browser.contextMenus.create({
    id: "log-selection",
    title: "Search Debian wiki",
    contexts: ["selection"]
});

browser.contextMenus.onClicked.addListener(function(info, tab) {
    if (info.menuItemId == "log-selection") {
        var selectedText = info.selectionText;
        var url = "https://wiki.debian.org/FrontPage?action=fullsearch&context=180&value=" + encodeURIComponent(selectedText) + "&titlesearch=Titles"
        chrome.tabs.create({
            url: url,
            active: true
        });
    };
});