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
        return
    }
)

backButton = document.createElement('div')
backButton.innerHTML = 'BACK'
backButton.className = 'header-button'

backButton.addEventListener(
    'onclick',
    function(){
        return
    }
)

header.appendChild(homeButton)
header.appendChild(backButton)