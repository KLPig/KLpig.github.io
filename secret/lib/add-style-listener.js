document.getElementById('menu').addEventListener(
    'mouseover',
    function(){
        if(window.innerWidth > 600 && !localStorage.fullscreen){
            document.getElementById('menu').style.width = '30%';
            document.getElementById('main').style.width = '70%';
        }
    }
)
document.getElementById('menu').addEventListener(
    'mouseleave',
    function(){
        if(window.innerWidth > 600 && !localStorage.fullscreen){
            document.getElementById('menu').style.width = '15%';
            document.getElementById('main').style.width = '85%';
        }
    }
)