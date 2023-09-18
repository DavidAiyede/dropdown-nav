var toggs = document.querySelector(".down-arrow")
var toggle = document.querySelector(".up-arrow")
function Dropdown(){
    const tog = document.querySelector(".dropdown")
    tog.classList.toggle("menu") 
    toggs.style.display = "initial"
    toggle.style.display = "none"
}
function Dropdowns(){
    const tog = document.querySelector(".dropdown")
    tog.classList.toggle("menu") 
    toggs.style.display = "none"
    toggle.style.display = "initial"
}
var toggss = document.querySelector(".downs-arrow")
var togglee = document.querySelector(".ups-arrow")
function Dropins1(){
    var togs = document.querySelector(".dropin")
    togs.classList.toggle("menu2")
    toggss.style.display = "initial"
    togglee.style.display = "none"
}  
function Dropins2(){
    var togs = document.querySelector(".dropin")
    togs.classList.toggle("menu2") 
    toggss.style.display = "none"
    togglee.style.display = "initial"
}

const mainMenu = document.querySelector(".mainMenu")
const closeMenu = document.querySelector(".closeMenu")
const openMenu = document.querySelector(".openMenu")
const body = document.querySelector("body")

openMenu.addEventListener("click", show);
closeMenu.addEventListener("click" ,close);

function show(){
    mainMenu.style.display ="flex";
    mainMenu.style.top ="0";
    body.style.backgroundColor = "rgb(193, 190, 197)"
    body.style.transition = ".3s"
}
function close(){
    mainMenu.style.top = "-300%"
    body.style.backgroundColor = "white"
    body.style.transition = ".3s"
}
