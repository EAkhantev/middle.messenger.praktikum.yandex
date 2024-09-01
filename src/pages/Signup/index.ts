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
        validationRules: {
          required: true,
        },
      },
      {
        name: 'first_name',
        labelValue: 'Имя',
        type: 'text',
        autocomplete: 'off',
        validationRules: {
          required: true,
        },
      },
      {
        name: 'second_name',
        labelValue: 'Фамилия',
        type: 'text',
        validationRules: {
          required: true,
        },
      },
      {
        name: 'phone',
        labelValue: 'Телефон',
        type: 'tel',
        autocomplete: 'off',
        validationRules: {
          required: true,
        },
      },
      {
        name: 'password',
        labelValue: 'Пароль',
        type: 'password',
        autocomplete: 'off',
        validationRules: {
          required: true,
        },
      },
      {
        name: 'password_confirm',
        labelValue: 'Пароль (ещё раз)',
        type: 'password',
        autocomplete: 'off',
        validationRules: {
          required: true,
        },
      },
    ];
    const signupForm = new Form({
      className: 'signupForm',
      title: { titleContent: 'Регистрация' },
      fields: fieldProps,
      button: { buttonContent: 'Зарегистрироваться' },
      link: { linkContent: 'Войти', href: '/login' },
    });

    super({
      signupForm,
    });
  }

  render() {
    return SignupTemplate;
  }
}
