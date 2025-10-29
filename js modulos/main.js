import { validateForm } from './modules/formValidation.js';
import { loadProjects } from './modules/domUtils.js';
import { setupDarkMode } from './modules/darkMode.js';

document.addEventListener('DOMContentLoaded', () => {
  validateForm();
  loadProjects();
  setupDarkMode();
});
