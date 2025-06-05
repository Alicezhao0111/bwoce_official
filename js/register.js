document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('register_form');
    const password = document.getElementById('password');
    const confirmPassword = document.getElementById('confirmPassword');
    const passwordError = document.getElementById('passwordError');

    form.addEventListener('submit', function (e) {
        if (password.value !== confirmPassword.value) {
            e.preventDefault();
            passwordError.style.display = 'block';
        } else {
            passwordError.style.display = 'none';
        }
    });
});