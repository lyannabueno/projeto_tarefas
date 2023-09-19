const form = document.getElementById('form-list');

const tarefas = [];

let listas = '';

form.addEventListener('submit', function(e) {
    e.preventDefault();

    adicionaLinha();
    atualizaLista();
});

function adicionaLinha() {
    const inputTarefa = document.getElementById('nome-tarefa');

    if (tarefas.includes(inputTarefa.value)) {
        alert(`A tarefa: '${inputTarefa.value}' já foi inserida`)
    } else {
        tarefas.push(inputTarefa.value);

        let lista = '<ul>';
        lista += `<li>${inputTarefa.value}</li>`;
        lista += '</ul>';

        listas += lista;
    }

    inputTarefa.value = '';
}

function atualizaLista() {
    const corpoLista = document.querySelector('ul');
    corpoLista.innerHTML = listas;
}

$(document).ready(function() {
    $('li').click(function() {
        $(this).css('text-decoration', 'line-through');
    });
});