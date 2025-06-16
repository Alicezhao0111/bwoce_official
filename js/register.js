// 密碼一致性
document.addEventListener('DOMContentLoaded', function () {
    function setupPasswordValidation(formId) {
        const form = document.getElementById(formId);
        if (!form) return;

        const password = form.querySelector('#password');
        const confirmPassword = form.querySelector('#confirmPassword');
        const passwordError = form.querySelector('#passwordError');

        form.addEventListener('submit', function (e) {
            if (password.value !== confirmPassword.value) {
                e.preventDefault();
                passwordError.style.display = 'block';
            } else {
                passwordError.style.display = 'none';
            }
        });
    }

    setupPasswordValidation('register_form');
    setupPasswordValidation('password_reset_form');
});
