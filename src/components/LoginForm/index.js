import Handlebars from 'handlebars';
import './loginForm.scss';
import LoginForm from './loginForm.hbs?raw';
export default LoginForm;

Handlebars.registerHelper('LoginFields', () => {
  return [
    {name:"login", labelValue:"Логин", type:"text"},
    {name:"password_confirm", labelValue:"Пароль (ещё раз)", type:"password"},
  ]
});