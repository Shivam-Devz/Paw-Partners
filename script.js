document.addEventListener("DOMContentLoaded", () => {

  const navItems = document.querySelectorAll(".navbar ul li");
  navItems.forEach((item) => {
    item.addEventListener("click", () => {
      const text = item.textContent.trim();
      switch (text) {
        case "Home":
          window.location.href = "index.html";
          break;
        case "Login":
          window.location.href = "Login.html";
          break;
        case "Cart":
          window.location.href = "Cart.html";
          break;
        default:
          console.log("Unknown navigation item:", text);
      }
    });
  });

  const loginForm = document.getElementById("login-form");
  const signupForm = document.getElementById("signup-form");
  const formTitle = document.getElementById("form-title");
  const toggleMessage = document.getElementById("toggle-message");

  if (loginForm && signupForm && toggleMessage) {
    function attachToggleLink() {
      const toggleLink = document.getElementById("toggle-link");
      if (toggleLink) {
        toggleLink.addEventListener("click", function (e) {
          e.preventDefault();
          toggleForms();
        });
      }
    }

    function toggleForms() {
      const isLoginShown = !loginForm.classList.contains("hidden");
      loginForm.classList.toggle("hidden");
      signupForm.classList.toggle("hidden");

      formTitle.textContent = isLoginShown ? "Register" : "Login";
      toggleMessage.innerHTML = isLoginShown
        ? `Already have an account? <a href="#" id="toggle-link">Login here</a>`
        : `Don't have an account? <a href="#" id="toggle-link">Register here</a>`;

      attachToggleLink();
    }

    attachToggleLink();
  }

  const hamburger = document.getElementById("hamburger");
  const navLinks = document.getElementById("nav-links");

  if (hamburger && navLinks) {
    hamburger.addEventListener("click", () => {
      navLinks.classList.toggle("show");
      hamburger.classList.toggle("active");
    });
  }

  const swiper = new Swiper('.swiper', {
    loop: true,
    autoplay: {
      delay: 3000,
      disableOnInteraction: false,
    },
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  });
});
