// upload box magic
const uploadBox = document.getElementById("upload-box");
const avatarUpload = document.getElementById("avatar");
const avatarImage = document.getElementById("avatar-image");
const uploadButtons = document.getElementById("upload-buttons");

const removeAvatar = document.getElementById("remove-avatar");
const changeAvatar = document.getElementById("change-avatar");


const uploadBoxClick = uploadBox.addEventListener("click", () => avatarUpload.click());

avatarUpload.addEventListener("change", () => {
    //check if we have a file
    if(avatarUpload.files.length == 0) return;
    //upload the file to show in the image
    uploadFile(avatarUpload.files[0]);
})


// drag and drop
const uploadBoxDragover = uploadBox.addEventListener('dragover', (e) => {
    e.preventDefault();
    uploadBox.classList.add('dragover');
});

const uploadBoxDragleave = uploadBox.addEventListener('dragleave', () => {
    uploadBox.classList.remove('dragover');
});

const uploadBoxDrop = uploadBox.addEventListener('drop', (e) => {
    e.preventDefault();
    uploadBox.classList.remove('dragover');

    const files = e.dataTransfer.files;
    if (files.length > 0) {
        avatarUpload.files = files;
        uploadFile(files[0]);
    }
});

const uploadFile =(file) => {
    const reader = new FileReader();
    reader.addEventListener('load', (event) => {
        avatarImage.src = event.target.result;
    });
    reader.readAsDataURL(file);
    //this is not a good practice to mix one functionality with another and destoying atomicity but for a small application like this, it works
    uploadButtons.style.display = "flex";

    //remove all the eventlisteners in the box
    uploadBox.removeEventListener("click", uploadBoxClick)
    uploadBox.removeEventListener("dragover", uploadBoxDragover)
    uploadBox.removeEventListener("dragleave", uploadBoxDragleave)
    uploadBox.removeEventListener("drop", uploadBoxDrop)  
}


removeAvatar.addEventListener("click", (e) => {
    e.preventDefault();
    avatarUpload.value = ''; //reset the input field
    avatarImage.src = "./assets/images/icon-upload.svg"; //change the icon image
    uploadButtons.style.display = "none";
    e.stopPropagation(); //stop the click propagation to the parent div
})

changeAvatar.addEventListener("click", (e) => {
    e.preventDefault();
    avatarUpload.click();
    e.stopPropagation(); //stop the click propagation to the parent div
})