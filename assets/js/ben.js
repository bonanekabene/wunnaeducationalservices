//tabs functionality for login and signup forms 
const loginBtn = document.getElementById("loginBtn");
const signupBtn = document.getElementById("signupBtn");
const loginForm = document.getElementById("loginForm");
const signupForm = document.getElementById("signupForm");

loginBtn.addEventListener("click", () => {
  loginForm.classList.add("active");
  signupForm.classList.remove("active");

  loginBtn.classList.add("active");
  signupBtn.classList.remove("active");
});

signupBtn.addEventListener("click", () => {
  signupForm.classList.add("active");
  loginForm.classList.remove("active");

  signupBtn.classList.add("active");
  loginBtn.classList.remove("active");
});

//show/hide password functionality
const password = document.getElementById("passwordInput");
const togglePassword = document.getElementById("togglePassword");

togglePassword.addEventListener("click", () => {
  const isPassword = password.type === "password";
  
  password.type = isPassword ? "text" : "password";
  togglePassword.classList.toggle("fa-eye");
  togglePassword.classList.toggle("fa-eye-slash");
});

//show/hide password functionality for signup form
const passwordVar = document.getElementById("passwordVarInput");
const toggleBtn = document.getElementById("toggleBtn");

toggleBtn.addEventListener("click", () => {
  const ispasswordVar = passwordVar.type === "password";
  
  passwordVar.type = ispasswordVar ? "text" : "password";
  toggleBtn.classList.toggle("fa-eye");
  toggleBtn.classList.toggle("fa-eye-slash");
});

