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
                for(var i = loginElement.length - 1; i >= 0; i--){
                    loginElement[i].style.animation = 'login-element-toggle 1s'
                    loginElement[i].className = 'login-element-toggle'
                }
            }, 1000)
        setTimeout(
            function(){
                loginElement = document.getElementsByClassName('login-element-toggle')
                for(var i = loginElement.length - 1; i >= 0; i--){
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
            usrname.disabled = true;
            logincode.disabled = false;
        }else if(usrname.value == 'guest'){
            usrname.disabled = true;
            logincode.value = 'secret';
            password.value = '1145114';
            button.disabled = false;
        }
    }
)

logincode.addEventListener(
    'input',
    function(){
        if(logincode.value == 'secret' || logincode.value == 'document'){
            logincode.disabled = true;
            password.disabled = false;
        }
    }
)

password.addEventListener(
    'input',
    function(){
        if((usrname.value == 'visitor213' && password.value == '1145114') || 
        (usrname.value == 'klpig' && password.value == 'KLpig213_')){
            password.disabled = true;
            button.disabled = false;
        }
    }
)
button.addEventListener(
    'click',
    function(){
        localStorage.login = true;
        window.open('https://klpig.github.io/' + logincode.value, '_self')
    }
)