// @ts-nocheck
import Login from "./pages/Login";
import Signup from "./pages/Signup";

const rootElement = document.getElementById('root');
const loginPage = new Login();
const signupPage = new Signup();

const setPage = (path) => {
  switch (path) {
    case '/login':
      rootElement.replaceChildren(loginPage.getContent());
      break;
    case '/signup':
      rootElement.replaceChildren(signupPage.getContent());
      break;
    case '/chat':
      rootElement.replaceChildren(document.createTextNode('chat'));
      break;
    case '/profile':
      rootElement.replaceChildren(document.createTextNode('profile'));
      break;
    case '/page404':
      rootElement.replaceChildren(document.createTextNode('page404'));
      break;
    case '/page500':
      rootElement.replaceChildren(document.createTextNode('page500'));
      break;
    default:
      rootElement.replaceChildren(document.createTextNode(''));
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

setTimeout(() => {
  loginPage.props.loginForm.props.button.setProps({
    buttonContent: 'Войти',
  });
  loginPage._element.innerHTML = loginPage.render();

}, 3000); 