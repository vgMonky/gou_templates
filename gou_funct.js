
function onMenuClick() {
    var navbar = document.getElementById("navigation-bar");
    var responsive_class_name = "responsive";

    navbar.classList.toggle(responsive_class_name);
}

function sendEmail(){
    Email.send({
      Host : "smtp.elasticemail.com",
      Username : "victorgou.design@gmail.com",
      Password : "72EFB8A185FA7B31D65A7AFA8789BE0B3B5D",
      To : 'victorgou.design@gmail.com',
      From : 'andregoudschaal@gmail.com',
      Subject : "NEW GOU FORM",
      Body : "Name: " + document.getElementById("fullname").value 
          + "<br> Company: " + document.getElementById("company").value
          + "<br> Email: " + document.getElementById("email").value
          + "<br> Message: " + document.getElementById("message").value
    }).then(
      message => alert("Message sent succesfully")
    );
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
