chrome.runtime.onMessage.addListener(
function(request, sender, sendResponse) {
    if(request.message == "bookmark"){
        chrome.tabs.query({active: true, currentWindow: true}, tabs => {
            let urls = tabs[0].url;
            chrome.bookmarks.create({url : urls, title: "Bookmark Documentation Page"});
        });
    }
});