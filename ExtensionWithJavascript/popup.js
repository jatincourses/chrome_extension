
document.getElementById('submit').onclick = function(){
    var username = document.getElementById('user').value;
    document.getElementById('greet').innerHTML = 'Hello '+username;
}