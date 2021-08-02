
// Global var
var onoff = [0,0,0];

// On start
window.onload = function(){ 
            
    var validate = document.getElementsByClassName("btn-validate")[0]
    validate.onclick = function() {
        var loginContent = document.getElementsByClassName("login-content")[0]
        setTimeout(function(){
                loginContent.style.transform = "rotateY(180deg)"
        }, 500)
        setTimeout(function(){
                loginContent.style.opacity = 0;
        }, 1000)
        setTimeout(function(){
                loginContent.style.display = "none";
        }, 1500)
        setTimeout(function(){
                createSection()
        }, 2000)        
    }

}