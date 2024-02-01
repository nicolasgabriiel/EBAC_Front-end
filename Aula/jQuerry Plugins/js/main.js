$(document).ready(() => {
    $('#carrosel-imagens').slick({
        autoplay: true
    })

    $('.menu-hamburguer').click(() => {
        $('nav').slideToggle()
    })

    $('#telefone').mask('(00) 00000-0000')

    $('form').validate({
        rules: {
            nome: {
                required: true
            },
            email: {
                required: true,
                email: true
            },
            telefone: {
                required: true
            },
            mensagem: {
                required: true
            },
            veiculo: {
                required: false
            }
        },
        messages: {
            nome: 'Por favor, insira o seu nome',
            email: 'Por favor, insira o seu email',
            telefone: 'Por favor, insira o seu telefone',
            mensagem: 'Por favor, insira a sua mensagem',
        },
        submitHandler: function (form) {
            alert('Formulário enviado com sucesso!')
        },
        invalidHandler: function (e, validador) {
            let camposIncorretos = validador.numberOfInvalids();
            if (camposIncorretos) {
                alert(`Existem ${camposIncorretos} campos incorretos`)
            }
        }
    })

    $('.lista-veiculos button').click(function () {
        const destino = $('#contato')
        const nomeVeiculo = $(this).parent().find('h3').text()

        $('#veiculo').val(nomeVeiculo)

        $('html').animate({
            scrollTop: destino.offset().top
        },1000)
    })








})