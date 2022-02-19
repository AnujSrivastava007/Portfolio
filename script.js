// Side Navigation Menu Code
let menubtn = document.querySelector(".menu-btn");
let cancelbtn = document.querySelector(".cancel-btn");
let navbar = document.querySelector(".navbar");

menubtn.onclick = function(){
    menubtn.style.opacity = "0";
    menubtn.style.pointerEvents = "none";
    navbar.classList.add("active");
}
cancelbtn.onclick = function(){
    menubtn.style.opacity = "1";
    menubtn.style.pointerEvents = "auto";
    navbar.classList.remove("active");
}
// Sticky Navigation Menu Code
let nav = document.querySelector("nav");
let val;
window.onscroll = function(){
    if(document.documentElement.scrollTop>20){
        nav.classList.add("sticky");
    }
    else{
        nav.classList.remove("sticky");
    }
    
}