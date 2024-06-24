import Handlebars from 'handlebars';
import ChatPage from './components/ChatPage'
// import BasePage from './components/BasePage'
import LoginForm from './components/LoginForm'
import SignUpForm from './components/SignUpForm'
import Input from './components/Input'
import Title from './components/Title'
import Button from './components/Button'
import Link from './components/Link'
import Form from './components/Form'
import ChatNav from './components/ChatNav'
import ChatItem from './components/ChatItem'

const rootElement = document.getElementById('root');

Handlebars.registerPartial('Title', Title);
Handlebars.registerPartial('Input', Input);
Handlebars.registerPartial('Button', Button);
Handlebars.registerPartial('Link', Link);
Handlebars.registerPartial('Form', Form);
Handlebars.registerPartial('ChatNav', ChatNav);
Handlebars.registerPartial('ChatItem', ChatItem);

const ChatPageFunc = Handlebars.compile(ChatPage);
const LoginFormFunc = Handlebars.compile(LoginForm);
const SignUpFormFunc = Handlebars.compile(SignUpForm);

const ChatPageElem = ChatPageFunc();
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

rootElement.innerHTML = ChatPageElem;
// rootElement.innerHTML = LoginFormElem;
// rootElement.innerHTML = SignUpFormElem;


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