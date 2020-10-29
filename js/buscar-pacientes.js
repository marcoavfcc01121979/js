const buscarPaciente = document.querySelector('#buscar-paciente');

buscarPaciente.addEventListener('click', () => {
  //console.log('buscar paciente');

  var xhr = new XMLHttpRequest();

  xhr.open('GET', 'https://api-pacientes.herokuapp.com/pacientes');

  xhr.addEventListener('load', () => {
    var erroAjax = document.querySelector('#erro-ajax');
    if(xhr.status == 200) {
      erroAjax.classList.add('invisivel');
      var resposta = xhr.responseText;

      var pacientes = JSON.parse(resposta);
      
      pacientes.forEach((paciente) => {
        adicionaPacienteNaTabela(paciente);
      })
    }else {
      console.log(xhr.status);
      console.log(xhr.responseText);
      
      erroAjax.classList.remove('invisivel');
    }
    
  })

  xhr.send();
})