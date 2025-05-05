const loginText = document.querySelector(".title-text .login");
const loginForm = document.querySelector("form.login");
const loginBtn = document.querySelector("label.login");
const signupBtn = document.querySelector("label.signup");
const signupLink = document.querySelector("form .signup-link a");
signupBtn.onclick = (()=>{
 loginForm.style.marginLeft = "-50%";
 loginText.style.marginLeft = "-50%";
});
loginBtn.onclick = (()=>{
 loginForm.style.marginLeft = "0%";
 loginText.style.marginLeft = "0%";
});
signupLink.onclick = (()=>{
 signupBtn.click();
 return false;
});

document.addEventListener("DOMContentLoaded", function () {
    
    const loginForm = document.querySelector("form.login");
    const signupForm = document.querySelector("form.signup");

    if (!loginForm || !signupForm) {
        console.error("Forms not found! Make sure your class names are correct.");
        return;
    }

    function handleSubmit(event) {
        event.preventDefault(); 

        const inputs = event.target.querySelectorAll("input[type='text'], input[type='password']");
        let formData = {};
        inputs.forEach(input => {
            formData[input.placeholder] = input.value;
        });

        console.log("Form Submitted:", formData);

        setTimeout(() => {
            window.location.href = "index.html";
        }, 500);
    }

    loginForm.addEventListener("submit", handleSubmit);
    signupForm.addEventListener("submit", handleSubmit);
});

  