arr = document.getElementById('arrow')
menu = document.getElementById('menu')

state = true
arr.className = 'out'

arr.addEventListener(
    'click',
    function(){
        if(!state){
            arr.className = 'out'
            arr.innerHTML = '>'
            menu.className = 'out'
            setTimeout(function(){arr.innerHTML = '<'}, 1000)
        }else{
            arr.className = 'in'
            arr.innerHTML = '<'
            menu.className = 'in'
            setTimeout(function(){arr.innerHTML = '>'}, 1000)
        }
        state = !state;
    }
)

localStorage.site = 'secrets/empty.html'


if(sessionStorage.GETsite != undefined){
    localStorage.site = sessionStorage.GETsite
}

setInterval(
    function(){
        scr = document.getElementById('main').childNodes[0]
        if(scr.src != localStorage.site)
            scr.src = localStorage.site
    }, 1000
)