
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
})

FORM_SUBMIT.addEventListener('click', (e) => {
    
    removeActiveClass();
    
    if(e.target.className == 'form_input'){
        const input_Underscore = e.target.nextElementSibling;
        
        input_Underscore.classList.add('actived');
        // input_Underscore.style.width = '100%'
    }
})

const removeActiveClass = () => {
    const all_Undescores = document.querySelectorAll('.input_underline');

    all_Undescores.forEach(tag => {
        tag.classList.remove('actived');
        // tag.style.width = '0'  
    });
}