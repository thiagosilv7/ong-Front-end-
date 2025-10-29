export function loadProjects() {
  const container = document.getElementById('lista-projetos');
  if (!container) return;

  const projetos = [
    { titulo: 'Ação na Comunidade', descricao: 'Distribuição de alimentos e roupas.' },
    { titulo: 'Educação Solidária', descricao: 'Aulas gratuitas para jovens.' },
    { titulo: 'Saúde para Todos', descricao: 'Campanhas de vacinação e atendimento médico.' }
  ];

  projetos.forEach(proj => {
    const card = document.createElement('article');
    card.innerHTML = `<h2>${proj.titulo}</h2><p>${proj.descricao}</p>`;
    container.appendChild(card);
  });
}

document.addEventListener('DOMContentLoaded', loadProjects);
