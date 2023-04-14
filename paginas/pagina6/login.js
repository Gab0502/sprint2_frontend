let user = prompt ("Digite sua usuário: ");
let senha = prompt ("Digite seu senha");

if (user == "adm") {
    document.write ("Seja bem vindo á página de Administrador")
    window.location.href = "/paginas/paginaadm/paginaadm.html"
}
else if (user =="morador"){
    document.write ("Seja bem vindo á página de morador")
    window.location.href = "/paginas/morador/morador.html"
}
else{
    document.write ("Login ou senha errados")
}
