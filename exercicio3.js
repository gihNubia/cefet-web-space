// Faça o exercício dos PARÁGRAFOS aqui
// Este arquivo AINDA NÃO ESTÁ INCLUÍDO no arquivo HTML

let itensDaListaOrdenada = document.querySelectorAll('#aliens p');

itensDaListaOrdenada.forEach(function(itemEl) {
  itemEl.addEventListener('click', function() {
    itemEl.classList.toggle('expandido')
  })
});
