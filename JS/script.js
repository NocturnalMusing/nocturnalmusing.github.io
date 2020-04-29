// Whole Page

let goHome = document.querySelector('.homePage')

let showFolio = document.querySelector('.folioPage')
let showContact = document.querySelector('.contactPage')
let showAsa = document.querySelector('.aboutAsa')

// Oh We're Adding Another Thing Are We Fool? Fine

let blackieBlackie = document.getElementById('blackie')

blackieBlackie.addEventListener('mouseover', onBlackieHover)
blackieBlackie.addEventListener('mouseleave', onBlackieLeave)

function onBlackieHover() {
    blackieBlackie.setAttribute('src', 'Images/Asa 2.png')
}

function onBlackieLeave() {
    blackieBlackie.setAttribute('src', 'Images/Asa 1.png')
}


// My Porfolio Page

let portfolioPage = document.getElementById('portFolio')

portfolioPage.addEventListener('click', onFolioClick)

function onFolioClick() {
    showFolio.classList.add('show')
    goHome.classList.add('hide')
}

// The Contact Page

let contactPage = document.getElementById('contactMe')

contactPage.addEventListener('click', onContactClick)

function onContactClick() {
    showContact.classList.add('show')
    goHome.classList.add('hide')
}

// Asa's About Page

let asaPage = document.getElementById('aboutTheCat')

asaPage.addEventListener('click', onAsaClick)

function onAsaClick() {
    showAsa.classList.add('show')
    goHome.classList.add('hide')
}

// Close Button

let xButton = document.getElementById('closeButton')
let xButton2 = document.getElementById('closeButton2')
let xButton3 = document.getElementById('closeButton3')

xButton.addEventListener('click', onXClick)
xButton2.addEventListener('click', onXClick)
xButton3.addEventListener('click', onXClick)

console.log(xButton)

function onXClick(event) {
        showFolio.classList.remove('show')
        goHome.classList.remove('hide')
       
        showContact.classList.remove('show')
        goHome.classList.remove('hide')

        showAsa.classList.remove('show')
        goHome.classList.remove('hide')
}