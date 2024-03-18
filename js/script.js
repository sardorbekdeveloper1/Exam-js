
// LogOut start
window.onload = function () {
  if (localStorage.getItem("username") && localStorage.getItem("password")) {
    const logoutButton = document.getElementById("logout-btn");
    logoutButton.addEventListener("click", function () {
      localStorage.removeItem("username");
      localStorage.removeItem("password");
      window.location.href = "login.html";
    });
    document.body.appendChild(logoutButton);
  }
};
const logoutBtn = document.getElementById("logout-btn");
logoutBtn.addEventListener("click", () => {
  localStorage.clear()
  window.location.href = "../dist/login.html"
})
// LogOut end
