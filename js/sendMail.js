function validBtn() {
    textBtn = document.getElementById("clickMe")
    document.getElementById("clickMe").innerHTML = "Mail envoyé"
    textBtn.style.color = "#20c997" 
}
function sendMail() {
    const check1 = document.getElementById("inlineCheckbox1").value
    const check2 = document.getElementById("inlineCheckbox2").value
    const check3 = document.getElementById("inlineCheckbox3").value
    const check = ""+check1+""+check2+""+check3 ; 
    var params = {
        name: document.getElementById("name").value,
        email: document.getElementById("email").value,
        message: document.getElementById("message").value,
        contenue : check
    };
    const serviceID = "service_fx15tpj";
    const templateID = "template_2pcsllg";
    emailjs.send(serviceID,templateID,params)
    .then(function(res) {
        document.getElementById("name").value = "";
        document.getElementById("email").value = "";
        document.getElementById("message").value = "";
        validBtn()
    })
    .catch((err) => console.log(err));
}

