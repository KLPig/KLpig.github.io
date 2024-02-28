header = document.getElementById('header')

title = document.createElement('p')
title.innerHTML = 'KL document'
title.id = 'header-title'

header.appendChild(title)

buttons = document.createElement('div')
buttons.id = 'header-buttons'

homeButton = document.createElement('div')
homeButton.innerHTML = 'HOME'
homeButton.className = 'header-button'

homeButton.addEventListener(
    'click',
    function(){
        window.open('../klpig/', '_self')
    }
)
contentButton = document.createElement('div')
contentButton.innerHTML = 'CONTENT'
contentButton.className = 'header-button'

contentButton.addEventListener(
    'click',
    function(){
        alert('The content aren\'t well developed now.')
    }
)

backButton = document.createElement('div')
backButton.innerHTML = 'BACK'
backButton.className = 'header-button'

backButton.addEventListener(
    'click',
    function(){
        window.open('../../index.html', '_self')
    }
)


buttons.appendChild(homeButton)
buttons.appendChild(contentButton)
buttons.appendChild(backButton)

header.appendChild(buttons)