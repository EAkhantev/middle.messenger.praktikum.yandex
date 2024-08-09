// @ts-nocheck
import TestForm from './components/TestForm';

const rootElement = document.getElementById('root');

const testForm = new TestForm({
  className: 'loginForm',
  title: { titleContent: 'Вход' },
  fields: [
    { name: 'login', type: 'text', labelValue: 'Логин' },
    { name: 'password', type: 'password', labelValue: 'Пароль' },
    { name: 'kslkdskd', type: 'password', labelValue: 'New field' },
  ],
  button: { buttonContent: 'ПШЛНХЙ' },
  link: { linkContent: 'Нет аккаунта?' },
});
rootElement.appendChild(testForm.getContent());

setTimeout(() => {
  testForm.props.button.setProps({
    buttonContent: 'Войти',
  });
  testForm.props.button.update();
  testForm._element.innerHTML = testForm.render();
}, 3000); 