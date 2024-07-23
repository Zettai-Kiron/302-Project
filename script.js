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

// JavaScript for single product shopping page Small Images
var MainImg = document.getElementById("MainImg");     
var smallimg = document.getElementsByClassName("small-img");

smallimg[0].onclick = function(){
    MainImg.src = smallimg[0].src;
}
smallimg[1].onclick = function(){
    MainImg.src = smallimg[1].src;
}
smallimg[2].onclick = function(){
    MainImg.src = smallimg[2].src;
}
smallimg[3].onclick = function(){
    MainImg.src = smallimg[3].src;
}