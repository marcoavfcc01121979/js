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

    var pesoEhValido = true;
    var alturaEhValido = true;

    if(Peso <= 0 || Peso >= 250) {
      pesoEhValido = false;
      resImc.textContent = 'Peso inválido';
      paciente.classList.add('paciente-invalido')
    }

    if(Altura <= 0 || Altura >= 3.00) {
      alturaEhValido = false;
      resImc.textContent = 'Altura inválida'
      paciente.classList.add('paciente-invalido')
    }

    if(pesoEhValido && alturaEhValido) {
      var imc = Peso / (Altura * Altura)
      resImc.textContent = imc.toFixed(2);
    }
  }

  
  var botaoAdicionar = document.querySelector('#adicionar-paciente');
  botaoAdicionar.addEventListener('click', (evento) => {
    evento.preventDefault();

    var form = document.querySelector('#form-adiciona');

    var nome = form.nome.value;
    var peso = form.peso.value;
    var altura = form.altura.value;
    var gordura = form.gordura.value;

    var pacienteTr = document.createElement('tr');

    var nomeTd = document.createElement('td');
    var pesoTd = document.createElement('td');
    var alturaTd = document.createElement('td');
    var gorduraTd = document.createElement('td');
    var imcTd = document.createElement('td');

    nomeTd.textContent = nome;
    pesoTd.textContent = peso;
    alturaTd.textContent = altura;
    gorduraTd.textContent = gordura;

    pacienteTr.appendChild(nomeTd);
    pacienteTr.appendChild(pesoTd);
    pacienteTr.appendChild(alturaTd);
    pacienteTr.appendChild(gorduraTd);

    var tabela = document.querySelector('#tabela-pacientes');
    tabela.appendChild(pacienteTr);
  })