document.getElementById("loginForm").addEventListener("submit", function(e) {
  e.preventDefault();

  let username = document.getElementById("username").value.trim();
  let password = document.getElementById("password").value.trim();
  let message = document.getElementById("message");

  if (username === "" || password === "") {
    message.style.color = "red";
    message.textContent = "Vui lòng nhập đầy đủ Username và Password!";
    return;
  }

    if (username === "admin" && password === "123") {
    message.style.color = "green";
    message.textContent = "Đăng nhập thành công!";
  } else {
    message.style.color = "red";
    message.textContent = "Sai username hoặc password!";
  }
});

function cancelLogin() {
  document.getElementById("loginForm").reset();
  document.getElementById("message").textContent = "";
}
