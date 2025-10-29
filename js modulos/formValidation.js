export function validateForm() {
  const form = document.getElementById('form-contato');
  form.addEventListener('submit', (e) => {
    const nome = form.nome.value.trim();
    const email = form.email.value.trim();
    const mensagem = form.mensagem.value.trim();

    if (!nome || !email || !mensagem) {
      alert('Por favor, preencha todos os campos corretamente.');
      e.preventDefault();
    }
  });
}
