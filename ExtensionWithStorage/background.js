chrome.tabs.onCreated.addListener(function(){
    var total = 0;

    chrome.storage.local.get(['count'], function(result) {
        if(result.count != undefined){
            total = parseInt(result.count);
        }
        total = total + 1;
        chrome.storage.local.set({count: total});
    });
    
});