alert("This is working!");
const formsContainer = document.querySelector('.forms-container');
const loginForm = document.querySelector('.login-link');
const signupForm = document.querySelector('.signup-link');

signupForm.addEventListener('click', () => {
    formsContainer.classList.add('active');
})
loginForm.addEventListener('click', () => {
    formsContainer.classList.remove('active');
})
