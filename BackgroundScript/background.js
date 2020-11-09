chrome.tabs.onCreated.addListener(function(){
    alert("A tab was created");
});

chrome.tabs.onRemoved.addListener(function(){
    alert("A tab was closed");
});

chrome.bookmarks.onCreated.addListener(function(){
    alert("Bookmark added");
});