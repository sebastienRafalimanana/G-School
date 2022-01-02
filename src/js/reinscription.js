const button_activate = document.getElementsByClassName('active-button')
const Section = document.getElementsByClassName('Section')

//

button_activate[0].addEventListener('click', () => {
    Section[0].classList.add('active');
    Section[1].classList.remove('active');
    button_activate[0].classList.add('active');
    button_activate[1].classList.remove('active')
})
button_activate[1].addEventListener('click', () => {
    Section[1].classList.add('active');
    Section[0].classList.remove('active')
    button_activate[1].classList.add('active');
    button_activate[0].classList.remove('active')
})
