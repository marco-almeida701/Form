const form = document.querySelector('form');
const resultado = document.querySelector('#res');

form.addEventListener('submit', function(event) {
  event.preventDefault();

  const nome = document.querySelector('#Name').value;
  if (nome.trim() === '') {
    resultado.textContent = 'Preencha o campo Nome';
    return;
  }

  const sobrenome = document.querySelector('#subn').value;
  const email = document.querySelector('#mail').value;
  const lado = document.querySelector('input[name="devweb"]:checked').id;
  const senioridade = document.querySelector('#Senioridade').options[document.querySelector('#Senioridade').selectedIndex].value;
  const tecnologias = [];
  document.querySelectorAll('input[type="checkbox"]:checked').forEach(function(checkbox) {
    tecnologias.push(checkbox.nextElementSibling.textContent);
  });
  const experiencia = document.querySelector('#exp').value;

  resultado.innerHTML = `Nome: ${nome} ${sobrenome}<br>
                          E-mail: ${email}<br>
                          Lado da aplicação: ${lado}<br>
                          Senioridade: ${senioridade}<br>
                          Tecnologias: ${tecnologias.join(', ')}<br>
                          Experiência: ${experiencia}`;
});