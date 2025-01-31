//hna 3yatna 3la ga3 les element bax khdamin m3a lpage dyalna
const title = document.getElementById("login-title");
const name = document.getElementById("name");
const email = document.getElementById("email");
const confirmPassword = document.getElementById("confirm_password");
const goLogin = document.getElementById("goLogin");
const goRegister = document.getElementById("goRegister");   
const logBtn = document.getElementById("logBtn");

//hna ay haja katkhdm m3a ndkhool lpage dyalna
goLogin.style.display = "block";
goRegister.style.display = "none";
logBtn.innerHTML = "Register";

//ay haja bghitha tkhdam fax nwrak 3la register
goRegister.addEventListener("click", () => {
    title.innerHTML = "Register";
    name.style.display = "block";
    email.style.display = "block";
    confirmPassword.style.display = "block";
    goLogin.style.display = "block";
    goRegister.style.display = "none";
    logBtn.innerHTML = "Register";
});
//ay haja bghitha tkhdam fax nwrak 3la login
goLogin.addEventListener("click", () => {  
    title.innerHTML = "Login";
    name.style.display = "none";
    email.style.display = "none";
    confirmPassword.style.display = "none";
    goLogin.style.display = "none";
    goRegister.style.display = "block";
    logBtn.innerHTML = "Login";


 });

