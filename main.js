const formulario = document.querySelector('form');
let validacao = "";
let checkhumano = formulario.querySelector('#verificar');

checkhumano.addEventListener('click', function(){
    validacao = "clicou"
});


formulario.addEventListener('submit', function(){

// capturar elementos com as informações digitadas pelo usuário
    let userEmail = formulario.querySelector('#user-email');
    let userPassword = formulario.querySelector('#user-password');
    let botaoLogin = formulario.querySelector('#botao-login');


    // validar os campos
    checkhumano.addEventListener('click', function(){
        validacao = "clicou"
    });
    if(userEmail.value == ''){
        alert("E-mail não informado!");
    }
    if (userPassword.value == ''){
        alert('Senha não informada!');
    }
    if (validacao != "clicou"){
        alert('Você não é um humano!');
    }
})