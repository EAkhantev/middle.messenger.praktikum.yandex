// @ts-nocheck
import TestForm from './components/TestForm';
// import render from './utils/render';

import TestButton from './components/TestButton';
import TestLink from './components/TestLink';
import TestTitle from './components/TestTitle';
import TestInput from './components/TestInput';

const rootElement = document.getElementById('root');

const title = new TestTitle({ titleContent: 'Вход' });
const input1 = new TestInput({ name: 'login', type: 'text', labelValue: 'Логин' });
const input2 = new TestInput({ name: 'password', type: 'password', labelValue: 'Пароль' });
const input3 = new TestInput({ name: 'kslkdskd', type: 'password', labelValue: 'New field' });
const button = new TestButton({ buttonContent: 'ПШЛНХЙ' });
const link = new TestLink({ linkContent: 'Нет аккаунта?' });

const testForm = new TestForm({
  className: 'loginForm',
  title,
  fields: [input1, input2, input3],
  button,
  link,
});
// testForm.render()
// render(rootElement, testForm);
rootElement.appendChild(testForm.getContent());

setTimeout(() => {
  testForm.props.button.setProps({
    buttonContent: 'Войти',
  });
  testForm.props.button.update();
  testForm._element.innerHTML = testForm.render();
}, 3000); 