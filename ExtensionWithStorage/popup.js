window.onload = function(){
    chrome.storage.local.get(['count'], function(result) {
        
        var msg = "Number of tabs created so far : ";
        if(result.count == undefined){
             msg = msg + '0';
        }else{
             msg = msg + result.count;
        }

        document.getElementById('count').innerHTML = msg;
        
    });
}
