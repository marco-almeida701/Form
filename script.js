const form = document.querySelector('form')
const resultado = document.querySelector('#res')

form.addEventListener('submit', function(event) {
  event.preventDefault();

  const nome = document.querySelector('#Name').value
  const subn = document.querySelector('#subn').value
  const mai = document.querySelector('#mail').value
  if (nome.trim() === '' || subn.trim() === '' || mai.trim() === '') {
    alert('Preencha os campos corretamente')
    return;
  }

  const sobrenome = document.querySelector('#subn').value
  const email = document.querySelector('#mail').value
  const lado = document.querySelector('input[name="devweb"]:checked').id
  const senioridade = document.querySelector('#Senioridade').options[document.querySelector('#Senioridade').selectedIndex].value;
  const tecnologias = [];
  document.querySelectorAll('input[type="checkbox"]:checked').forEach(function(checkbox) {
    tecnologias.push(checkbox.nextElementSibling.textContent)
  });
  const experiencia = document.querySelector('#exp').value

  resultado.innerHTML = `<strong>Nome: </strong> ${nome} ${sobrenome}<br>
                            <strong>E-mail: </strong> ${email}<br>
                            <strong>Lado da aplicação: </strong> ${lado}<br>
                            <strong>Senioridade: </strong>${senioridade}<br>
                            <strong>Tecnologias: </strong>${tecnologias.join(', ')}<br>
                            <strong>Experiência: </strong>${experiencia}`
});
