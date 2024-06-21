import Handlebars from 'handlebars';
import LoginForm from './components/LoginForm'
import SignUpForm from './components/SignUpForm'
// import FormTest from './components/FormTest'
import Input from './components/Input'
import Title from './components/Title'
import Button from './components/Button'
import Link from './components/Link'
import Form from './components/Form'

// const rootElement = document.getElementById('root');

// const FormTestFunc = Handlebars.compile(FormTest);
// const FormTestElem = FormTestFunc();
// document.body.innerHTML = FormTestElem;

Handlebars.registerPartial('Title', Title);
Handlebars.registerPartial('Input', Input);
Handlebars.registerPartial('Button', Button);
Handlebars.registerPartial('Link', Link);
Handlebars.registerPartial('Form', Form);

const LoginFormFunc = Handlebars.compile(LoginForm);
const SignUpFormFunc = Handlebars.compile(SignUpForm);
const LoginFormElem = LoginFormFunc({
  titleContent: "Вход",
  buttonContent: "Авторизоваться",
  linkContent: "Нет аккаунта?",
  className: "loginForm",
});
const SignUpFormElem = SignUpFormFunc({
  titleContent: "Регистрация",
  buttonContent: "Зарегистрироваться",
  linkContent: "Войти",
  className: "signupForm",
});
// document.body.innerHTML = LoginFormElem;
// document.body.innerHTML = SignUpFormElem;
document.body.innerHTML += SignUpFormElem;



// Handle input focus
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
  };
});