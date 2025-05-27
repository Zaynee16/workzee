document
    .getElementById("login-form")
    .addEventListener("submit", function (event) {
        event.preventDefault();
        alert("Login functionality coming soon!");
    });

function togglePassword() {
    const passwordInput = document.getElementById("password");
    const toggleIcon = document.getElementById("toggle-password");

    if (passwordInput.type === "password") {
        passwordInput.type = "text"; 
        toggleIcon.textContent = "🙈"; 
    } else {
        passwordInput.type = "password"; 
        toggleIcon.textContent = "👁️"; 
    }
    const toggle = document.getElementById("menu-toggle");
    const links = document.getElementById("nav-links");

    toggle.addEventListener('click', () => {
        links.classList.toggle('active');
    });
}