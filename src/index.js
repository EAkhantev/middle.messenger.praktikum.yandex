import Handlebars from 'handlebars';

import ChatPage from './components/ChatPage'
import ProfilePage from './components/ProfilePage'
import LoginForm from './components/LoginForm'
import SignUpForm from './components/SignUpForm'

import Title from './components/Title'
import Input from './components/Input'
import Button from './components/Button'
import Link from './components/Link'
import Form from './components/Form'
import ChatNav from './components/ChatNav'
import ChatItem from './components/ChatItem'
import BtnHideSide from './components/BtnHideSide'
import ProfileAvatar from './components/ProfileAvatar'
import ProfileInput from './components/ProfileInput'
import ProfileAction from './components/ProfileAction'
import ProfileForm from './components/ProfileForm'
import ErrorPage from './components/ErrorPage'

const rootElement = document.getElementById('root');

Handlebars.registerPartial('Title', Title);
Handlebars.registerPartial('Input', Input);
Handlebars.registerPartial('Button', Button);
Handlebars.registerPartial('Link', Link);
Handlebars.registerPartial('Form', Form);
Handlebars.registerPartial('ChatNav', ChatNav);
Handlebars.registerPartial('ChatItem', ChatItem);
Handlebars.registerPartial('BtnHideSide', BtnHideSide);
Handlebars.registerPartial('ProfileAvatar', ProfileAvatar);
Handlebars.registerPartial('ProfileInput', ProfileInput);
Handlebars.registerPartial('ProfileAction', ProfileAction);
Handlebars.registerPartial('ProfileForm', ProfileForm);

const ChatPageFunc = Handlebars.compile(ChatPage);
const ProfilePageFunc = Handlebars.compile(ProfilePage);
const LoginFormFunc = Handlebars.compile(LoginForm);
const SignUpFormFunc = Handlebars.compile(SignUpForm);
const ErrorPageFunc = Handlebars.compile(ErrorPage);

const ChatPageElem = ChatPageFunc();
const ProfilePageElem = ProfilePageFunc();
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
const Page404 = ErrorPageFunc({
  errorTitle: "404",
  errorDescription: "Не туда попали",
  linkContent: "Назад к чатам"
});
const Page500 = ErrorPageFunc({
  errorTitle: "500",
  errorDescription: "Мы уже фиксим",
  linkContent: "Назад к чатам"
});

// rootElement.innerHTML = ChatPageElem;
// rootElement.innerHTML = ProfilePageElem;
// rootElement.innerHTML = LoginFormElem;
// rootElement.innerHTML = SignUpFormElem;
rootElement.innerHTML = Page404;
// rootElement.innerHTML = Page500;



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