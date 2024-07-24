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


// JavaScript for Cart toggle menu
var MenuItems = document.getElementById("MenuItems");

        MenuItems.style.maxHeight = "0px";

        function menutoggle(){
           if(MenuItems.style.maxHeight == "0px")
                {
                    MenuItems.style.maxHeight = "200px";
                } 
            else {
                MenuItems.style.maxHeight = "0px";
            }
        }


// JavaScript for the Account page forms
var LoginForm = document.getElementById("LoginForm");
        var RegisterForm = document.getElementById("RegisterForm");
        var Indicator = document.getElementById("Indicator");

            function register(){
                RegisterForm.style.transform = "translateX(0px)";
                LoginForm.style.transform = "translateX(0px)";
                Indicator.style.transform = "translateX(100px)";
            }

            function login(){
                RegisterForm.style.transform = "translateX(300px)";
                LoginForm.style.transform = "translateX(300px)";
                Indicator.style.transform = "translateX(0px)";
            }