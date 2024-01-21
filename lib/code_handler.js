function handle_code(){
    element = document.getElementById('code')
    if(element.value =='HOME')
        url = 'https://klpig.github.io/welcome.html'
    else if(element.value == 'BAD-TOM')
        url = 'https://klpig.github.io/secrets/bad_tom.html'
    else if(element.value == 'GOOD-THING')
        url = 'https://klpig.github.io/secrets/never_gonna_give_you_up.html'
    else if(element.value == 'SPECIAL-SECRET')
        url = 'https://klpig.github.io/secrets/secret_show.html'
    else if(element.value == 'ULB')
        url = 'https://klpig.github.io/downloads/ulb.png'
    else if(element.value == 'RZB')
        url = 'https://klpig.github.io/secrets/rzb.html'
    else if(element.value == 'COUNTDOWN')
        url = 'https://klpig.github.io/secrets/countdown.html'
    else
        url = 'https://klpig.github.io'
    openWindow(url);
}

function openWindow(url){
    window.open(url, '_parent', "", true);
}

function remove_code(){
    url = document.getElementById('url')
    url.href = ''
}
