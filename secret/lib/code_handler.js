function handle_code(){
    element = document.getElementById('code')
    if(element.value =='HOME')
        url = 'https://klpig.github.io/secret/'
    else if(element.value == 'BAD-TOM')
        url = 'https://klpig.github.io/secret/secrets/bad_tom.html'
    else if(element.value == 'GOOD-THING')
        url = 'https://klpig.github.io/secret/secrets/never_gonna_give_you_up.html'
    else if(element.value == 'SPECIAL-SECRET')
        url = 'https://klpig.github.io/secret/secrets/secret_show.html'
    else if(element.value == 'ULB')
        url = 'https://klpig.github.io/secret/downloads/ulb.png'
    else if(element.value == 'RZB')
        url = 'https://klpig.github.io/secret/secrets/rzb.html'
    else if(element.value == 'COUNTDOWN')
        url = 'https://klpig.github.io/secret/secrets/countdown.html'
    else if(element.value == 'BIRD')
        url = 'https://klpig.github.io/secret/secrets/flappy_bird'
    else if(element.value == 'SCPO502')
        url = 'https://klpig.github.io/secret/secrets/scpo502.html'
    else if(element.value == 'BROWSER')
        url = 'https://klpig.github.io/secret/secrets/browser'
    else
        return
    openWindow(url);
}

function openWindow(url){
    window.open(url, '_parent', "", true);
}

function remove_code(){
    url = document.getElementById('url')
    url.href = ''
}
