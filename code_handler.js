function handle_code(){
    element = document.getElementById('code')
    url = document.getElementById('url')
    if(element.value == 'BAD-TOM')
        url.href = 'https://jcw87.github.io/c2-sans-fight'
    else if(element.value == 'GOOD-THING')
        url.href = 'secrets/never_gonna_give_you_up.html'
    else if(element.value == 'SPECIAL-SECRET')
        url.href = 'secrets/SECRET.html'
    else
        url.href = 'https://klpig.github.io'
}

function remove_code(){
    url = document.getElementById('url')
    url.href = ''
}
