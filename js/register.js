document.addEventListener("DOMContentLoaded", function () {
  // 區域一覽表
  new TwCitySelector({
    el: ".register__city-selector",
    countyFieldName: "user_city",
    districtFieldName: "user_area",
    bootstrapStyle: true,
  });
  // 密碼一致性
  function setupPasswordValidation(formId) {
    const form = document.getElementById(formId);
    if (!form) return;

    const password = form.querySelector("#password");
    const confirmPassword = form.querySelector("#confirmPassword");
    const passwordError = form.querySelector("#passwordError");

    form.addEventListener("submit", function (e) {
      if (password.value !== confirmPassword.value) {
        e.preventDefault();
        passwordError.style.display = "block";
      } else {
        passwordError.style.display = "none";
      }
    });
  }

  setupPasswordValidation("register_form");
  setupPasswordValidation("password_reset_form");
});
