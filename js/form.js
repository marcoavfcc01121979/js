var botaoAdicionar = document.querySelector('#adicionar-paciente');
  botaoAdicionar.addEventListener('click', (evento) => {
    evento.preventDefault();

    var form = document.querySelector('#form-adiciona');

    var paciente = obtemPacienteDoFormulario(form);
    //console.log(paciente);

    var pacienteTr = montaTr(paciente)

    var erros = validaPaciente(paciente)
    if(erros.length > 0) {
      exibeMensagemDeErro(erros)
      return;
    }

    var tabela = document.querySelector('#tabela-pacientes');
    tabela.appendChild(pacienteTr);

    form.reset();
    var mensagemErro = document.querySelector('#mensagem-erro');
    mensagemErro.innerHTML = ""
  })

  function exibeMensagemDeErro(erros) {
    var ul = document.querySelector('#mensagem-erro')

    ul.innerHTML = "";

    erros.forEach(function(erro){
      var li = document.createElement('li');
      li.textContent = erro;
      ul.appendChild(li);
    })
  }

  function obtemPacienteDoFormulario(form){
    var paciente = {
      nome: form.nome.value,
      peso: form.peso.value,
      altura: form.altura.value,
      gordura: form.gordura.value,
      imc: calculaImc(form.peso.value, form.altura.value)
    }

    return paciente;
  }

  function montaTr(paciente) {
    var pacienteTr = document.createElement('tr');
    pacienteTr.classList.add('paciente');

    pacienteTr.appendChild(montaTd(paciente.nome, 'info-nome'));
    pacienteTr.appendChild(montaTd(paciente.peso, 'info-peso'));
    pacienteTr.appendChild(montaTd(paciente.altura, 'info-altura'));
    pacienteTr.appendChild(montaTd(paciente.gordura, 'info-gordura'));
    pacienteTr.appendChild(montaTd(paciente.imc, 'info-imc'));

    return pacienteTr;
  }

  function montaTd(dado, classe) {
    var td = document.createElement('td');
    td.textContent = dado;
    td.classList.add(classe)

    return td;
  }

  function validaPaciente(paciente){
    var erros = [];

    if(paciente.nome.length === 0) 
      erros.push('O nome é obrigátorio.');
    
    if(paciente.gordura.length === 0)
      erros.push('O Campo gordura é obrigátorio.')

    if(!validaPeso(paciente.peso)) 
      erros.push('Peso é inválido!');
    
    if(!validaAltura(paciente.altura)) 
      erros.push('Altura é inválida!');

    if(paciente.peso.length === 0) 
      erros.push('O Campo peso é obrigátorio.')

    if(paciente.altura.length === 0)
      erros.push('O Campo altura é obrigátorio.')

    return erros;
  }