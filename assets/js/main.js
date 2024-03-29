
const submitButtom = document.getElementById('submit_Buttom');


// ----------------------------- Verifications -------------------------------

const verifyUser = () => {
    const input = document.getElementById('input_user');
    const user = input.value;
    const cantContain = " ";

    userErrors(user);

    if(!user.includes(cantContain) && user!="") 
        return true;
    else 
        return false;
    
}

const verifyEmail = () => {
    const input = document.getElementById('input_email');
    const email = input.value;
    const regex = /^[a-z0-9.]+@gmail+\.com$/i;

    emailErrors(email);
    const valid = regex.test(email);

    if(valid)
        return true;
    else 
        return false;
}

const verifyPassword = () => {
    const input = document.getElementById('input_password');
    const password = input.value;
    const regex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[$*&@#])[0-9a-zA-Z$*&@#]{8,}$/
    
    passwordErrors(password);
    const valid = regex.test(password);

    if(valid) 
        return true;
    else 
        return false;
}

const validSubmitButtom = () => {
    submitButtom.classList.remove('account_created');
    submitButtom.textContent = 'Sign In';

    const email = verifyEmail();
    const user = verifyUser();
    const password = verifyPassword();

    if(email && user && password){
        submitButtom.removeAttribute('disabled');
        return true;
    }
    else {
        submitButtom.setAttribute('disabled', 'disabled');
        return false;
    }

}

function validPasswordVisibility() {
    const visibility_button = document.getElementById('change-visibility-button');
    const form_password = document.getElementById('input_password');

    if(visibility_button.textContent == 'visibility_off') {
        form_password.type = 'text';
        visibility_button.textContent = 'visibility';
    }
    else {
        form_password.type = 'password';
        visibility_button.textContent = 'visibility_off';
    }

}

// ---------------------------- Get Errors ---------------------------

function userErrors(user) {
    const empty_user_error = document.getElementById('empty-user-error');
    const user_space_error = document.getElementById('user-space-error');
    
    if(user == "")
        empty_user_error.style.display = 'block';
    else 
        empty_user_error.style.display = 'none';

    if(user.includes(' '))
        user_space_error.style.display = 'block';
    else
        user_space_error.style.display = 'none';
    
}

function emailErrors(email) {
    const regex = /@gmail+\.com$/i;
    const no_gmail_error = document.getElementById('no-gmail-error');
    const empty_email_error = document.getElementById('empty-email-error');
    const email_space_error = document.getElementById('email-space-error');

    if(!regex.test(email)) no_gmail_error.style.display = 'block';
    else no_gmail_error.style.display = 'none';

    if(email == "") empty_email_error.style.display = 'block';
    else empty_email_error.style.display = 'none';

    if(email.includes(" ")) email_space_error.style.display = 'block';
    else email_space_error.style.display = 'none';

}

function passwordErrors(password) {
    const character_password_error = document.getElementById('character-password-error'); 
    const uppercase_password_error = document.getElementById('uppercase-password-error'); 
    const lowercase_password_error = document.getElementById('lowercase-password-error'); 
    const number_password_error = document.getElementById('number-password-error');
    const symbol_password_error = document.getElementById('symbol-password-error');
    const password_space_error = document.getElementById('password-space-error');
    let regex;

    
    if(password.includes(" ")) password_space_error.style.display = 'block';
    else password_space_error.style.display = 'none';

    if(password.length < 8) character_password_error.style.display = 'block';
    else character_password_error.style.display = 'none';

    regex = /[a-z]/;
    if(!regex.test(password)) lowercase_password_error.style.display = 'block';
    else lowercase_password_error.style.display = 'none';

    regex = /[A-Z]/;
    if(!regex.test(password)) uppercase_password_error.style.display = 'block';
    else uppercase_password_error.style.display = 'none';
    
    regex = /[$*&@#]/;
    if(!regex.test(password)) symbol_password_error.style.display = 'block';
    else symbol_password_error.style.display = 'none';

    regex = /[0-9]/;
    if(!regex.test(password)) number_password_error.style.display = 'block';
    else number_password_error.style.display = 'none';

}


// ---------------------------------- Main -------------------------------------

const __init__ = () => {
    const form_user = document.getElementById('input_user');
    const form_email = document.getElementById('input_email');
    const form_password = document.getElementById('input_password'); 
    const visibility_button = document.getElementById('change-visibility-button');


    form_user.addEventListener('input', validSubmitButtom);
    form_email.addEventListener('input', validSubmitButtom);
    form_password.addEventListener('input', validSubmitButtom);
    visibility_button.addEventListener('click', validPasswordVisibility);


    submitButtom.setAttribute('disabled', 'disabled');

    if(submitButtom){
        submitButtom.addEventListener('click', (e) => {
            e.preventDefault();

            if(validSubmitButtom){
                submitButtom.textContent = 'Account Created';
                submitButtom.classList.add('account_created');
            }
            else
                // submitButtom.classList.remove('account_created');
                console.log('n');
        })
    }
}

window.onload = __init__;