// @ts-nocheck
import TestForm from './components/TestForm';
import Login from './pages/Login';

const rootElement = document.getElementById('root');
const loginPage = new Login();
rootElement.appendChild(loginPage.getContent());

setTimeout(() => {
  loginPage.props.loginForm.props.button.setProps({
    buttonContent: 'Войти',
  });
  loginPage._element.innerHTML = loginPage.render();
}, 3000); 