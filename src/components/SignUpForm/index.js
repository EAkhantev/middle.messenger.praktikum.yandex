import Handlebars from 'handlebars';
import './signUpForm.scss';
import SignUpForm from './signUpForm.hbs?raw';
export default SignUpForm;

Handlebars.registerHelper('fields', () => {
  return [
    {name:"login", labelValue:"Логин", type:"text"},
    {name:"first_name", labelValue:"Имя", type:"text"},
    {name:"second_name", labelValue:"Фамилия", type:"text"},
    {name:"phone", labelValue:"Телефон", type:"tel"},
    {name:"password", labelValue:"Пароль", type:"password"},
    {name:"password_confirm", labelValue:"Пароль (ещё раз)", type:"password"},
  ]
});
