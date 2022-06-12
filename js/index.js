let btnLogin = document.querySelector('#btnLogin');
let userName = document.querySelector(`#userName`);
let password = document.querySelector('#password');
let admin = "admin";
let adminPw = "password";

btnLogin.addEventListener(`click`,()=>{
    // checking username
    if(userName.value==''){
        alert(`Please Enter Your Username!`);
        return;
    }
    else if(userName.value!=admin){
        alert(`Username does not exist`);
        return;
    }
    // checking password
    if(password.value==''){
        alert(`Please Enter Your Password!`);
        return;
    }
    else if(password.value!=adminPw){
        alert(`Incorrect Password!`);
        return;
    }
    window.location.href="patientinfo.html"
})