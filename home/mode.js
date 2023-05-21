let count = 1;
document.getElementById("radio1").checked = true;

setInterval(function(){
  nextImage();

},4000)


function nextImage(){
  count++;
  if(count>3){
    count = 1;

  }
  document.getElementById("radio"+count).checked = true;
}
function dkm(darkmode){
  document.body.style.background = darkmode
}


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

function verificarua() {
  const ruaoutput = document.getElementById("ruaoutput");
  const rua = document.getElementById("rua").value;
  
  if (rua == "Rua Eng. Silva Braga") {
    ruaoutput.innerHTML = "A rua está com certa anomalia, fique atento para mais atualizações.";
  }
  else if (rua == "Rua Marques de Lages"){
    ruaoutput.innerHTML = "A rua apresenta valores normais, aproveite seu dia!"
  }
  else if(rua == "Rua dos Operarios" ){
    ruaoutput.innerHTML = "A rua esta em situação grave, por favor proteja seus bens e seus familiares"
  }
  else{
    ruaoutput.innerHTML = "Desculpe ainda não trabalhamos com essa rua"
  }
}

