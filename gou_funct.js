
function onMenuClick() {
    var navbar = document.getElementById("navigation-bar");
    var responsive_class_name = "responsive";

    navbar.classList.toggle(responsive_class_name);
}


let card = document.getElementsByClassName("card")
console.log(card)
let description = document.getElementsByClassName("description")
console.log(description)


function textShow0() {description[0].style.display = "block" }
function textNone0() {description[0].style.display = "none" }
function textShow1() {description[1].style.display = "block" }
function textNone1() {description[1].style.display = "none" }
function textShow2() {description[2].style.display = "block" }
function textNone2() {description[2].style.display = "none" }
