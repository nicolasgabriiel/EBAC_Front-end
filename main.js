let idade = document.getElementById('idade')
let anoNascimento = document.getElementById('anoNascimento')
let enviarFormulario = document.getElementById('btnEnviar')
let containerMensagemDeErro = document.getElementById('mensagemErro')
let containerMensagemDeSucesso = document.getElementById('mensagemSucesso')

let dadosCorretos = false

enviarFormulario.disabled = true

enviarFormulario.addEventListener('click',function validarFormulario (event) {
    //Mensagem Exibidas no HTML
    let mensagemSucesso = `Parece que você tem <strong>${idade.value}</strong> anos e nasceu em <strong>${anoNascimento.value}</strong>.`
    let mensagemErro = `A sua idade não pode ser maior do que o ano em que nasceu!`
    event.preventDefault()

    if (verificarValor()) {
        containerMensagemDeSucesso.innerHTML = mensagemSucesso
        estilizarErro(false)
        limparInputs()

    } else {
        containerMensagemDeErro.innerHTML = mensagemErro
        estilizarErro(true)

    }
}
)
function verificarValor() {
    dadosCorretos = parseInt(anoNascimento.value) > parseInt(idade.value) ? true : false;
    return dadosCorretos
}
function limparInputs() {
    idade.value = ''
    anoNascimento.value = ''
    enviarFormulario.disabled = true
    enviarFormulario.classList.remove('btn-ativo')
}
//Funcionamento do Botão 
anoNascimento.addEventListener('input', ativarBotao)
idade.addEventListener('input', ativarBotao)

function ativarBotao() {
    console.log('chamei a função')
    if (anoNascimento.value === "" || idade.value === "") {
        enviarFormulario.disabled = true
        enviarFormulario.classList.remove('btn-ativo')
    } else {
        enviarFormulario.disabled = false
        enviarFormulario.classList.add('btn-ativo')
    }
}
function estilizarErro(valor) {
    if (valor) {
        containerMensagemDeErro.classList.remove('hiden')
        anoNascimento.classList.add('error')
        containerMensagemDeSucesso.classList.add('hiden')
        enviarFormulario.disabled = true
        enviarFormulario.classList.remove('btn-ativo')
    } else {
        containerMensagemDeErro.classList.add('hiden')
        anoNascimento.classList.remove('error')
        containerMensagemDeSucesso.classList.remove('hiden')
    }

}

