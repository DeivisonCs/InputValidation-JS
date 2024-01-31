
const FORM_SUBMIT = document.getElementById('sign_in_form');

FORM_SUBMIT.addEventListener('submit', (e) => {
    e.preventDefault();

    const form_user = document.getElementById('input_user');
    const form_email = document.getElementById('input_email');
    const form_password = document.getElementById('input_password');
    
    const USER = form_user.value;
    const EMAIL = form_email.value;
    const PASSWORD = form_password.value;

    console.log(USER);
    console.log(EMAIL);
    // console.log(PASSWORD);
})