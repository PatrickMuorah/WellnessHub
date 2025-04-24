document.addEventListener("DOMContentLoaded", function () {
    // SIGN IN
    const signinForm = document.getElementById("signinForm");
    if (signinForm) {
      signinForm.addEventListener("submit", function (e) {
        e.preventDefault();
        alert("Sign in successful!");
        window.location.href = "index.html";
      });
    }
  
    // SIGN UP
    const signupForm = document.getElementById("signupForm");
    if (signupForm) {
      signupForm.addEventListener("submit", function (e) {
        e.preventDefault();
        alert("Sign up successful!");
        window.location.href = "signin.html";
      });
    }
  });
  