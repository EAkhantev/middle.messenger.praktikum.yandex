import Login from './pages/Login';
import Signup from './pages/Signup';
import Chat from './pages/Chat';
import Profile from './pages/Profile';
import Page404 from './pages/Page404';
import Page500 from './pages/Page500';
// import HttpClient from './utils/HttpClient';

const rootElement = document.getElementById('root');
const fakeRouting = document.querySelector('.page-list');
if (!rootElement) {
  throw new Error('Root element not found');
}

const loginPage = new Login();
const signupPage = new Signup();
const chatPage = new Chat();
const profile = new Profile();
const page404 = new Page404();
const page500 = new Page500();

const setPage = (path: string) => {
  switch (path) {
    case '/login':
      rootElement.replaceChildren(loginPage.getContent());
      break;
    case '/signup':
      rootElement.replaceChildren(signupPage.getContent());
      break;
    case '/chat':
      rootElement.replaceChildren(chatPage.getContent());
      break;
    case '/profile':
      rootElement.replaceChildren(profile.getContent());
      break;
    case '/page404':
      rootElement.replaceChildren(page404.getContent());
      break;
    case '/page500':
      rootElement.replaceChildren(page500.getContent());
      break;
    default:
      rootElement.replaceChildren(document.createTextNode(''));
      break;
  }
};

window.addEventListener('DOMContentLoaded', () => {
  const path = window.location.pathname;
  setPage(path);
});

fakeRouting!.addEventListener('click', (event) => {
  event.preventDefault();
  const target = event.target as HTMLElement;
  const isLink = target.closest('a');

  if (target.classList.contains('route-link')) {
    const href = target.getAttribute('href') ?? '';
    window.history.pushState({}, '', href);
    setPage(href);
  }

  if (isLink) {
    const href = target.getAttribute('href') ?? '';
    window.history.pushState({}, '', href);
    setPage(href);
  }
});

window.addEventListener('popstate', () => {
  const path = window.location.pathname;
  setPage(path);
});

// TODO: Можно потестить запросики
// const request = new HttpClient();
// request
//   .get('https://665466ce1c6af63f4677c550.mockapi.io/item', {})
//   .then((xhr) => {
//     console.log(xhr.responseText);
//   })
//   .catch((error) => {
//     console.error(error);
//   });

// request
//   .get('https://jsonplaceholder.typicode.com/posts', {
//     data: { userId: 1, id: 1 },
//   })
//   .then((xhr) => {
//     console.log(xhr.responseText);
//   })
//   .catch((error) => {
//     console.error(error);
//   });
