vars = top.location.href.split('?')[1].split('&')

for(var i = 0; i < vars.length; i++){
    sessionStorage.setItem('GET' + vars[i].split('=')[0], vars[i].split('=')[1])
}