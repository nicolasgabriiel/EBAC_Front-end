$(document).ready(() => {
    $('#cpf').mask('000.000.000-00')
    $('#cep').mask('00000-000')
    $('#telefone').mask('(00) 00000-0000')

    $('form').on('submit', ()=>{
        alert("Cadastrado com Sucesso!")
    })
})
