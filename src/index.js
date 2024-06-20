import Handlebars from 'handlebars';
import LoginForm from './components/LoginForm'
import Input from './components/Input'
import Title from './components/Title'

// const rootElement = document.getElementById('root');

// Handlebars.registerPartial('LoginForm', LoginForm);
Handlebars.registerPartial('Input', Input);
Handlebars.registerPartial('Title', Title);


const LoginFormFunc = Handlebars.compile(LoginForm);
const LoginFormElem = LoginFormFunc();
document.body.innerHTML = LoginFormElem;



// Handle input focus
const label = document.querySelector('label');
const input = document.querySelector('input');

input.addEventListener("focusin", () => {
  label.classList.add('isActive')
});

input.addEventListener("focusout", () => {
  if (input.value === '') label.classList.remove('isActive');
});