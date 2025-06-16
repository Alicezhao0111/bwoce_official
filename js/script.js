// 手機選單切換
function initMobileMenu() {
  const toggleBtn = document.getElementById("mobileToggleBtn");
  const mobileMenu = document.getElementById("mobileMenu");
  const hamburger = document.getElementById("hamburgerIcon");
  let menuOpen = false;

  toggleBtn.addEventListener("click", () => {
    menuOpen = !menuOpen;
    mobileMenu.classList.toggle("mobile-menu-active", menuOpen);
    hamburger.classList.toggle("open", menuOpen);
  });

  document.addEventListener("click", (event) => {
    if (
      menuOpen &&
      !mobileMenu.contains(event.target) &&
      !toggleBtn.contains(event.target)
    ) {
      mobileMenu.classList.remove("mobile-menu-active");
      hamburger.classList.remove("open");
      menuOpen = false;
    }
  });
}

// 密碼欄切換
function initPasswordToggle() {
  document.querySelectorAll(".toggle-password").forEach((icon) => {
    icon.addEventListener("click", () => {
      const input = icon.previousElementSibling;
      const type =
        input.getAttribute("type") === "password" ? "text" : "password";
      input.setAttribute("type", type);
      icon.src =
        type === "text"
          ? "./images/login/eye_open_icon.svg"
          : "./images/login/eye_icon.svg";
    });
  });
}

// 全站 Modal
function initModal() {
  window.showModal = () => {
    document.getElementById("globalModal").style.display = "flex";
  };
  window.closeModal = () => {
    document.getElementById("globalModal").style.display = "none";
  };
}

document.addEventListener("DOMContentLoaded", () => {
  initMobileMenu();
  initPasswordToggle();
  initModal();
});
