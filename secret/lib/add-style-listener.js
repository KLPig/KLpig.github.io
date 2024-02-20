document.getElementById('menu').addEventListener(
    'mouseover',
    function(){
        if(window.innerWidth > 600){
            document.getElementById('menu').style.width = '30%';
            document.getElementById('main').style.width = '70%';
        }
    }
)
document.getElementById('menu').addEventListener(
    'mouseleave',
    function(){
        if(window.innerWidth > 600){
            document.getElementById('menu').style.width = '5%';
            document.getElementById('main').style.width = '95%';
        }
    }
)