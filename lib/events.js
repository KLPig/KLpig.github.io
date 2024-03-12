  bg = document.getElementById('bg')
login = document.getElementById('login')

toggled = false;

document.addEventListener(
    'click', 
    function(){
        if(toggled) return;
        toggled = true;
        bg.className = 'toggle';
        login.className = 'toggle';
        setTimeout(
            function(){
                loginElement = document.getElementsByClassName('login-element')
                for(var i = 3; i >= 0; i--){
                    loginElement[i].style.animation = 'login-element-toggle 1s'
                    loginElement[i].className = 'login-element-toggle'
                }
            }, 1000)
        setTimeout(
            function(){
                loginElement = document.getElementsByClassName('login-element-toggle')
                for(var i = 3; i >= 0; i--){
                    loginElement[i].removeAttribute('style')
                }
            }, 2000)
    }
)

usrname = document.getElementById('usr')
logincode = document.getElementById('code')
password = document.getElementById('pwd')
button = document.getElementById('btn')

usrname.addEventListener(
    'input',
    function(){
        if(usrname.value == 'klpig' || usrname.value == 'visitor213'){
            logincode.disabled = false;
            loginElement = document.getElementsByClassName('login-element-toggle')
            for(var i = 3; i >= 0; i--){
                loginElement[i].className = 'login-element-leave';
            }
            setTimeout(
                function(){
                    loginElement = document.getElementsByClassName('login-element')
                    for(var i = 3; i >= 0; i--){
                        loginElement[i].style.animation = 'login-element-toggle 1s'
                        loginElement[i].className = 'login-element-toggle'
                    }
                }, 1000)
            setTimeout(
                function(){
                    loginElement = document.getElementsByClassName('login-element-toggle')
                    for(var i = 3; i >= 0; i--){
                        loginElement[i].removeAttribute('style')
                    }
                }, 2000)
		}
    }
)

logincode.addEventListener(
    'input',
    function(){
        if(logincode.value == 'secret' || logincode.value == 'document'){
            loginElement = document.getElementsByClassName('login-element-toggle')
            for(var i = 3; i >= 0; i--){
                loginElement[i].className = 'login-element-leave';
            }
            password.disabled = false;
            setTimeout(
                function(){
                    loginElement = document.getElementsByClassName('login-element')
                    for(var i = 3; i >= 0; i--){
                        loginElement[i].style.animation = 'login-element-toggle 1s'
                        loginElement[i].className = 'login-element-toggle'
                    }
                }, 1000)
            setTimeout(
                function(){
                    loginElement = document.getElementsByClassName('login-element-toggle')
                    for(var i = 3; i >= 0; i--){
                        loginElement[i].removeAttribute('style')
                    }
                }, 2000)
        }
    }
)

password.addEventListener(
    'input',
    function(){
        if((usrname.value == 'visitor213' && password.value == '1145114') || 
        (usrname.value == 'klpig' && password.value == 'KLpig213_')){
            loginElement = document.getElementsByClassName('login-element-toggle')
            for(var i = 3; i >= 0; i--){
                loginElement[i].className = 'login-element-leave';
            }
            password.disabled = false;
            setTimeout(
                function(){
                    localStorage.login = usrname.value;
                    window.open('https://klpig.github.io/' + logincode.value, '_self')
                }, 1000)
        }
    }
)
button.addEventListener(
    'click',
    function(){
        window.open('https://klpig.github.io/' + logincode.value, '_self')
    }
)
