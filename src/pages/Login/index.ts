import './login.scss';
import Block from '../../utils/Block';
import LoginTemplate from './login.hbs?raw';

import Form from '../../components/UI/Form';
import { InputProps } from '../../interfaces/component.interfaces';

export default class Login extends Block {
  constructor() {
    const fieldProps: InputProps[] = [
      {
        name: 'login',
        type: 'text',
        labelValue: 'Логин',
        autocomplete: 'off',
        validationRules: {
          required: true,
        },
      },
      {
        name: 'password',
        type: 'password',
        labelValue: 'Пароль',
        autocomplete: 'new-password',
        validationRules: {
          required: true,
          minLength: 3,
          maxLength: 10,
        },
      },
    ];
    const loginForm = new Form({
      className: 'login-form',
      title: { titleContent: 'Вход' },
      fields: fieldProps,
      button: { buttonContent: 'Авторизоваться' },
      link: { linkContent: 'Нет аккаунта?', href: '/signup' },
    });

    super({
      loginForm,
    });
  }

  render() {
    return LoginTemplate;
  }
}
