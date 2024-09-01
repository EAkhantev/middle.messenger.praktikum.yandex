import './login.scss';
import Block from '../../utils/Block';
import LoginTemplate from './login.hbs?raw';

import Form from '../../components/UI/Form';

export default class Login extends Block<Form> {
  constructor() {
    const fieldProps = [
      {
        name: 'login',
        type: 'text',
        labelValue: 'Логин',
        autocomplete: 'off',
        validationRules: {
          type: 'required',
        },
      },
      {
        name: 'password',
        type: 'password',
        labelValue: 'Пароль',
        autocomplete: 'new-password',
        validationRules: {
          type: 'required',
          minLength: 3,
          maxLength: 10,
        },
      },
    ];
    const loginForm = new Form({
      className: 'loginForm',
      title: { titleContent: 'Вход' },
      fields: fieldProps,
      button: { buttonContent: 'ПШЛНХЙ' },
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
