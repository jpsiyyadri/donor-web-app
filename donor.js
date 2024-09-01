// app.js

document.addEventListener('DOMContentLoaded', function () {
    const loginForm = document.getElementById('loginForm');
    const registerForm = document.getElementById('registerForm');
    const showLoginBtn = document.getElementById('showLogin');
    const showRegisterBtn = document.getElementById('showRegister');

    showLoginBtn.addEventListener('click', function () {
        loginForm.classList.remove('d-none');
        registerForm.classList.add('d-none');
        showLoginBtn.classList.add('active');
        showRegisterBtn.classList.remove('active');
    });

    showRegisterBtn.addEventListener('click', function () {
        registerForm.classList.remove('d-none');
        loginForm.classList.add('d-none');
        showRegisterBtn.classList.add('active');
        showLoginBtn.classList.remove('active');
    });
});
