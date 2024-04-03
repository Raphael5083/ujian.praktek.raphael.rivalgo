function Login(){
    let password = document.getElementById("password").value;
    let email = document.getElementById("email").value;
    if (email == "admin" && password == "admin"){
        window.alert("login Berhasil");
        window.location=("welcome.html");
    }
    else {
        window.alert("login gagal");
    }
}