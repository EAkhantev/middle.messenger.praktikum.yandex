import './signup.scss';
import Block from '../../utils/Block';
import SignupTemplate from './signup.hbs?raw';

import Form from '../../components/UI/Form';

export default class Signup extends Block {
  constructor() {
    const fieldProps = [
      {
        name: 'login',
        labelValue: 'Логин',
        type: 'text',
      },
      {
        name: 'first_name',
        labelValue: 'Имя',
        type: 'text',
        autocomplete: 'off',
      },
      {
        name: 'second_name',
        labelValue: 'Фамилия',
        type: 'text',
      },
      {
        name: 'phone',
        labelValue: 'Телефон',
        type: 'tel',
        autocomplete: 'off',
      },
      {
        name: 'password',
        labelValue: 'Пароль',
        type: 'password',
        autocomplete: 'off',
      },
      {
        name: 'password_confirm',
        labelValue: 'Пароль (ещё раз)',
        type: 'password',
        autocomplete: 'off',
      },
    ];
    const signupForm = new Form({
      className: 'signupForm',
      title: { titleContent: 'Регистрация' },
      fields: fieldProps,
      button: { buttonContent: 'Зарегистрироваться' },
      link: { linkContent: 'Войти' },
    });

    super({
      signupForm,
    });
  }

  render() {
    return SignupTemplate;
  }
}
