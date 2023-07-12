
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