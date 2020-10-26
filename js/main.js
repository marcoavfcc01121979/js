var title = document.querySelector('.title');
			
  //title.innerText = 'Aparecida nutricionista'
  title.textContent = 'Aparecida nutricionista'

  var pacientes = document.querySelectorAll('.paciente');

  for(i = 0; i < pacientes.length; i++ ) {
    var paciente = pacientes[i];
    //console.log(pacientes[i])

    var tdPeso = paciente.querySelector('.info-peso');
    var tdAltura = paciente.querySelector('.info-altura');

    var Peso = tdPeso.textContent
    var Altura = tdAltura.textContent

    var resImc = paciente.querySelector('.info-imc');

    var pesoEhValido = validaPeso(Peso);
    var alturaEhValido = validaAltura(Altura);

    if(!pesoEhValido) {
      pesoEhValido = false;
      resImc.textContent = 'Peso inválido';
      paciente.classList.add('paciente-invalido')
    }

    if(!alturaEhValido) {
      alturaEhValido = false;
      resImc.textContent = 'Altura inválida'
      paciente.classList.add('paciente-invalido')
    }

    if(pesoEhValido && alturaEhValido) {
      var imc = calculaImc(Peso, Altura)
      resImc.textContent = imc;
    }
  }

  function validaPeso(peso) {
    if(peso >= 0 && peso <= 1000) {
      return true;
    } else {
      return false;
    }
  }

  function validaAltura (altura){
    if(altura >= 0 && altura <= 3.00) {
      return true;
    } else {
      return false;
    }
  }

  function calculaImc(Peso, Altura) {
    var imc = 0;

    imc = Peso / ( Altura * Altura );

    return imc.toFixed(2);
  }
  