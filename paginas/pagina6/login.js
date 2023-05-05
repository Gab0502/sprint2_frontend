

function login(){
    let username = document.getElementById("username").value;
    let senha = document.getElementById("senha").value;
    if (username == "adm") {
        document.write ("Seja bem vindo á página de Administrador")
        window.location.href = "/paginas/paginaadm/paginaadm.html"
    }
    else if (username =="morador"){
        document.write ("Seja bem vindo á página de morador")
        window.location.href = "/paginas/paginamorador/morador.html"
    }
    else{
        alert("login ou senha incorretos")
    }
}
