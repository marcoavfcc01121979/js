var title = document.querySelector('.title');
			
  //title.innerText = 'Aparecida nutricionista'
  title.textContent = 'Aparecida nutricionista'

  var paciente = document.querySelector('#primeiro-paciente');
  var tdPeso = paciente.querySelector('.info-peso');
  var tdAltura = paciente.querySelector('.info-altura');

  var Peso = tdPeso.textContent
  var Altura = tdAltura.textContent

  var resImc = paciente.querySelector('.info-imc');

  var pesoEhValido = true;
  var alturaEhValido = true;

  if(Peso <= 0 || Peso >= 250) {
    console.log('Peso inválido!')
    pesoEhValido = false;
    resImc.textContent = 'Peso inválido';
  }

  if(Altura <= 0 || Altura >= 3.00) {
    console.log('Altura inválida!')
    alturaEhValido = false;
    resImc.textContent = 'Altura inválida'
  }

  if(pesoEhValido && alturaEhValido) {
    var imc = Peso / (Altura * Altura)
    resImc.textContent = imc;
  }
  