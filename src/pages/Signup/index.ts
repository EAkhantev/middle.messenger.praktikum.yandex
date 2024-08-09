// @ts-nocheck
import './signup.scss';
import Block from "../../utils/Block";
import Handlebars from 'handlebars';
import SignupTemplate from './signup.hbs?raw';

import TestForm from '../../components/TestForm';

export default class Signup extends Block {

  constructor(props) {
    const fieldProps = [
      {name:"login", labelValue:"Логин", type:"text"},
      {name:"first_name", labelValue:"Имя", type:"text"},
      {name:"second_name", labelValue:"Фамилия", type:"text"},
      {name:"phone", labelValue:"Телефон", type:"tel"},
      {name:"password", labelValue:"Пароль", type:"password"},
      {name:"password_confirm", labelValue:"Пароль (ещё раз)", type:"password"},
    ]
    const signupForm = new TestForm({
      className: 'signupForm',
      title: { titleContent: 'Регистрация' },
      fields: fieldProps,
      button: { buttonContent: 'Зарегистрироваться' },
      link: { linkContent: 'Войти' },
    });
    
    super('div', { signupForm: signupForm });
  }

  render() {
    const template = Handlebars.compile(SignupTemplate)
    return template({
      ...this.props,
      signupForm: this.props.signupForm.render(),
    });
  }

  update() {
    this._element.innerHTML = this.render();
  }
}
