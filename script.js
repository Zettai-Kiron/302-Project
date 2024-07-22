const bar = document.getElementById('bar');
const close = document.getElementById('close');
const nav = document.getElementById('navbar');


// Opening the side menu on smaller devices
if (bar) {
    bar.addEventListener('click', () => {
        nav.classList.add('active')
    })
}


// Closing the side menu on smaller devices
if(close) {
    close.addEventListener('click', () => {
        nav.classList.remove('active');
    })
}