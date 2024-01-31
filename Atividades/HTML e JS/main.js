// INPUTS 
const idade = document.getElementById('idade')
const anoNascimento = document.getElementById('anoNascimento')

const btnEnviar = document.getElementById('btnEnviar')
btnEnviar.disabled = true

// MENSAGENS DINAMICAS 
const containerMensagemDeErro = document.getElementById('mensagemErro')
const containerMensagemDeSucesso = document.getElementById('mensagemSucesso')

document.querySelector('form').addEventListener('submit', function validarFormulario(event) {
    event.preventDefault()

    let mensagemSucesso = `Parece que você tem <strong>${idade.value}</strong> anos e nasceu em <strong>${anoNascimento.value}</strong>.`
    let mensagemErro = `A sua idade não pode ser maior do que o ano em que nasceu!`

    if (verificarValor()) {
        containerMensagemDeSucesso.innerHTML = mensagemSucesso
        estilizarErro(false)
        limparInputs()
    } else {
        containerMensagemDeErro.innerHTML = mensagemErro
        estilizarErro(true)
    }
})
function verificarValor() {
    return parseInt(anoNascimento.value) > parseInt(idade.value) ? true : false;
}
function limparInputs() {
    idade.value = ''
    anoNascimento.value = ''
    btnEnviar.disabled = true
}
//Funcionamento do Botão 
anoNascimento.addEventListener('input', ativarBotao)
idade.addEventListener('input', ativarBotao)

function ativarBotao() {
    if (anoNascimento.value === "" || idade.value === "") {
        btnEnviar.disabled = true
    } else {
        btnEnviar.disabled = false
    }
}
function estilizarErro(valor) {
    if (valor) {
        btnEnviar.disabled = true

        anoNascimento.classList.add('error')
        containerMensagemDeErro.classList.remove('hiden')
        containerMensagemDeSucesso.classList.add('hiden')
    } else {
        anoNascimento.classList.remove('error')
        containerMensagemDeErro.classList.add('hiden')
        containerMensagemDeSucesso.classList.remove('hiden')
    }
}

