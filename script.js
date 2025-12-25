function login() {
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
    const msg = document.getElementById("msg");
    if (username === "admin" && password === "1234") {
        localStorage.setItem("user", username);
        window.location.href = "dashbord.html";
    } else {
        msg.textContent = "Wrong User or password";
        msg.style.color = "red";
    }
}