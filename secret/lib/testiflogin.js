if(localStorage.login == undefined)
    window.open('https://klpig.github.io/secret/lib/notlogin.html', '_self')
function updatefullscreen(){
    if(localStorage.fullscreen == 'true'){
        document.getElementById('main').className = 'fullscreen'
        document.getElementById('title').style.position = 'fixed'
        document.getElementById('title').style.height = '10%'
    }else{
        document.getElementById('main').className = undefined
        document.getElementById('title').style.position = 'sticky'
        document.getElementById('title').style.height = '80px'
    }
}
setInterval(updatefullscreen, 10)