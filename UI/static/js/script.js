//shop div
var loginModal = document.getElementById("login");
var signupModal = document.getElementById("signup");
// profile modal button
var showLogin = document.getElementById("userlogin");
var showSignup = document.getElementById("userSignup");

showLogin.onclick = function () {
    loginModal.style.display = "flex";
    signupModal.style.display = "none";
};

showSignup.onclick = function () {
    loginModal.style.display = "none";
    signupModal.style.display = "flex";
};
