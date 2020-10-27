var pacientesTr = document.querySelectorAll('.paciente');

var tabela = document.querySelector('#tabela-pacientes');

tabela.addEventListener('dblclick', (event) => {
  event.target.parentNode.classList.add('fadeOut');

  setTimeout(() => {
    event.target.parentNode.remove();
  }, 500)
})

/*pacientesTr.forEach((paciente) => {
  paciente.addEventListener('dblclick', () => {
    console.log('Fui clicado.')
    paciente.remove();
  })
})*/