// Email JS

function validate() {
    let name = document.querySelector(".text-box");
    let email = document.querySelector(".email");
    let msg = document.querySelector(".message");
    let sendBtn = document.querySelector(".send-btn");

    sendBtn.addEventListener('click',(e) => {
        e.preventDefault();
        if (name.value == "" || email.value == "" || msg.value == "") {
            emptyerror();
        } else {
            sendmail(name.value, email.value, msg.value);
            success();
        }   
    })
    
}

validate();

function sendmail(name, email, msg) {
    emailjs.send("service_abbiqhd","template_almh0sn",{
        to_name: name,
        from_name: email,
        message: msg,
        });
}

function emptyerror(){
    swal({
        title: "Oh No ...",
        text: "Fields cannot be empty!",
        icon: "error",
    })
}

function success(){
    swal({
        title:"Email sent successfully!",
        text: "We try to reply in 12 hours!",
        icon: "success",
    })
}