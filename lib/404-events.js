bg = document.getElementById('bg')
login = document.getElementById('login')

toggled = false;

setTimeout(
    function(){
        if(toggled) return;
        toggled = true;
        bg.className = 'toggle';
        login.className = 'toggle';
        document.getElementById('href').innerHTML = top.location.href
        setTimeout(
            function(){
                loginElement = document.getElementsByClassName('login-element')
                for(var i = 4; i >= 0; i--){
                    loginElement[i].style.animation = 'login-element-toggle 1s'
                    loginElement[i].className = 'login-element-toggle'
                }
            }, 1000)
        setTimeout(
            function(){
                loginElement = document.getElementsByClassName('login-element-toggle')
                for(var i = 4; i >= 0; i--){
                    loginElement[i].removeAttribute('style')
                }
            }, 2000)
    }, 500
)
