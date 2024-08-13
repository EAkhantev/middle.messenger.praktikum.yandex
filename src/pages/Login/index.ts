// @ts-nocheck
import './login.scss';
import Block from '../../utils/Block';
import Handlebars from 'handlebars';
import LoginTemplate from './login.hbs?raw';

import TestForm from '../../components/UI/Form';

export default class Login extends Block {

  constructor(props) {
    const fieldProps = [
      { name: 'login', type: 'text', labelValue: 'Логин' },
      { name: 'password', type: 'password', labelValue: 'Пароль' },
    ]
    const loginForm = new TestForm({
      className: 'loginForm',
      title: { titleContent: 'Вход' },
      fields: fieldProps,
      button: { buttonContent: 'ПШЛНХЙ' },
      link: { linkContent: 'Нет аккаунта?' },
    });
    
    super('div', { loginForm });
  }

  render() {
    const template = Handlebars.compile(LoginTemplate)
    return template({
      ...this.props,
      loginForm: this.props.loginForm.render(),
    });
  }

  update() {
    this._createResources();
    this._render();
  }
}
