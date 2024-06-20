import Handlebars from 'handlebars';
import LoginForm from './components/LoginForm'
import Input from './components/Input'
import Title from './components/Title'
import Button from './components/Button'
import Link from './components/Link'

// const rootElement = document.getElementById('root');

// Handlebars.registerPartial('LoginForm', LoginForm);
Handlebars.registerPartial('Title', Title);
Handlebars.registerPartial('Input', Input);
Handlebars.registerPartial('Button', Button);
Handlebars.registerPartial('Link', Link);


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