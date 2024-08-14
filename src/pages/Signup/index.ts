// @ts-nocheck
import './signup.scss';
import Block from '../../utils/Block';
import Handlebars from 'handlebars';
import SignupTemplate from './signup.hbs?raw';

import TestForm from '../../components/UI/Form';

export default class Signup extends Block {

  constructor(props) {
    const fieldProps = [
      {name:"login", labelValue:"Логин", type:"text"},
      {name:"first_name", labelValue:"Имя", type:"text", autocomplete: "off"},
      {name:"second_name", labelValue:"Фамилия", type:"text"},
      {name:"phone", labelValue:"Телефон", type:"tel", autocomplete: "off" },
      {name:"password", labelValue:"Пароль", type:"password", autocomplete:"off"},
      {name:"password_confirm", labelValue:"Пароль (ещё раз)", type:"password", autocomplete:"off"},
    ]
    const signupForm = new TestForm({
      className: 'signupForm',
      title: { titleContent: 'Регистрация' },
      fields: fieldProps,
      button: { buttonContent: 'Зарегистрироваться' },
      link: { linkContent: 'Войти' },
    });
    
    super('div', { signupForm });
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
