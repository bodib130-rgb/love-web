function login() {
  const user = document.getElementById("user").value;
  const pass = document.getElementById("pass").value;

  if (user === "kholoud" && pass === "0512") {
    window.location.href = "index.html";
  } else {
    document.getElementById("error").innerText =
      "الدخول هنا للحب بس ❤️";
  }
}