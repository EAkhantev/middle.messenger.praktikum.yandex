// @ts-nocheck
import './login.scss';
import Block from '../../utils/Block';
import Handlebars from 'handlebars';
import LoginTemplate from './login.hbs?raw';

import Form from '../../components/UI/Form';

export default class Login extends Block {

  constructor(props) {
    const fieldProps = [
      { name: 'login', type: 'text', labelValue: 'Логин', autocomplete: 'off' },
      { name: 'password', type: 'password', labelValue: 'Пароль', autocomplete: 'new-password' },
    ]
    const loginForm = new Form({
      className: 'loginForm',
      title: { titleContent: 'Вход' },
      fields: fieldProps,
      button: { buttonContent: 'ПШЛНХЙ' },
      link: { linkContent: 'Нет аккаунта?' },
    });
    
    super({ 
      loginForm,
    });
  }

  render() {
    return LoginTemplate;
  }
}
