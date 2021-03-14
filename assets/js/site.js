let nome = document.querySelector("#nome");
let email = document.querySelector("#email");
let assunto = document.querySelector("#assunto");
let nomeOk = false;
let emailOk = false;
let assuntoOk = false;

function validarNome() {
    let txtNome = document.querySelector("#txtNome");
    if(nome.value.length < 3) {
        nomeOk = false;
        txtNome.innerHTML = "o nome precisa ter no mínimo 3 caracteres";
        txtNome.style.color = "red";
    }
    else {
        nomeOk = true;
        txtNome.innerHTML = "nome válido";
        txtNome.style.color = "green";
    }
}

function validarEmail() {
    let txtEmail = document.querySelector("#txtEmail");
    if(email.value.indexOf("@") == -1 || email.value.indexOf(".") == -1) { //se o @ ou o . não existirem
        emailOk = false;
        txtEmail.innerHTML = "e-mail inválido";
        txtEmail.style.color = "red";
    }
    else {
        emailOk = true;
        txtEmail.innerHTML = "e-mail válido";
        txtEmail.style.color = "green";
    }
}

function validarMensagem() {
    let max = 500; //número máximo de caracteres na mensagem
    let txtAssunto = document.querySelector("#txtMensagem");
    if(mensagem.value.length > max) {
        assuntoOk = false;
        txtAssunto.style.color = "red";
        txtAssunto.innerHTML = "limite excedido em "+(mensagem.value.length-max)+" caracteres";
    }
    else {
        assuntoOk = true;
        txtAssunto.style.color = "green";
        txtAssunto.innerHTML = (max-mensagem.value.length)+" caracteres restantes";
    }
}

function enviar() {
    if (nomeOk == true && emailOk == true && assuntoOk == true) {
        alert("Mensagem enviada com sucesso!");
    }
    else {
        alert("Preencha o formulário corretamente antes de enviar...");
    }
}
