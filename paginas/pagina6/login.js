let username = document.getElementById("username").value;
let senha = document.getElementById("senha").value;

function login(){
    if (username == "adm") {
        document.write ("Seja bem vindo á página de Administrador")
        window.location.href = "/paginas/paginaadm/paginaadm.html"
    }
    else if (username =="morador"){
        document.write ("Seja bem vindo á página de morador")
        window.location.href = "/paginas/morador/morador.html"
    }
    else{
        alert("login ou senha incorretos")
    }
}
