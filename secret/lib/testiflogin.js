if(localStorage.login == undefined)
    window.open('https://klpig.github.io/secret/lib/notlogin.html', '_self')
function updatefullscreen(){
    if(localStorage.fullscreen == 'true'){
        document.getElementById('main').className = 'fullscreen'
        document.getElementById('menu').className = 'fullscreen'
        document.getElementById('title').style.position = 'static'
    }else{
        document.getElementById('main').className = undefined
        document.getElementById('menu').className = undefined
        document.getElementById('title').style.position = 'sticky'
    }
}
setInterval(updatefullscreen, 10)