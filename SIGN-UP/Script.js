function onSubmit(e) {
    e.preventDefault();
    var email = document.getElementById("email");
    var password = document.getElementById("password");

    var gmail = email.value.indexOf("@");
    var cut = email.value.slice(0, gmail);
    console.log("CUTED", cut);

    var check = email.value.indexOf("@gmail.com");
    if (check === -1) {
        alert("Give a correct Gmail!");
        email.style.border = "2px solid red";
        return;
    }
    // var pp = password.value.length;  
    console.log(password.value.length);
    if (password.value.length <= 8) {
        password.style.border = "2px solid red";
        alert("Abbe Password ki Mikdar Barha..")
        return;
    }

    if (!email.value || !password.value) {
        if (!email.value) {
            email.style.border = "2px solid red";
        }
        if (!password.value) {
            password.style.border = "2px solid red";
        }
        if (password.value) {
            password.style.border = "none";
        }
        if (email.value) {
            email.style.border = "none";
        }
        alert("Please fill in all required fields.");
        return;
    }

    sessionStorage.setItem("username", cut);

    alert("Best!");
    window.location.href = "../index.html";
    email.value = "";
    password.value = "";
}