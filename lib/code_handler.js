function handle_code(){
    element = document.getElementById('code')
    url = document.getElementById('main')
    if(element.value == 'BAD-TOM')
        url.src = 'https://jcw87.github.io/c2-sans-fight'
    else if(element.value == 'GOOD-THING')
        url.src = 'secrets/never_gonna_give_you_up.html'
    else if(element.value == 'SPECIAL-SECRET')
        url.src = 'secrets/SECRET.html'
    else if(element.value == 'ULB')
        url.src = 'downloads/ulb.png'
    else
        url.src = 'https://klpig.github.io'
}

function remove_code(){
    url = document.getElementById('url')
    url.href = ''
}
