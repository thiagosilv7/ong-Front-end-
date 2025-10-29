export function setupDarkMode() {
  const toggle = document.createElement('button');
  toggle.textContent = 'Modo Escuro';
  toggle.setAttribute('aria-label', 'Ativar modo escuro');
  document.body.prepend(toggle);

  toggle.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
  });
}
