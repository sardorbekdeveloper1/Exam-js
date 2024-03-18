const loginForm = document.getElementById("login-form");

loginForm.addEventListener("submit", function(event) {
  event.preventDefault(); 

  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;

  if (username === "Sardorbek" && password === "00000000") {
    localStorage.setItem('username', username);
    localStorage.setItem('password', password);

    window.location.href = "../index.html"; 
    loginForm.textContent = "";
  } else {
    alert("Invalid username or password!");
  }
});
