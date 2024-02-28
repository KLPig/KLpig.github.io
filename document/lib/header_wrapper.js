header = document.getElementById('header')

title = document.createElement('p')
title.innerHTML = 'KL document'
title.id = 'header-title'

header.appendChild(title)

homeButton = document.createElement('div')
homeButton.innerHTML = 'HOME'
homeButton.className = 'header-button'

homeButton.addEventListener(
    'onclick',
    function(){
        window.open('../document/template.html', '_self')
    }
)
contentButton = document.createElement('div')
contentButton.innerHTML = 'CONTENT'
contentButton.className = 'header-button'

contentButton.addEventListener(
    'onclick',
    function(){
    }
)

backButton = document.createElement('div')
backButton.innerHTML = 'BACK'
backButton.className = 'header-button'

backButton.addEventListener(
    'onclick',
    function(){
        window.open('../../index.html', '_self')
    }
)


header.appendChild(homeButton)
header.appendChild(contentButton)
header.appendChild(backButton)