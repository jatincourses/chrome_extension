chrome.runtime.onMessage.addListener(function(request, sender, sendResponse){
    if(request.todo == "Change Color"){
        document.getElementsByTagName('h1')[0].style.color = 'green';
    }
});