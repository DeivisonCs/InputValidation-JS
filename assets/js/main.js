
// const FORM_SUBMIT = document.getElementById('sign_in_form');

// FORM_SUBMIT.addEventListener('submit', (e) => {
//     e.preventDefault();

//     const form_user = document.getElementById('input_user');
//     const form_email = document.getElementById('input_email');
//     const form_password = document.getElementById('input_password');
    
//     const USER = form_user.value;
//     const EMAIL = form_email.value;
//     const PASSWORD = form_password.value;

//     console.log(USER);
//     console.log(EMAIL);
// })

const submitButtom = document.getElementById('submit_Buttom');

const verifyUser = (user) => {
    const input = user.currentTarget.value;
    const cantContain = " ";

    if(!input.includes(cantContain) && input!=0) 
        submitButtom.classList.add('ready');

    else 
        submitButtom.classList.remove('ready')
    
}

const verifyEmail = (email) => {
    const input = email.currentTarget.value;
    const regex = /^[a-z0-9.]+@gmail+\.com$/i;

    const valid = regex.test(input);

    // console.log(valid);
    if(valid)
        submitButtom.classList.add('ready');
    else 
        submitButtom.classList.remove('ready')
}

const verifyPassword = (password) => {
    const input = password.currentTarget.value;
    const regex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[$*&@#])[0-9a-zA-Z$*&@#]{8,}$/
    
    const valid = regex.test(input);

    if(valid) {
        console.log(input);
    }   
}

const __init__ = () => {
    const form_user = document.getElementById('input_user');
    const form_email = document.getElementById('input_email');
    const form_password = document.getElementById('input_password'); 

    form_user.addEventListener('input', verifyUser);
    form_email.addEventListener('input', verifyEmail);
    form_password.addEventListener('input', verifyPassword);

}


window.onload = __init__;