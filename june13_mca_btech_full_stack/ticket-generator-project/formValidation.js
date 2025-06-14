// hide all the errors
document.querySelectorAll(".error").forEach(error => {
    error.style.display = "none"
})

const form = document.getElementById("main");
const ticket = document.getElementById("ticket");

const avatarErrorContainer = document.getElementById("avatar-error");
const avatarErrorMessage = document.getElementById("avatar  -error-text");

const usernameErrorContainer = document.getElementById("username-error");
const usernameErrorMessage = document.getElementById("username-error-text");

const useremailErrorContainer = document.getElementById("useremail-error");
const useremailErrorMessage = document.getElementById("useremail-error-text");

const gusernameErrorContainer = document.getElementById("gusername-error");
const gusernameErrorMessage = document.getElementById("gusername-error-text");

const heading = document.getElementById("heading");
const tagline = document.getElementById("tagline");

const ticketName = document.getElementById("ticket-name");
const githubLink = document.getElementById("github");
const githubName = document.getElementById("github-name");
const ticketId = document.getElementById("ticket-id");
const ticketImage = document.getElementById("ticket-image");

form.addEventListener("submit", (e) => {
    e.preventDefault();
    let formErrors = 0;
    const formData = new FormData(e.target);

    const avatar = formData.get("avatar")
    const username = formData.get("username")
    const useremail = formData.get("useremail")
    const gusername = formData.get("gusername")



    // basic validation 

    //avatar
    if(avatar && avatar.size > 500 * 1024){
        avatarErrorContainer.style.display = "flex";
        avatarErrorMessage.innerText = "Avatar size exceeded"
        formErrors += 1
    }
    else{
        avatarErrorContainer.style.display = "none";
    }

    // User name
    if(!username){
        usernameErrorContainer.style.display = "flex";
        usernameErrorMessage.innerText = "Name can not be empty!"
        formErrors += 1
    }

    else if(username.length < 3){
        usernameErrorContainer.style.display = "flex";
        usernameErrorMessage.textContent = "Name must be at least 3 characters long"
        formErrors += 1
    }

    else{
        usernameErrorContainer.style.display = "none";
    }


    // Github User name
    if(!gusername){
        gusernameErrorContainer.style.display = "flex";
        gusernameErrorMessage.textContent = "Please provide github user name!"
        formErrors += 1
    }

    else{
        gusernameErrorContainer.style.display = "none";
    }


    // Email
    if(!useremail){          
        useremailErrorContainer.style.display = "flex";
        useremailErrorMessage.textContent = "Please provide email!"
        formErrors += 1
    }
    else if(!useremail.toLowerCase().match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)){
        useremailErrorContainer.style.display = "flex";
        useremailErrorMessage.textContent = "Please provide a valid email!"
        formErrors += 1
    }
    else{
        useremailErrorContainer.style.display = "none";
    }


    

    console.log(formErrors);

    if(formErrors > 0){
        return;
    }

    heading.innerText = `Congrats, ${username}!\n Your ticket is ready.`
    tagline.innerHTML = `We've emailed your ticket to <strong>${useremail}</strong> and will send updates in the run up to the event`;

    form.style.display = "none";
    ticket.style.display = "flex";

    ticketName.innerText = username;
    githubName.innerText = gusername;

    githubLink.setAttribute("href", `https://www.github.com/${gusername}`);

    ticketId.innerText = "#" + generateRandomString();


    if(avatar && avatar.name != ""){
        setImage(avatar);
    }

})

function generateRandomString() {
  const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
  let result = '';
  for (let i = 0; i < 6; i++) {
    result += chars.charAt(Math.floor(Math.random() * chars.length));
  }
  return result;
}

function setImage(file){
    const reader = new FileReader();
    reader.addEventListener('load', (event) => {
        ticketImage.src = event.target.result;
    });
    reader.readAsDataURL(file);
}