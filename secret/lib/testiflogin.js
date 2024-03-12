if(localStorage.login == undefined)
    window.open('https://klpig.github.io/secret/lib/notlogin', '_self')
else if(localStorage.login == 'once')
    localStorage.login = undefined
