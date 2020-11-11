window.onload = function(){
    var h1_tag = document.getElementsByTagName('h1')[0];
    if(h1_tag != undefined){
        chrome.runtime.sendMessage({message: "bookmark"});
    }
}