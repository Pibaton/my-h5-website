function login() {
  let user = document.getElementById("username").value;
  let pass = document.getElementById("password").value;

  if (user && pass) {
    document.getElementById("loginPage").classList.add("hidden");
    document.getElementById("dashboardPage").classList.remove("hidden");
  } else {
    alert("Enter username and password!");
  }
}

function logout() {
  document.getElementById("dashboardPage").classList.add("hidden");
  document.getElementById("loginPage").classList.remove("hidden");
}
