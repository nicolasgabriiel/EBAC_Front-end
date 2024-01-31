$(document).ready(function () {

    

    $('form').on('submit', (e) => {
        e.preventDefault()
        adicionarTarefas()
    })

    function adicionarTarefas() {
        const inputTarefa = $('#input-tarefas')
        const novaTarefa = $(`<li class="tarefa">${inputTarefa.val()}</li>`)
        $(novaTarefa).appendTo('#lista-de-tarefas')
        inputTarefa.val('')
    }

    $('#lista-de-tarefas').on('click', 'li', function(){
        $(this).toggleClass('finalizado')
    })


})



