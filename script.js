const form = document.querySelector('form')
const resultado = document.querySelector('#res')

form.addEventListener('submit', function(event) {
  event.preventDefault();

  const nome = document.querySelector('#Name').value
  if (nome.trim() === '') {
    alert('Preencha os campos corretamente')
    return
  } 

  const subn = document.querySelector('#subn').value
  const email = document.querySelector('#mail').value
  const lado = document.querySelector('input[name="devweb"]:checked').id
  const select = document.querySelector('#Senioridade').options[document.querySelector('#Senioridade').selectedIndex].value;
  const tecnologias = [];
  document.querySelectorAll('input[type="checkbox"]:checked').forEach(function(checkbox) {
    tecnologias.push(checkbox.nextElementSibling.textContent)
  })
  const experiencia = document.querySelector('#exp').value

  if(subn.trim() === '' || email.trim() === ''){
  alert('Preencha os campos corretamente')
}
  resultado.innerHTML = `<strong>Nome: </strong> ${nome} ${subn}<br>
                            <strong>E-mail: </strong> ${email}<br>
                            <strong>Lado da aplicação: </strong> ${lado}<br>
                            <strong>Senioridade: </strong>${select}<br>
                            <strong>Tecnologias: </strong>${tecnologias.join(', ')}<br>
                            <strong>Experiência: </strong>${experiencia}`
})
