
const submitButtom = document.getElementById('submit_Buttom');

const verifyUser = () => {
    const input = document.getElementById('input_user');
    const user = input.value;
    const cantContain = " ";

    if(!user.includes(cantContain) && user!="") 
        return true;
    else 
        return false;
    
}

const verifyEmail = () => {
    const input = document.getElementById('input_email');
    const email = input.value;
    const regex = /^[a-z0-9.]+@gmail+\.com$/i;

    const valid = regex.test(email);

    if(valid && email != " ")
        return true;
    else 
        return false;
}

const verifyPassword = () => {
    const input = document.getElementById('input_password');
    const password = input.value;
    const regex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[$*&@#])[0-9a-zA-Z$*&@#]{8,}$/
    
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

const __init__ = () => {
    const form_user = document.getElementById('input_user');
    const form_email = document.getElementById('input_email');
    const form_password = document.getElementById('input_password'); 

    form_user.addEventListener('input', validSubmitButtom);
    form_email.addEventListener('input', validSubmitButtom);
    form_password.addEventListener('input', validSubmitButtom);

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