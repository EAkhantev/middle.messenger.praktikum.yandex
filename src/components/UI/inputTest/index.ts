import './inputTest.scss';
import Block from '../../../utils/Block';
import InputTemplate from './inputTest.hbs?raw';

import ErrorLine from '../ErrorLine/errorLine';

export type InputPropsType = {
  name?: string;
  validationRules?: {
    type?: string;
    required?: boolean;
    minLength?: number;
    maxLength?: number;
  };
  errorLine?: ErrorLine;
  events?: { [key: string]: (event: Event) => void };
};

export default class inputTest extends Block<InputPropsType> {
  public errorMessage = '';
  public isValid = true;

  constructor(props: InputPropsType) {
    super({
      ...props,
      events: {
        // focus: () => {
        //   console.log('focus');
        // },
        blur: (event: Event) => {
          const target = event.target as HTMLInputElement;
          this.validate(target.value);
        },
      },
    });
  }

  render() {
    return InputTemplate;
  }

  validate(inputValue: string) {
    const rules = {
      required: (value: string) => value !== '',
      email: (value: string) =>
        /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(value),
      phone: (value: string) => /^((\+7|7|8)+([0-9]){10})$/.test(value),
      name: (value: string) => /^[а-яА-Яa-zA-Z-]+$/.test(value),
      login: (value: string) => /^[a-zA-Z0-9-_]+$/.test(value),
      password: (value: string) =>
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,40}$/.test(value),
      minlength: (value: string, length: number) => value.length >= length,
      maxlength: (value: string, length: number) => value.length <= length,
    };

    if (!this.props.validationRules) return;

    const { type, required, minLength, maxLength } = this.props.validationRules;
    if (maxLength) {
      const result = rules.maxlength(inputValue, maxLength);
      if (!result) {
        this.isValid = result;
        this.errorMessage = `Максимальная длина должна быть не более ${maxLength} символов`;
        return;
      } else {
        this.isValid = true;
        this.errorMessage = '';
      }
    }

    if (minLength) {
      const result = rules.minlength(inputValue, minLength);
      if (!result) {
        this.isValid = result;
        this.errorMessage = `Минимальная длина должна быть не менее ${minLength} символов`;
        return;
      } else {
        this.isValid = true;
        this.errorMessage = '';
      }
    }

    if (type === 'phone') {
      const result = rules.phone(inputValue);
      if (!result) {
        this.isValid = result;
        this.errorMessage = 'Некорректный номер телефона';
      } else {
        this.isValid = true;
        this.errorMessage = '';
      }
    }

    if (type === 'email') {
      const result = rules.email(inputValue);
      if (!result) {
        this.isValid = result;
        this.errorMessage = 'Некорректный адрес электронной почты';
      } else {
        this.isValid = true;
        this.errorMessage = '';
      }
    }

    if (type === 'name') {
      const result = rules.name(inputValue);
      if (!result) {
        this.isValid = result;
        this.errorMessage =
          'Убедитесь, что первая буква заглавная, не используйте пробелы, цифры и спецсимволы';
      } else {
        this.isValid = true;
        this.errorMessage = '';
      }
    }

    if (type === 'login') {
      const result = rules.email(inputValue);
      if (!result) {
        this.isValid = result;
        this.errorMessage = 'Некорректный адрес электронной почты';
      } else {
        this.isValid = true;
        this.errorMessage = '';
      }
    }

    if (type === 'password') {
      const result = rules.email(inputValue);
      if (!result) {
        this.isValid = result;
        this.errorMessage = 'Некорректный адрес электронной почты';
      } else {
        this.isValid = true;
        this.errorMessage = '';
      }
    }

    if (required) {
      const result = rules.required(inputValue);
      if (!result) {
        this.isValid = result;
        this.errorMessage = 'Это поле обязательно для заполнения';
      } else {
        this.isValid = true;
        this.errorMessage = '';
      }
    }
  }
}
