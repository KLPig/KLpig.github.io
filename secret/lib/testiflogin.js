const date = new Date()
var nt = Number(date.getFullYear()) * 7 + Number(date.getMonth()) * 11 + Number(date.getDay())

if(localStorage.login == undefined)
    window.open('https://klpig.github.io/secret/lib/notlogin', '_self')
else if(Number(localStorage.login) != nt && !(usrname.value == 'klpig' || usrname.value == 'visitor213'))
    window.open('https://klpig.github.io/secret/lib/notlogin', '_self')
