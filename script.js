document.addEventListener("DOMContentLoaded", () => {
  // Nav click handling
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

  // Login/signup toggle
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

  // Hamburger menu
  const hamburger = document.getElementById("hamburger");
  const navLinks = document.getElementById("nav-links");

  if (hamburger && navLinks) {
    hamburger.addEventListener("click", () => {
      navLinks.classList.toggle("show");
      hamburger.classList.toggle("active");
    });
  }

  // Swiper carousel
  const swiper = new Swiper('.swiper', {
    loop: true,
    autoplay: {
      delay: 4000,
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

  // 🛒 Cart Logic

  // Add to cart buttons
  const addToCartButtons = document.querySelectorAll("button[data-product]");
  addToCartButtons.forEach(button => {
    button.addEventListener("click", () => {
      const productName = button.dataset.product;
      const price = parseFloat(button.dataset.price);
      addToCart(productName, price);
    });
  });

  // Add to cart function
  function addToCart(productName, price) {
    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    const index = cart.findIndex(item => item.name === productName);

    if (index !== -1) {
      cart[index].quantity += 1;
    } else {
      cart.push({ name: productName, price: price, quantity: 1 });
    }

    localStorage.setItem("cart", JSON.stringify(cart));
    updateCartCount();
  }

  // Update cart counter
  function updateCartCount() {
    const cart = JSON.parse(localStorage.getItem("cart")) || [];
    const count = cart.reduce((sum, item) => sum + item.quantity, 0);
    const countEl = document.getElementById("cart-count");
    if (countEl) countEl.textContent = count;
  }

  // Initialize cart count on load
  updateCartCount();
});
