// @ts-nocheck
import Login from "./pages/Login";

const rootElement = document.getElementById('root');
const loginPage = new Login();

const setPage = (path) => {
  switch (path) {
    case '/login':
      rootElement.innerHTML = loginPage.render();
      break;
    case '/signup':
      rootElement.innerHTML = 'signup';
      break;
    case '/chat':
      rootElement.innerHTML = 'chat';
      break;
    case '/profile':
      rootElement.innerHTML = 'profile';
      break;
    case '/page404':
      rootElement.innerHTML = 'page404';
      break;
    case '/page500':
      rootElement.innerHTML = 'page500';
      break;
    default:
      rootElement.innerHTML = '';
      break;
  }
}

window.addEventListener('DOMContentLoaded', () => {
  const path = window.location.pathname;
  setPage(path);
});

window.addEventListener('click', (event) => {
  event.preventDefault();
  const target = event.target;

  if (target.classList.contains('route-link')) {
    const href = target.getAttribute('href');
    window.history.pushState({}, '', href);
    setPage(href)
  }
});

window.addEventListener('popstate', () => {
  const path = window.location.pathname;
  setPage(path);
});


// TODO: move this logic to Input component
document.addEventListener('focusin', (event) => {
  const target = event.target;

  if (target.classList.contains('input-field')) {
    const label = target.labels[0];
    label.classList.add('isActive');
  }
});

document.addEventListener('focusout', (event) => {
  const target = event.target;

  if (target.classList.contains('input-field')) {
    const label = target.labels[0];
    if (target.value === '') label.classList.remove('isActive');
  }
});