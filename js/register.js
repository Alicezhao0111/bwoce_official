document.addEventListener('DOMContentLoaded', function () {
    function setupPasswordValidation(formId) {
        const form = document.getElementById(formId);
        if (!form) return; // 防呆，避免找不到該 form

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

    // 在這裡列出你的表單 id
    setupPasswordValidation('register_form');
    setupPasswordValidation('password_reset_form');
});
